"use client";
import Image from "next/image";
import { useState } from "react";
import Google from '@/Assets/Home/Google-Icon.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { Luckiest_Guy } from "next/font/google";

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
})
export default function Form() {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        enquiry: "Enquiry",
        program: "",
        message: "",
    });

    return (
        <section className="p-4 mt-6 container md:py-8 2xl:px-16 mx-auto mb-10 md:mb-24 ">
            <h1 className={` ${lucky.className} text-center mb-6 align-middle text-3xl md:text-4xl text-amber-600  `}>Apna Chhota School</h1>
            <div className="grid md:grid-cols-12 gap-6  ">
                {/* Left Side */}
                <div className="space-y-4 flex justify-between flex-col col-span-6 md:col-span-5 shadow-lg bg-white rounded-xl p-6 ">
                    <div className=" flex flex-col gap-4">
                        <h2 className="text-xl font-bold text-gray-800 ">
                            Apna Chhota School - Kirti Nagar
                        </h2>
                        <p className="text-gray-600">
                            Apna Chhota School in Kirti Nagar, New Delhi, Delhi
                        </p>
                        <p className="text-gray-600  ">
                            Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015
                        </p>
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <span>🟢 Open Now</span> <span className="text-gray-600">Closes at 2:00 PM</span>
                        </div>
                        <div className="text-gray-700">📞 +91-9910741417</div>

                        <div className="flex items-center gap-2">
                            <span className="">
                                <Image src={Google} width={500} height={500} alt="Google" className=" size-5" />
                            </span>
                            <span className=" text-gray-800 flex flex-col ">
                                <b className=" text-[12px]"> ⭐⭐⭐⭐⭐</b>
                                35 Reviews (4.8+) </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center w-full gap-4 items-center">
                            <button className="border border-gray-400 text-nowrap px-3 py-2 w-full rounded-md hover:bg-gray-100">
                                Write Reviews
                            </button>
                            <button className="border border-gray-400 text-nowrap px-3 py-2 w-full rounded-md hover:bg-gray-100">
                                Drive Direction
                            </button>
                        </div>
                        <button className="bg-amber-600
  text-white w-full py-2 rounded-md transition-colors duration-500 delay-200 cursor-pointer 
  hover:from-green-500 hover:via-green-400 hover:to-green-600">
                            Call
                        </button>
                    </div>

                </div>
                {/* Right Side */}
                <div className="space-y-4 col-span-6 md:col-span-7  shadow-lg bg-white rounded-xl p-6">
                    <h2 className="text-lg font-bold">Request A Call Back</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="border px-3 py-2 outline-none rounded-md w-full border-gray-400"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            type="tel"
                            placeholder="Mobile"
                            className="border border-gray-400 border-gray-400-gray-400 px-3 py-2 rounded-md outline-none w-full"
                            value={form.mobile}
                            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email (Optional)"
                            className="border border-gray-400 px-3 py-2 rounded-md w-full outline-none"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <select
                            className="border border-gray-400 px-3 py-2 rounded-md w-full appearance-none outline-none "
                            value={form.enquiry}
                            onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                        >
                            <option value="Enquiry">Enquiry</option>
                            <option value="Admission">Admission</option>
                        </select>
                    </div>
                    <select
                        className="border border-gray-400 px-3 py-2 rounded-md w-full appearance-none outline-none"
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                    >
                        <option>-- Select Program --</option>
                        <option>Play Group</option>
                        <option>Nursery</option>
                        <option>KG</option>
                    </select>

                    <textarea
                        placeholder="Tell Us More"
                        className="border border-gray-400 px-3 py-2 rounded-md w-full outline-none"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    ></textarea>

                    <div className="space-y-2">
                        <label className="flex items-start gap-2 text-sm">
                            <input type="checkbox" className="mt-1" />
                            Accept terms & conditions, receive calls, notifications on WhatsApp
                        </label>
                        <label className="flex items-start gap-2 text-sm">
                            <input type="checkbox" className="mt-1" />
                            I hereby accept to send me newsletters for marketing and promotional content
                        </label>
                    </div>

                    <button className="bg-amber-600 
  text-white w-full py-2 rounded-md transition-colors duration-500 delay-200 cursor-pointer 
  hover:from-green-500 hover:via-green-400 hover:to-green-600">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
