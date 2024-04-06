import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GoHistory, GoPencil } from "react-icons/go";
import { useState } from 'react';
import burger from '../../../img/burger.png'
import { IoClose, IoFastFood } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import TextInput from '@/Components/TextInput';
import NoData from '@/Components/NoData';
import { BsTrash } from 'react-icons/bs';
import InputLabel from '@/Components/InputLabel';
import Swal from 'sweetalert2';

export default function Dashboard({ auth, categorys }) {
    const [addCategory , setAddCategory] = useState(false);
    const {data, setData} = useForm({category: ''});
    const [edit, setEdit] = useState(false);
    const [dataCategory, setDataCategory] = useState(null)
    

    console.log(categorys,'asu kalian')



    const handleOpenEdit = (item) => {
        setEdit(true);
        setDataCategory(item);
        setData({category: item.category}); 
    }

    const handleCloseEdit = () => {
        setEdit(false)
        setDataCategory(null)
    }

    console.log(dataCategory)


    
    const handleAddCategory = () => {
        setAddCategory(!addCategory)
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setData(values => ({
            ...values,
            [name]: value
        }));
    }

    console.log(edit)


    const categoryCreate = (e) => {
        e.preventDefault();
        router.post("/menus/category", data)
    };

    const handleEdit = (e) => {
        e.preventDefault();
        try {
            router.put(`/menus/${dataCategory.id}`, data);
           setEdit(false)
        } catch (error) {
            console.error('Failed to edit user:', error);
        }
    }

    const handleDelete = (item) => {
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
            router.delete(`/menus/${item.id}`);
            Swal.fire({
                title: 'Success',
                text: "oke status",
                icon: 'success',
            })
          }
        });
      };

      const handleNotification = (e, count) => {
        if (count === 0) {
            e.preventDefault();
            alert('There are no products available in this category.');
        }
    };
    

    return (
        // // <AuthenticatedLayout
        // //     user={auth.user}
        // //     header={<h2 className="font-semibold text-xl text-gray-800 idk:text-gray-200 leading-tight">Dashboard</h2>}
        // // >
        //     <Side>
        // <div className='h-screen w-full'>
        
        //     </Side>
        // </div>
        // // </AuthenticatedLayout>

        <MainLayout
        auth={auth}
    >
             <Head title="Menus - Food" />
                <div className='w-full h-full flex flex-col gap-[10px]'>
                    <div className='p-[25px] z-[46] sticky sm:top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
                        <div className='flex gap-[20px] items-center'>
                            <button className='border-[2px] flex items-center justify-center text-gray-500 w-[50px] rounded-full h-[50px] border-[#EEEEF1]'>
                                <GrPrevious/>
                            </button>
                            <div className='flex flex-col'>
                                <h1 className='capitalize font-bold text-[30px] max-sm:text-[25px]'>Food</h1>
                                <p className='text-[14px] max-sm:text-[14px] capitalize text-[#D86D77] font-bold'>discover to select a food category</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[10px] text-gray-500'>
                            <button className='capitalize font-bold max-sm:text-[14px]'>
                                menus
                            </button>
                        </div>
                    </div>
                    <div className='w-full z-[45] h-auto flex gap-[15px]'>
                    <div className='w-full bg-white p-[20px] flex flex-col gap-[15px]'>
                        <div className='flex relative items-center justify-between'>
                        <div className='flex items-center gap-[10px]'>
                            <IoFastFood className='text-[20px]'/>
                        <p className='text-gray-500 font-bold capitalize text-[18px]'>food & drink</p>
                        </div>
                            <div className='flex items-center gap-[10px]'>
                              {auth.user.role === 'admin' && (
                                <button onClick={handleAddCategory} className='bg-red-500 text-white p-[10px] text-[20px] rounded-sm capitalize font-bold'>
                                    <AiOutlinePlus/>
                                </button>
                             )}
                            <Link href='/history' className='bg-red-500 flex items-center gap-[5px] text-white p-[10px] rounded-sm capitalize font-bold'>
                                <GoHistory className='text-[20px]'/>
                                <p className='text-[13px]'>order history</p>
                            </Link>

                            </div>
                        {addCategory && (
                            <div className='bg-white flex flex-col gap-[10px] top-[50px] before:bg-white border-red-500 border before:border-l before:border-t before:border-red-500 before:w-[10px] before:h-[10px] before:absolute before:right-[13px] before:-top-[6px] before:rotate-45 capitalize absolute sm:right-[138px] p-[10px] rounded-sm max-sm:w-full sm:w-auto max-w-full'>
                                <p className='font-medium text-[14px]'>add category</p>
                                <form onSubmit={categoryCreate} className='flex flex-col gap-[10px]'>
                                    <TextInput onChange={handleChange} name="category" type="text" className="border-red-500 placeholder:capitalize placeholder:text-[14px]" placeholder="input your category..." />
                                    <button className='text-white bg-red-500 p-[5px] rounded-sm capitalize font-bold'>
                                        add
                                    </button>
                                </form>
                            </div>
                        )}
                        </div>
                        <div className='w-full h-full flex flex-col gap-[10px]'>
                            {categorys.length > 0 ? (
                                categorys.map((item, index) => {
                                    return (
                                    <div key={index} className='w-full flex flex-col  bg-[#EEEEF1] gap-[10px] rounded-sm'>
                                        <div className='w-full flex items-center justify-between'>
                                            <Link href={item.products_count > 0 ? `/menus/${item.category}` : '#'} onClick={(e) => handleNotification(e, item.products_count)} className='flex items-center bg-transparent w-full gap-[10px] p-[10px]'>
                                                <img src={burger} alt="" className='w-[60px]'/>
                                                <p className='font-bold capitalize'>{item.category}</p>
                                            </Link>
                                            <div className='flex flex-row-reverse p-[10px] items-center gap-[20px]'>
                                            {auth.user.role === 'admin' && (
                                                <div className='flex items-center pr-[10px] gap-[15px]'>
                                                    {edit === true && dataCategory.id === item.id ? (
                                                        <button onClick={handleCloseEdit} className='border-red-500 border-[2px] text-[20px] p-[10px] rounded-md text-red-500 hover:bg-red-500 hover:text-white'>
                                                            <IoClose/> {/* Gunakan IoClose di sini */}
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => handleOpenEdit(item)} className='border-red-500 border-[2px] text-[20px] p-[10px] rounded-md text-red-500 hover:bg-red-500 hover:text-white'>
                                                            <GoPencil/>
                                                        </button>
                                                    )}
                                                    <button onClick={()=> handleDelete(item)} className='border-transparent border-[2px] text-[20px] p-[10px] rounded-md text-white bg-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'>
                                                        <BsTrash/>
                                                    </button>
                                                </div>
                                            )}
                                            <div className='whitespace-nowrap'>
                                                {item.products_count > 0 && (
                                                    <p>{item.products_count} / Products</p>
                                                )}
                                            </div>
                                            </div>
                                        </div>
                                        {auth.user.role === 'admin' && (
                                            edit && dataCategory && dataCategory.id === item.id && (
                                                <form onSubmit={handleEdit} className='bg-transparent w-full flex items-center gap-[10px] px-[15px] pb-[10px]'>
                                                    <InputLabel className='bg-white border border-gray-300 p-[10px] rounded-md whitespace-nowrap'>Edit Category</InputLabel>
                                                    <TextInput type="text" defaultValue={item.category} name="category" onChange={handleChange} placeholder='input your edit category' className="w-full placeholder:capitalize placeholder:font-bold" />
                                                    <button className='bg-red-500 p-[8px] rounded-md capitalize text-white'>submit</button>
                                                </form>
                                            )
                                        )}
                                    </div>
                                    )
                                })
                            ):(
                                <NoData className='w-[150px] text-[25px]'/>
                            )}
                        </div>
                    </div>
                    </div>
                </div>
        </MainLayout>
    );
}
