import Form from '@/Components/Form';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { router, useForm, usePage} from '@inertiajs/react';
import React from 'react';

const Create = ({categories}) => {

    console.log(categories)
    const {errors} = usePage().props

    const {data, setData} = useForm({name: '', price: '', stok: '', category_id: ''});

    function handleChange(e) {
        const {id, value} = e.target;
        console.log(id)
        setData(values => ({
            ...values,
            [id]: value
        }));
    }
    function handleSelect(e) {
        const {name, value} = e.target;
        console.log(name)
        setData(values => ({
            ...values,
            [name]: value
        }));
    }

    const ProductCreate = (e) => {
        e.preventDefault();
        router.post("/product/create", data)
    };

  

    return (
      <div className='w-full h-full flex flex-col gap-[10px]'>
        <div className='bg-white rounded-sm'>
        <form onSubmit={ProductCreate} className='flex flex-col gap-[15px]'>
        <div className='flex flex-col'>
            <InputLabel htmlFor="" className='font-bold capitalize'>nama produk</InputLabel>
            <TextInput type="text" id="name" onChange={handleChange}/>
            <p className='text-[12px] text-red-500 capitalize'>{errors.name}</p>
        </div>
        {/*
        <div className='flex flex-col'>
            <InputLabel htmlFor="" className='font-bold capitalize'>gambar produk</InputLabel>
            <TextInput
                type="file"
                onChange={handleChange}
                className="border file:bg-gray-300 file:text-gray-500 file:border-none file:p-[10px] file:rounded-l-sm file:mr-[10px] text-[14px] font-bold file:text-[14px]"/>
        </div>
        */ }
        <div className='flex flex-col'>
            <InputLabel htmlFor="" className='font-bold capitalize'>harga</InputLabel>
            <TextInput type="number" id="price" onChange={handleChange}/>
            <p className='text-[12px] text-red-500 capitalize'>{errors.price}</p>
        </div>
        <div className='flex flex-col'>
            <InputLabel htmlFor="" className='font-bold capitalize'>category</InputLabel>
            <select name="category_id" onChange={handleSelect} className='border-gray-300 rounded-md'>
                <option value="" selected></option>
                {categories.map((category, index) => (
                    <option key={index} value={category.id}>{category.category}</option>
                ))}
            </select>
            <p className='text-[12px] text-red-500 capitalize'>{errors.category_id}</p>
        </div>
        <div className='flex flex-col'>
            <InputLabel htmlFor="" className='font-bold capitalize'>stok</InputLabel>
            <TextInput type="number" id="stok" onChange={handleChange}/>
            <p className='text-[12px] text-red-500 capitalize'>{errors.stok}</p>
        </div>
        <button
            className='w-full mt-[10px] bg-red-500 text-white font-bold capitalize p-[10px] rounded-md'>submit</button>
    </form>
        </div>
      </div>
    );
}

export default Create;



