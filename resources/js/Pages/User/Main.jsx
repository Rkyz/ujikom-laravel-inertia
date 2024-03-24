import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react'

const Main = () => {
    return (
        <MainLayout >
            <Head title="Dashboard"/>
            <div className='w-full h-full flex flex-col gap-[10px]'>
                <div className='w-full sticky sm:top-[96.5px]  h-auto flex items-center justify-between bg-white p-[15px] rounded-sm shadow-md'>
                    <p className='capitalize font-semibold'>user management</p>
                </div>
                <div className='w-full h-auto bg-transparent grid  gap-[10px] grid-cols-4 max-vlg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='flex flex-col gap-[15px] bg-white p-[15px] rounded-md shadow-md'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[50px] h-[50px] bg-black rounded-md'/>
                        </div>
                        <div className='flex flex-col gap-[0px]'>
                            <p className='font-bold capitalize'>rio alamsyah</p>
                            <p className='font-medium text-gray-400 capitalize text-[13px]'>admin</p>
                        </div>
                        <div className='grid grid-cols-2 gap-[10px]'>
                            <button className='border-red-500 border p-[px8] rounded-md font-bold text-red-500 capitalize'>
                                edit
                            </button>
                            <button className='bg-red-500 rounded-md text-white font-bold p-[8px] capitalize'>
                                delete
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </MainLayout>
    );
}

export default Main
