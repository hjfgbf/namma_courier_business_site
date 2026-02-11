'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowLeftRight, LocateFixed, Calendar, Clock, ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';

export default function CheckoutBox() {
    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState('Chennai');
    const [selectedVehicle, setSelectedVehicle] = useState('2wheeler');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLocating, setIsLocating] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState({
        hours: new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours() === 0 ? 12 : new Date().getHours(),
        minutes: new Date().getMinutes(),
        period: new Date().getHours() >= 12 ? 'PM' : 'AM'
    });

    const cityDropdownRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const timePickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
            if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
                setIsTimePickerOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleTimeChange = (field: 'hours' | 'minutes' | 'period', value: string | number) => {
        setSelectedTime(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const currentMethods = {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    };

    const changeMonth = (offset: number) => {
        const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
        setCurrentDate(new Date(newDate));
    };

    const clearDate = () => {
        setSelectedDate(null);
        setIsCalendarOpen(false);
    };

    const resetToToday = () => {
        const today = new Date();
        setSelectedDate(today);
        setCurrentDate(today);
        setIsCalendarOpen(false);
    };

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        setIsCalendarOpen(false);
    };

    const renderCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isSelected = selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            const isToday = new Date().toDateString() === date.toDateString();

            days.push(
                <div
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer text-sm font-medium transition-colors
                        ${isSelected ? 'bg-[#1e3a8a] text-white' : 'text-gray-700 hover:bg-gray-200'}
                        ${isToday && !isSelected ? 'text-[#1e3a8a] font-bold' : ''}
                    `}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    const handleSwapLocations = () => {
        const temp = fromLocation;
        setFromLocation(toLocation);
        setToLocation(temp);
    };

    const handleUseCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    if (data && data.display_name) {
                        setFromLocation(data.display_name);
                    } else {
                        alert('Address not found');
                    }
                } catch (error) {
                    console.error('Error fetching address:', error);
                    alert('Failed to fetch address');
                } finally {
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Unable to retrieve your location');
                setIsLocating(false);
            }
        );
    };

    const isDateTimeInFuture = () => {
        if (!selectedDate) return false;

        const now = new Date();
        const selectedDateTime = new Date(selectedDate);

        const isToday = selectedDate.getDate() === now.getDate() &&
            selectedDate.getMonth() === now.getMonth() &&
            selectedDate.getFullYear() === now.getFullYear();

        const currentCheck = new Date(now);
        currentCheck.setSeconds(0);
        currentCheck.setMilliseconds(0);

        selectedDateTime.setHours(selectedTime.hours === 12 ? (selectedTime.period === 'AM' ? 0 : 12) : (selectedTime.period === 'PM' ? selectedTime.hours + 12 : selectedTime.hours));
        selectedDateTime.setMinutes(selectedTime.minutes);
        selectedDateTime.setSeconds(0);
        selectedDateTime.setMilliseconds(0);

        if (isToday) {
            return selectedDateTime >= currentCheck;
        }
        return selectedDateTime > currentCheck;
    };

    const handleCalculatePrice = () => {
        if (!fromLocation.trim() || !toLocation.trim()) {
            alert('Please enter both pickup and drop locations');
            return;
        }

        if (!selectedDate) {
            alert('Please select a pickup date');
            return;
        }

        if (!isDateTimeInFuture()) {
            alert('Please select a future date and time for pickup');
            return;
        }

        const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

        const hours = selectedTime.hours === 12 ? (selectedTime.period === 'AM' ? 0 : 12) : (selectedTime.period === 'PM' ? selectedTime.hours + 12 : selectedTime.hours);
        const timeStr = `${String(hours).padStart(2, '0')}:${String(selectedTime.minutes).padStart(2, '0')}`;

        const params = new URLSearchParams({
            from: fromLocation,
            to: toLocation,
            date: dateStr,
            time: timeStr
        });
        router.push(`/shipping?${params.toString()}`);
    };

    return (
        <div className="relative text-center font-sans">
            <div className="relative h-[340px] sm:h-[400px] bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] flex items-center justify-center">
                <div className="relative z-10 w-full px-4 text-white max-w-5xl mx-auto -mt-10">
                    <h1 className="text-[30px] xl:text-[50px] font-bold leading-tight mb-2">
                        Fast and Reliable Courier Delivery Services in Chennai
                    </h1>
                </div>
            </div>

            <div className="relative -top-[60px] px-4 sm:px-10 z-20">
                <div className="flex justify-center">
                    <div className="bg-white text-[#3c3c3c] w-full max-w-[1200px] rounded-[16px] shadow-xl pb-10 relative">
                        <div className="pt-10 px-6 md:px-8 lg:px-12 xl:px-24">

                            {/* Location Selector */}
                            <div className="flex items-center mb-6 relative">
                                <MapPin size={20} className="font-bold text-black mr-[2px]" />
                                <span className="text-gray-700 text-[16px] font-bold mr-2">Delivery:</span>

                                <div className="relative" ref={cityDropdownRef}>
                                    <div
                                        className="flex items-center justify-between border border-gray-500 rounded-lg px-4 py-1 min-w-[150px] cursor-pointer hover:border-gray-400 transition-colors bg-white"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <span className="text-[#1e3a8a] font-bold text-[16px]">{selectedCity}</span>
                                        <svg
                                            className={`w-4 h-4 text-gray-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>

                                    {isOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-full min-w-[150px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-[250px] overflow-y-auto custom-scrollbar">
                                            {['Chennai', 'Delhi-NCR', 'Pune', 'Noida', 'Gurgaon', 'Faridabad'].map((city) => (
                                                <div
                                                    key={city}
                                                    className={`px-4 py-2 text-left text-[16px] cursor-pointer border-b border-gray-50 last:border-none transition-colors
                                                    ${selectedCity === city ? 'text-black bg-gray-200 font-bold' : 'text-gray-800 hover:text-white hover:bg-[#1e3a8a]'}`}
                                                    onClick={() => {
                                                        setSelectedCity(city);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {city}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Desktop View: Inputs Container */}
                            <div className="hidden md:flex bg-white border text-left border-gray-400 rounded-[16px] relative items-center h-[100px] shadow-sm overflow-hidden">
                                <div className="flex-1 min-w-0 px-4 py-2 flex flex-col justify-center relative">
                                    <label className="text-[14px] font-medium text-gray-700 block mb-1">From</label>
                                    <div className="flex items-center justify-between">
                                        <input
                                            type="text"
                                            value={fromLocation}
                                            onChange={(e) => setFromLocation(e.target.value)}
                                            placeholder="Enter pickup location"
                                            className="w-full truncate pr-16 text-[16px] text-black font-semibold placeholder:text-gray-500 focus:outline-none"
                                        />
                                        <button
                                            className={`absolute top-1/2 -translate-y-1/2 cursor-pointer right-7 text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors ${isLocating ? 'animate-pulse opacity-70 cursor-wait' : ''}`}
                                            title="Use current location"
                                            onClick={handleUseCurrentLocation}
                                            disabled={isLocating}
                                        >
                                            <LocateFixed size={22} strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>

                                {/* Vertical Divider & Swap Icon */}
                                <div className="relative flex items-center justify-center h-full w-[1px] bg-gray-200">
                                    <button
                                        onClick={handleSwapLocations}
                                        className="absolute z-30 bg-white border border-gray-200 rounded-md py-2.5 px-1.5 shadow-sm cursor-pointer font-bold text-[#1e3a8a] transition-colors"
                                    >
                                        <ArrowLeftRight size={20} />
                                    </button>
                                </div>

                                {/* To Input Section */}
                                <div className="flex-1 min-w-0 pl-12 py-2 flex flex-col justify-center">
                                    <label className="text-[14px] font-medium text-gray-700 block mb-1">To</label>
                                    <input
                                        type="text"
                                        value={toLocation}
                                        onChange={(e) => setToLocation(e.target.value)}
                                        placeholder="Enter drop location"
                                        className="w-full truncate text-[16px] text-black font-semibold placeholder:text-gray-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Mobile View: Inputs Container */}
                            <div className="md:hidden bg-white border text-left border-gray-400 rounded-[16px] shadow-sm overflow-visible relative">
                                {/* From Input */}
                                <div className="px-4 pt-4 pb-6 relative">
                                    <label className="text-[12px] text-gray-500 block mb-1">From</label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={fromLocation}
                                            onChange={(e) => setFromLocation(e.target.value)}
                                            placeholder="Enter pickup location"
                                            className="w-full truncate text-[15px] text-black font-bold placeholder:text-gray-400 focus:outline-none pr-8"
                                        />
                                        <button
                                            className={`text-[#1e3a8a] ${isLocating ? 'animate-pulse opacity-70' : ''}`}
                                            onClick={handleUseCurrentLocation}
                                        >
                                            <LocateFixed size={20} strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>

                                {/* Horizontal Divider & Swap Icon */}
                                <div className="relative h-[1px] bg-gray-700 w-full flex items-center justify-center z-10">
                                    <button
                                        onClick={handleSwapLocations}
                                        className="bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm text-[#1e3a8a] z-20"
                                    >
                                        <ArrowUpDown size={18} strokeWidth={2.5} />
                                    </button>
                                </div>

                                {/* To Input */}
                                <div className="p-4 pt-4">
                                    <label className="text-[12px] text-gray-500 block mb-1">To</label>
                                    <input
                                        type="text"
                                        value={toLocation}
                                        onChange={(e) => setToLocation(e.target.value)}
                                        placeholder="Enter drop location"
                                        className="w-full truncate text-[15px] text-black font-bold placeholder:text-gray-400 focus:outline-none"
                                    />
                                </div>

                                {/* Date & Time Section - Mobile */}
                                {fromLocation.length > 0 && toLocation.length > 0 && (
                                    <div className="border-t border-gray-200 flex">
                                        <div className="flex-1 p-3 border-r border-gray-200 relative">
                                            <div
                                                className="flex flex-col"
                                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                            >
                                                <span className="text-[12px] text-gray-500 mb-1">Pickup Date</span>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} className="text-[#1e3a8a]" />
                                                        <span className="text-[14px] font-bold text-gray-800">
                                                            {selectedDate ? `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}` : 'Select Date'}
                                                        </span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400" />
                                                </div>
                                            </div>

                                            {/* Mobile Calendar Popup */}
                                            {isCalendarOpen && (
                                                <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="font-bold text-gray-800 text-sm">
                                                            {currentMethods.months[currentDate.getMonth()]}, {currentDate.getFullYear()}
                                                        </span>
                                                        <div className="flex gap-2">
                                                            <button onClick={(e) => { e.stopPropagation(); changeMonth(-1); }} className="p-1 hover:bg-gray-100 rounded-full"><ChevronUp size={16} className="rotate-[-90deg]" /></button>
                                                            <button onClick={(e) => { e.stopPropagation(); changeMonth(1); }} className="p-1 hover:bg-gray-100 rounded-full"><ChevronDown size={16} className="rotate-[-90deg]" /></button>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-7 mb-2 text-center">
                                                        {currentMethods.weekdays.map(day => <div key={day} className="text-[10px] font-medium text-gray-500 py-1">{day}</div>)}
                                                    </div>
                                                    <div className="grid grid-cols-7 gap-1 text-center">
                                                        {renderCalendarDays()}
                                                    </div>
                                                    <div className="flex justify-between mt-4 pt-2 border-t border-gray-100">
                                                        <button onClick={(e) => { e.stopPropagation(); clearDate(); }} className="text-[#1e3a8a] text-xs font-medium">Clear</button>
                                                        <button onClick={(e) => { e.stopPropagation(); resetToToday(); }} className="text-[#1e3a8a] text-xs font-medium">Today</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Time Picker */}
                                        <div className="flex-1 p-3 relative">
                                            <div
                                                className="flex flex-col"
                                                onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                                            >
                                                <span className="text-[12px] text-gray-500 mb-1">Time</span>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Clock size={16} className="text-[#1e3a8a]" />
                                                        <span className="text-[14px] font-bold text-gray-800">
                                                            {String(selectedTime.hours).padStart(2, '0')}:{String(selectedTime.minutes).padStart(2, '0')}
                                                        </span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400" />
                                                </div>
                                            </div>
                                            {isTimePickerOpen && (
                                                <div className="absolute top-full right-0 mt-1 w-[260px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                                                    <div className="flex h-[180px]">
                                                        <div className="flex-1 overflow-y-auto custom-scrollbar border-r border-gray-100">
                                                            <div className="text-[10px] font-bold text-gray-400 text-center py-1 sticky top-0 bg-white">Hr</div>
                                                            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                                                <div key={hour} onClick={(e) => { e.stopPropagation(); handleTimeChange('hours', hour); }} className={`py-1 text-center text-xs font-medium cursor-pointer ${selectedTime.hours === hour ? 'bg-[#1e3a8a] text-white' : 'text-gray-700'}`}>{String(hour).padStart(2, '0')}</div>
                                                            ))}
                                                        </div>
                                                        <div className="flex-1 overflow-y-auto custom-scrollbar border-r border-gray-100">
                                                            <div className="text-[10px] font-bold text-gray-400 text-center py-1 sticky top-0 bg-white">Min</div>
                                                            {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                                                                <div key={minute} onClick={(e) => { e.stopPropagation(); handleTimeChange('minutes', minute); }} className={`py-1 text-center text-xs font-medium cursor-pointer ${selectedTime.minutes === minute ? 'bg-[#1e3a8a] text-white' : 'text-gray-700'}`}>{String(minute).padStart(2, '0')}</div>
                                                            ))}
                                                        </div>
                                                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                                                            <div className="text-[10px] font-bold text-gray-400 text-center py-1 sticky top-0 bg-white">Am/Pm</div>
                                                            {['AM', 'PM'].map((period) => (
                                                                <div key={period} onClick={(e) => { e.stopPropagation(); handleTimeChange('period', period); }} className={`py-1 text-center text-xs font-medium cursor-pointer ${selectedTime.period === period ? 'bg-[#1e3a8a] text-white' : 'text-gray-700'}`}>{period}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile - Calculate Button */}
                            <div className="md:hidden mt-6">
                                <button
                                    onClick={handleCalculatePrice}
                                    className="w-full bg-[#f59e0b] text-white text-[14px] xl:text-[16px] font-bold px-6 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-md cursor-pointer"
                                >
                                    Calculate Price
                                </button>
                            </div>

                            {/* Schedule Pickup & Calculate Button Section */}
                            <div className="hidden md:flex flex-col md:flex-row items-center justify-end mt-6 gap-4 md:gap-6 relative">
                                {fromLocation.length > 0 && toLocation.length > 0 && (
                                    <div className="hidden md:flex items-center gap-4">
                                        <span className="text-gray-800 font-bold text-[18px]">Schedule Pickup for :</span>

                                        {/* Date Picker */}
                                        <div className="relative" ref={calendarRef}>
                                            <div
                                                className="flex items-center gap-0 border border-gray-400 rounded-lg px-4 py-2 bg-white min-w-[220px] cursor-pointer hover:border-gray-400 transition-colors"
                                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                            >
                                                <Calendar size={20} className="text-[#1e3a8a]" />
                                                <span className="text-gray-700 text-[15px] font-bold flex-1 text-center">
                                                    {selectedDate ? `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}` : 'Select Date'}
                                                </span>
                                                <ChevronDown size={18} className="text-gray-700" />
                                            </div>

                                            {/* Calendar Popup */}
                                            {isCalendarOpen && (
                                                <div className="absolute bottom-full left-0 mb-2 w-[280px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="font-bold text-gray-800 text-lg">
                                                            {currentMethods.months[currentDate.getMonth()]}, {currentDate.getFullYear()}
                                                        </span>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => changeMonth(-1)}
                                                                className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
                                                            >
                                                                <ChevronUp size={20} className="rotate-[-90deg]" />
                                                                <span className="sr-only">Previous Month</span>
                                                            </button>
                                                            <button
                                                                onClick={() => changeMonth(1)}
                                                                className="p-1 hover:bg-gray-100 rounded-full text-gray-600"
                                                            >
                                                                <ChevronDown size={20} className="rotate-[-90deg]" />
                                                                <span className="sr-only">Next Month</span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-7 mb-2 text-center">
                                                        {currentMethods.weekdays.map(day => (
                                                            <div key={day} className="text-xs font-medium text-gray-500 py-1">
                                                                {day}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="grid grid-cols-7 gap-1 text-center">
                                                        {renderCalendarDays()}
                                                    </div>

                                                    <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
                                                        <button
                                                            onClick={clearDate}
                                                            className="text-[#1e3a8a] text-sm font-medium hover:underline"
                                                        >
                                                            Clear
                                                        </button>
                                                        <button
                                                            onClick={resetToToday}
                                                            className="text-[#1e3a8a] text-sm font-medium hover:underline"
                                                        >
                                                            Today
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Time Picker */}
                                        <div className="relative" ref={timePickerRef}>
                                            <div
                                                className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 bg-white min-w-[220px] cursor-pointer hover:border-gray-400 transition-colors"
                                                onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                                            >
                                                <Clock size={20} className="text-[#1e3a8a]" />
                                                <span className="text-gray-700 text-[15px] font-bold flex-1 text-center">
                                                    {String(selectedTime.hours).padStart(2, '0')}:{String(selectedTime.minutes).padStart(2, '0')} {selectedTime.period}
                                                </span>
                                                <ChevronDown size={16} className="text-gray-500" />
                                            </div>

                                            {isTimePickerOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-[280px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                                                    <div className="flex h-[200px]">
                                                        <div className="flex-1 overflow-y-auto custom-scrollbar border-r border-gray-100">
                                                            <div className="text-xs font-bold text-gray-400 text-center py-2 sticky top-0 bg-white">Hr</div>
                                                            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                                                <div
                                                                    key={hour}
                                                                    onClick={() => {
                                                                        handleTimeChange('hours', hour);
                                                                    }}
                                                                    className={`py-2 text-center text-sm font-medium cursor-pointer hover:bg-gray-200
                                                                        ${selectedTime.hours === hour ? 'bg-[#1e3a8a] text-white hover:text-black' : 'bg-white text-gray-700'}
                                                                    `}
                                                                >
                                                                    {String(hour).padStart(2, '0')}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="flex-1 overflow-y-auto custom-scrollbar border-r border-gray-100">
                                                            <div className="text-xs font-bold text-gray-400 text-center py-2 sticky top-0 bg-white">Min</div>
                                                            {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                                                                <div
                                                                    key={minute}
                                                                    onClick={() => {
                                                                        handleTimeChange('minutes', minute);
                                                                    }}
                                                                    className={`py-2 text-center text-sm font-medium cursor-pointer hover:bg-gray-200
                                                                        ${selectedTime.minutes === minute ? 'bg-[#1e3a8a] text-white hover:text-black' : 'text-gray-700'}
                                                                    `}
                                                                >
                                                                    {String(minute).padStart(2, '0')}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                                                            <div className="text-xs font-bold text-gray-400 text-center py-2 sticky top-0 bg-white">Am/Pm</div>
                                                            {['AM', 'PM'].map((period) => (
                                                                <div
                                                                    key={period}
                                                                    onClick={() => {
                                                                        handleTimeChange('period', period);
                                                                    }}
                                                                    className={`py-2 text-center text-sm font-medium cursor-pointer hover:bg-gray-200
                                                                        ${selectedTime.period === period ? 'bg-[#1e3a8a] text-white hover:text-black' : 'text-gray-700'}
                                                                    `}
                                                                >
                                                                    {period}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={handleCalculatePrice}
                                    className="w-full md:w-auto bg-[#f59e0b] text-white text-[14px] xl:text-[16px] font-bold px-6 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors shadow-md cursor-pointer"
                                >
                                    Calculate Price
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
