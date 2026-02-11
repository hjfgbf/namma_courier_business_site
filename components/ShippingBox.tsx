'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ShippingBox() {
    const searchParams = useSearchParams();

    const [selectedVehicle, setSelectedVehicle] = useState('2wheeler');
    const [senderName, setSenderName] = useState('');
    const [senderPhone, setSenderPhone] = useState('');
    const [senderHouse, setSenderHouse] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [receiverPhone, setReceiverPhone] = useState('');
    const [receiverHouse, setReceiverHouse] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [quantity, setQuantity] = useState('');
    const [remarks, setRemarks] = useState('');

    // Calendar and Time Picker states
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState({
        hours: 12,
        minutes: 0,
        period: 'PM' as 'AM' | 'PM'
    });

    const calendarRef = useRef<HTMLDivElement>(null);
    const timePickerRef = useRef<HTMLDivElement>(null);

    // Click outside handlers
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
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

    // Pre-fill from URL parameters
    useEffect(() => {
        const fromAddress = searchParams.get('from');
        const toAddress = searchParams.get('to');
        const dateStr = searchParams.get('date');
        const timeStr = searchParams.get('time');

        if (fromAddress) {
            setPickupAddress(fromAddress);
        }
        if (toAddress) {
            setDeliveryAddress(toAddress);
        }
        if (dateStr) {
            // Parse YYYY-MM-DD format
            const [year, month, day] = dateStr.split('-').map(Number);
            const date = new Date(year, month - 1, day);
            setSelectedDate(date);
            setCurrentDate(date);
        }
        if (timeStr) {
            // Parse HH:MM format (24-hour)
            const [hours, minutes] = timeStr.split(':').map(Number);
            const period = hours >= 12 ? 'PM' : 'AM';
            const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
            setSelectedTime({
                hours: hours12,
                minutes,
                period
            });
        }
    }, [searchParams]);

    // Calendar helper functions
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

    const vehicles = [
        {
            id: '2wheeler',
            name: '2 Wheeler',
            capacity: 'Upto 20 kg',
            image: 'https://img.moglimg.com/mexpress-app/2_wheeler_active.png'
        },
        {
            id: '4wheeler',
            name: '4 Wheeler',
            capacity: 'Upto 750 kg',
            image: 'https://img.moglimg.com/mexpress-app/4_wheeler_active.png'
        },
        {
            id: '3wheeler',
            name: '3 Wheeler',
            capacity: 'Upto 500 kg',
            image: 'https://img.moglimg.com/mexpress-app/3_wheeler_active.png'
        }
    ];

    return (
        <div className="relative text-center font-sans">
            <div className="relative h-[340px] sm:h-[400px] bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#2563eb] flex items-center justify-center">
                <div className="relative z-10 w-full px-4 text-white max-w-5xl mx-auto -mt-10">
                    <h1 className="text-[30px] xl:text-[50px] font-bold leading-tight mb-2">
                        Fast and Reliable Courier Delivery Services in Chennai
                    </h1>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative -top-[60px] px-4 sm:px-10 z-20">
                <div className="flex justify-center">
                    <div className="bg-white text-[#3c3c3c] w-full max-w-[1200px] rounded-[16px] shadow-xl pb-10 relative">
                        {/* Content */}
                        <div className="pt-8 md:pt-10 px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Left Section - Forms */}
                                <div className="lg:col-span-2 space-y-6">

                                    <div className="flex items-center mb-6 relative">
                                        <MapPin size={20} className="font-bold text-black mr-[2px]" />
                                        <span className="text-gray-700 text-[16px] font-bold mr-2">Delivery:</span>

                                        <div className="relative">
                                            <div
                                                className="flex items-center bg-white"
                                            >
                                                <span className="text-[#1e3a8a] font-bold text-[16px]">Chennai</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* From Section */}
                                    <div className="bg-[#f3f4f6] rounded-xl p-4 md:p-6 space-y-5">
                                        <h3 className="text-sm font-semibold text-gray-800 text-left">From</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Sender Name</label>
                                                <input
                                                    type="text"
                                                    value={senderName}
                                                    onChange={(e) => setSenderName(e.target.value)}
                                                    className="w-full h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#1e3a8a]"
                                                    placeholder="Enter Name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Phone No</label>
                                                <input
                                                    type="tel"
                                                    value={senderPhone}
                                                    onChange={(e) => setSenderPhone(e.target.value)}
                                                    className="w-full h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#1e3a8a]"
                                                    placeholder="+91 - 0000000000"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                                                House No./Flat No./Apartment name
                                            </label>
                                            <input
                                                type="text"
                                                value={senderHouse}
                                                onChange={(e) => setSenderHouse(e.target.value)}
                                                className="w-full h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3a8a]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Pickup Address</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={pickupAddress}
                                                    onChange={(e) => setPickupAddress(e.target.value)}
                                                    className="flex-1 h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3a8a]"
                                                />
                                                <button className="h-10 md:h-[42px] px-3 text-sm bg-[#1e3a8a] text-white rounded-md cursor-pointer transition-colors">
                                                    Edit
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            {/* Pickup Date */}
                                            <div className="relative" ref={calendarRef}>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Pickup Date</label>
                                                <div
                                                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                                                    className="w-full h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3a8a] flex items-center justify-between cursor-pointer bg-white"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} className="text-[#1e3a8a]" />
                                                        <span className="text-gray-700">
                                                            {selectedDate ? `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}` : 'Select Date'}
                                                        </span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400" />
                                                </div>

                                                {/* Calendar Popup */}
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

                                            {/* Pickup Time */}
                                            <div className="relative" ref={timePickerRef}>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Time</label>
                                                <div
                                                    onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                                                    className="w-full h-10 md:h-[42px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3a8a] flex items-center justify-between cursor-pointer bg-white"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Clock size={16} className="text-[#1e3a8a]" />
                                                        <span className="text-gray-700">
                                                            {String(selectedTime.hours).padStart(2, '0')}:{String(selectedTime.minutes).padStart(2, '0')} {selectedTime.period}
                                                        </span>
                                                    </div>
                                                    <ChevronDown size={16} className="text-gray-400" />
                                                </div>

                                                {/* Time Picker Popup */}
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
                                    </div>

                                    {/* To Section */}
                                    <div className="bg-[#f2f4f7] rounded-xl p-4 md:p-6 space-y-5">
                                        <h3 className="text-sm font-semibold text-gray-800 text-left">To</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Receiver Name</label>
                                                <input
                                                    type="text"
                                                    value={receiverName}
                                                    onChange={(e) => setReceiverName(e.target.value)}
                                                    className="w-full h-10 md:h-[44px] px-3 border border-gray-300 rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#1e3a8a]"
                                                    placeholder="Enter Name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Phone No</label>
                                                <input
                                                    type="tel"
                                                    value={receiverPhone}
                                                    onChange={(e) => setReceiverPhone(e.target.value)}
                                                    className="w-full h-10 md:h-[44px] px-3 border border-gray-300 rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#1e3a8a]"
                                                    placeholder="+91 - 0000000000"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">
                                                House No./Flat No./Apartment name
                                            </label>
                                            <input
                                                type="text"
                                                value={receiverHouse}
                                                onChange={(e) => setReceiverHouse(e.target.value)}
                                                className="w-full h-10 md:h-[44px] px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#1e3a8a]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Delivery Address</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={deliveryAddress}
                                                    onChange={(e) => setDeliveryAddress(e.target.value)}
                                                    className="flex-1 h-10 md:h-[44px] px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#1e3a8a]"
                                                />
                                                <button className="h-10 md:h-[44px] px-3 text-sm bg-[#1e3a8a] text-white rounded-md cursor-pointer transition-colors">
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="bg-[#f2f4f7] rounded-xl p-4 md:p-6 space-y-4">
                                        <h3 className="text-sm font-semibold text-gray-800 text-left">Additional Information</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Quantity (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={quantity}
                                                    placeholder="Enter Quantity"
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    className="w-full h-10 md:h-[44px] px-3 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#1e3a8a]"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-1 text-left">Remarks (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={remarks}
                                                    placeholder="Enter Remarks"
                                                    onChange={(e) => setRemarks(e.target.value)}
                                                    className="w-full h-10 md:h-[44px] px-3 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#1e3a8a]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section - Booking Summary */}
                                <aside className="space-y-4 order-last lg:order-none">
                                    <div className="border border-gray-400 rounded-lg py-4">
                                        <h3 className="font-semibold mb-3 text-left px-4">Amount Summary</h3>
                                        <hr className="my-3 border-gray-400" />

                                        <div className="grid grid-cols-2 gap-y-3 text-[16px] text-gray-800 px-4">
                                            <span className="text-left">Pickup Date</span>
                                            <span className="text-right">
                                                {selectedDate ? `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}` : '-'}
                                            </span>
                                            <span className="text-left">Pickup Time</span>
                                            <span className="text-right">
                                                {String(selectedTime.hours).padStart(2, '0')}:{String(selectedTime.minutes).padStart(2, '0')} {selectedTime.period}
                                            </span>
                                            <span className="text-left">Total Distance</span>
                                            <span className="text-right">7 kms</span>
                                            <span className="text-left">Base Fare</span>
                                            <span className="text-right">₹100</span>
                                        </div>

                                        <hr className="my-3 border-gray-400" />

                                        <div className="flex justify-between font-bold px-4">
                                            <span>Fare</span>
                                            <span>₹ 100</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#f59e0b] text-white py-3 rounded-lg cursor-pointer font-semibold hover:bg-[#1e3a8a] transition-colors">
                                        Confirm Booking
                                    </button>

                                    {/*
                                    <p className="text-sm md:text-sm text-center text-gray-500">
                                        Available Coupons<br />
                                        <span className="text-[#1e3a8a]">Please login to see available coupons.</span>
                                    </p>
                                    */}
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
