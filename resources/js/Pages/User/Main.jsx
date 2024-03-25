import NoData from '@/Components/NoData';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { GrClose, GrFormPrevious } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Main = ({users}) => {
    const { props } = usePage();
    const currentUser = props.auth && props.auth.user; 

    const { data, setData } = useForm({
        name: '',
        role: '',
    });

    const getFirstCharacter = (str) => {
        return str.charAt(0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            if (!editedUser || value !== editedUser.name) {
                setData(values => ({
                    ...values,
                    [name]: value,
                    role: editedUser ? editedUser.role : ''
                }));
            } else {
                setData(values => ({
                    ...values,
                    [name]: value
                }));
            }
        } else if (name === 'role') {
            if (!editedUser || value !== editedUser.role) {
                setData(values => ({
                    ...values,
                    [name]: value,
                    name: editedUser ? editedUser.name : ''
                }));
            } else {
                setData(values => ({
                    ...values,
                    [name]: value
                }));
            }
        } else {
            setData(values => ({
                ...values,
                [name]: value
            }));
        }
    }
    
    
    const handleEdit = (e) => {
        e.preventDefault();
        try {
            router.put(`/user/${editedUser.id}`, data);
            setIsEditActive(false); 
        } catch (error) {
            console.error('Failed to edit user:', error);
            // Anda dapat menangani kesalahan di sini, misalnya dengan menampilkan pesan kesalahan kepada pengguna
        }
    }
    
    
    const getUserColor = (userId) => {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B5FF', '#33FFE8'];
        return colors[userId % colors.length]; 
    };

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Yakin Nih Mau Hapus?',
          text: "Jan Nyesel Yah!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ya, hapus saja!'
        }).then((result) => {
          if (result.isConfirmed) {
            router.delete(`/user/${id}`);
          }
        });
      };

      const filteredUsers = users.filter(user => {
        return !(props.auth && user.id === props.auth.user.id); 
    });

    const [isEditActive, setIsEditActive] = useState(false); 
    const [editedUser, setEditedUser] = useState(null); 

    const handleEditClick = (user) => {
        setIsEditActive(true); 
        setEditedUser(user); 
    };

    const handleCancelEdit = () => {
        setIsEditActive(false);
        setEditedUser(null);
    };



    console.log(currentUser, 'user current');
    console.log(users);
    return (
        <MainLayout >
            <Head title="Dashboard"/>
            <div className='w-full h-full flex flex-col gap-[10px] pt-[10px]'>
                <div className='flex items-center gap-[10px]'>
                    <div
                        className=' h-full p-[15px] flex bg-red-500 text-white items-center rounded-sm'>
                        <GrFormPrevious className='text-[20px] '/>
                    </div>
                    <div
                        className='bg-white w-full sticky sm:top-[96.5px] border border-gray-200 flex items-center justify-between h-auto p-[15px] rounded-sm'>
                        <p className='capitalize font-bold'>user management</p>
                        <Link href='/user/create' className='text-red-500 sm:hidden'>
                            <AiOutlinePlus/>
                        </Link>
                    </div>
                </div>
                <div className={`w-full bg-transparent grid  gap-[10px] grid-cols-4 max-vlg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ${filteredUsers.length > 0 ? 'h-auto':'h-full'}`}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => {
                        const userInitial = getFirstCharacter(user.name);
                        const userColor = getUserColor(user.id);
                        const createdAtDate = new Date(user.created_at);
                        console.log(user.role)
                        const dateString = createdAtDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
                        const timeString = createdAtDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                        return (
                            <div key={index} className={`card flex flex-col gap-[15px] bg-white p-[15px] rounded-md shadow-md ${isEditActive && editedUser && editedUser.id === user.id ? 'flip' : ''}`}>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-[50px] h-[50px] bg-black rounded-md flex items-center justify-center' style={{ backgroundColor: userColor }}>
                                        <span className="text-white font-bold text-[20px] capitalize">{userInitial}</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col gap-[0px]'>
                                        <p className='font-bold capitalize'>{user.name}</p>
                                        <p className='font-medium text-gray-400 capitalize text-[13px]'>{user.role}</p>
                                    </div>
                                    <div className='flex flex-col gap-[0px] items-end'>
                                        <p className='font-bold capitalize text-[14px]'>{dateString}</p>
                                        <p className='font-medium text-gray-400 capitalize text-[12px]'>'{timeString}</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-[10px]'>
                                    <button onClick={() => handleEditClick(user)} className='border-red-500 border p-[px8] rounded-md font-bold text-red-500 capitalize'>
                                        edit
                                    </button>
                                    <button onClick={() => handleDelete(user.id)} className='bg-red-500 rounded-md text-white font-bold p-[8px] capitalize'>
                                        delete
                                    </button>
                                </div>
                                {isEditActive && editedUser && editedUser.id === user.id && (
                                    <div className={`absolute card top-0 left-0 w-full flip-reverse h-full bg-white flex items-center justify-center ${isEditActive && editedUser && editedUser.id === user.id ? 'flip-reverse' : ''}`}>
                                        <div className=' p-[10px] gap-[10px] flex flex-col rounded-md w-full h-full bg-transparent relative'>
                                            <div className='flex items-center justify-between'>
                                                <p className='capitalize font-bold'>edit</p>
                                                <button onClick={handleCancelEdit}>
                                                    <IoClose className='text-[16px]'/>
                                                </button>
                                            </div>
                                                <form onSubmit={handleEdit} className='w-full flex-col flex gap-[10px]'>
                                                <TextInput
                                                    type="text"
                                                    name="name"
                                                    defaultValue={editedUser.name}
                                                    className='w-full border-red-500 capitalize'
                                                    onChange={handleChange}
                                                    />
                                                    <select defaultValue={editedUser.role}  name="role" className='w-full border-red-500 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' onChange={handleChange}>
                                                            <option value="">Select Option</option>
                                                            <option value="admin">Admin</option>
                                                            <option value="petugas">Petugas</option>
                                                        </select>
                                                    <button className='w-full bg-red-500 text-white p-[5px] capitalize rounded-md font-bold text-[14px]'>edit</button>
                                                </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <NoData/>
                )}
                </div>
            </div>
        </MainLayout>
    );
}

export default Main
