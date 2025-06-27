'use client';
import { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function EnquiryForm() {
    const [view, setView] = useState(false);
    const [form, setForm] = useState({
        studentName: '',
        parentName: '',
        email: '',
        number: '',
        address: '',
        board: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', form);
    };

    return (
        <motion.div
            initial={{ right: '-400px' }}
            animate={{ right: view ? '0px' : '-400px' }}
            transition={{ duration: 0.5 }}
            className="hidden z-50 rounded-tl-xl rounded-bl-xl md:flex overflow-visible justify-center items-center flex-col top-1/2 -translate-y-1/2 h-fit w-full sm:w-[400px] bg-white shadow-lg p-10"
            style={{ position: 'fixed' }}
        >
            <div
                onClick={() => setView(!view)}
                className="absolute text-white rounded-tr-2xl rounded-tl-2xl px-4 cursor-pointer py-3 rotate-270 top-1/2 -left-6 -translate-x-1/2 -translate-y-1/2 bg-amber-600"
            >
                Enquiry Form
            </div>
            <button
                onClick={() => setView(false)}
                className="absolute top-3 right-3 cursor-pointer text-xl font-bold"
                aria-label="Close"
            >
                ×
            </button>
            <h2 className="text-2xl font-semibold mb-6">Admission Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    name="studentName"
                    placeholder="Enter Student's Name"
                    className="w-full border outline-none border-gray-300 rounded px-2 py-1 placeholder:text-[14px]"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="parentName"
                    placeholder="Enter Parent's Name"
                    className="w-full border border-gray-300 outline-none rounded px-2 py-1 placeholder:text-[14px]"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="w-full border outline-none border-gray-300 rounded px-2 py-1 placeholder:text-[14px]"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="number"
                    placeholder="Number"
                    className="w-full border outline-none border-gray-300 rounded px-2 py-1 placeholder:text-[14px]"
                    value={form.number}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="address"
                    placeholder="Address"
                    className="w-full border border-gray-300 outline-none rounded px-2 py-1 placeholder:text-[14px]"
                    value={form.address}
                    onChange={handleChange}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-2 rounded cursor-pointer hover:bg-green-500 transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </motion.div>
    );
}
