import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <MainLayout
        >
             <Head title="Dashboard" />
                <div className='w-full h-full flex flex-col gap-[10px]'>
                    <div className='p-[25px] sticky top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
                        <h1 className='capitalize'>Welcome Back {auth.user.name}!!</h1>
                    </div>
                   
                </div>
        </MainLayout>
    );
}
