import MainLayout from '@/Layouts/MainLayout'
import {HiOutlinePencilAlt} from "react-icons/hi";
import {FaRegTrashCan} from "react-icons/fa6";
import {Link, usePage} from '@inertiajs/react';
import { IoMdClose } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";

import React, { useEffect, useState } from 'react'

const Main = ({side}) => {
    const {flash} = usePage().props
    const [message, setMessage] = useState(flash.message);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        // Update countdown every second
        const countdownTimer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        // Cleanup timers to avoid memory leaks
        return () => {
            clearTimeout(timer);
            clearInterval(countdownTimer);
        };
    }, []);

    return (
        <MainLayout>
            {message && (
            <div className='bg-green-500 relative text-white flex items-center justify-between pt-[15px] pb-[20px] px-[15px] rounded-sm capitalize font-bold'>
                <div className='flex items-center gap-[10px]'>
                    <div className='text-[20px]'>
                        <MdOutlineDone/>
                    </div>
                <p>
                   {message}
                </p>
                </div>
                <button className='text-[20px]'>
                    <IoMdClose/>
                </button>
                <div className='absolute bottom-0 h-[5px] left-0 bg-white' style={{ width: `${(countdown / 5) * 100}%`, transition: 'width 1s linear' }}/>
            </div>
            )}

            <div className='w-full h-full mt-[10px] flex flex-col gap-[10px]'>
                <div
                    className='bg-white w-full sticky sm:top-[96.5px] border border-gray-200 flex items-center justify-between h-auto p-[15px] rounded-sm'>
                    <p className='capitalize font-bold'>product</p>
                    <Link
                        href="/product/create"
                        className='bg-red-500 text-white capitalize font-bold rounded-sm p-[10px]'>
                        add product
                    </Link>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div
                        className={`bg-transparent grid  gap-[10px] ${side
                            ? 'vlg:grid-cols-3 max-vlg:grid-cols-2 max-md:grid-cols-2 max-lsm:grid-cols-1 '
                            : 'vlg:grid-cols-3 max-vlg:grid-cols-2 max-md:grid-cols-2 max-lsm:grid-cols-1'}`}>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <HiOutlinePencilAlt/>
                                    </button>
                                    <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                        <FaRegTrashCan/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex gap-[15px] items-center'>
                                <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                <div className='w-full h-auto flex gap-[10px]'>
                                    <button
                                        className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Main
