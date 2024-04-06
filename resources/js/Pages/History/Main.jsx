import MainLayout from '@/Layouts/MainLayout'
import {Head} from '@inertiajs/react'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from 'xlsx';

const Main = ({auth, buying}) => {
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedBuying, setSelectedBuying] = useState(null)

  console.log(buying.length === 0, 'by id')

  const handleOpenDetails = (id) => {
      const selected = Object.values(buying).find(item => item.id === id);
     setSelectedBuying(selected);
    setOpenDetails(true)
  }
  const handleCloseDetails = () => {
    setOpenDetails(false)
    setSelectedBuying(null)
  }

  const handleExportToExcel = () => {
    if (buying) {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(buying);
        XLSX.utils.book_append_sheet(wb, ws, "Pembelian Details");
        XLSX.writeFile(wb, `Pembelian_${buying.id}.xlsx`);
    }
};

  // console.log(buyingId, 'by id')
    return (
        <MainLayout auth={auth}>
            <Head title="Menus - Food"/>
            <div className='w-full h-auto flex gap-[10px] bg-transparent'>
              <div className={`flex w-full h-auto flex-col gap-[10px] ${openDetails && 'slg:pr-[360px]'}`}>
                <div className='p-[15px] bg-white rounded-sm flex items-center justify-between'>
                    <p className='capitalize font-bold'>history penjualan</p>
                    <button onClick={handleExportToExcel} className='flex items-center gap-[10px] bg-red-500 text-[20px] text-white py-[10px] px-[10px] rounded-md font-bold capitalize'>
                    <SiMicrosoftexcel/>
                  </button>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  {/* {buying.length > 0 ? ( */}
                      {Object.values(buying).map((buy,index)=> {
                        console.log(buy,'hello')
                        return (
                            <button onClick={() => handleOpenDetails(buy.id)} key={index} className="w-full bg-white p-[15px] items-center rounded-sm border border-transparent hover:border-yellow-500 flex justify-between">
                                <div className="flex items-center gap-[15px]">
                                <div className="flex flex-col items-start">
                                    <p className="text-[18px] font-Roboto font-bold">Orders : #{buy.id}</p>
                                    <p className="text-[12px] font-Roboto text-gray-500">Qty : {buy.details.length} Produk</p>
                                </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    {/* <p className="text-[18px] font-Roboto text-gray-400">August 20</p> */}
                                    <div className="flex gap-[10px] items-center">
                                        <p className="text-[18px] font-Roboto font-bold">RP {buy.totalprice}</p>
                                        <p className="bg-red-500 py-[5px] px-[10px] rounded-md text-white font-Roboto text-[13px] capitalize">success</p>
                                    </div>
                                </div>
                            </button>
                        )
                      })}
                  
                  {/* // ):(
                  //   <div>hello</div>
                  // )} */}
                </div>
              </div>
              {openDetails && (

              <div className='bg-transparent fixed right-[10px] h-full max-sm:w-full top-0 max-sm:z-[50] sm:pt-[96px] pb-[10px]'>
              <div className='bg-white shadow-[-20px_20px_30px_rgba(0,_0,_0,_0.2)] rounded-sm pb-[10px] h-full overflow-y-auto hidden-scroll right-0 flex flex-col justify-between gap-[15px] max-sm:w-full sm:max-w-[350px] w-full'>
                <div className='flex flex-col gap-[15px]'>
                <div className='border-b sticky top-0 bg-white flex items-center justify-between border-black px-[15px] pt-[15px] pb-[15px] border-opacity-10'>
                  <div>
                    <p className='font-bold capitalize text-[20px]'>invoice <span className='text-red-500'>#{selectedBuying.id}</span></p>
                    <p className='text-[15px] text-gray-500 font-bold capitalize'>customer - {selectedBuying.customer.nama}</p>
                  </div>
                  <button onClick={handleCloseDetails} className='border border-red-500 p-[12px] text-[20px] rounded-md text-white bg-red-500'>
                    <IoClose/>
                  </button>
                </div>
                <div className='flex flex-col gap-[25px]'>
                <div className='px-[15px] font-medium flex gap-[30px]'>
                  <div>
                    <p className='text-[14px] text-gray-500 capitalize font-bold'>date order</p>
                    <p>{selectedBuying.tanggalpenjualan}</p>
                  </div>
                  <div>
                    <p className='text-[14px] text-gray-500 capitalize font-bold'>time order</p>
                    <p>20.30</p>
                  </div>
                </div>
                <div className='px-[15px] flex gap-[30px]'>
                  <div className='flex flex-col gap-[2px]'>
                    <p className='text-[14px] text-gray-500 capitalize font-bold'>customer</p>
                    <p className='capitalize font-medium'>{selectedBuying.customer.nama} - {selectedBuying.customer.telephone} </p>
                    <p className='text-[14px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, adipisci.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-[5px] px-[15px]'>
                  <p className='text-gray-500 text-[14px] capitalize font-bold'>invoice</p>
                  <div className='w-full'>
                    <table className='text-[14px] border w-full'>
                        <thead className='bg-[#EDF1F4]'>
                            <tr>
                                <th className='text-left font-normal p-[5px]'>Product</th>
                                <th className='text-left font-normal p-[5px]'>Quantity</th>
                                <th className='text-left font-normal p-[5px]'>Header 3</th>
                                <th className='text-left font-normal p-[5px]'>price</th>
                            </tr>
                        </thead>
                        {selectedBuying.details.map((detail,index) => {
                          console.log(detail)
                          return (
                        <tbody key={index}>
                            <tr>
                                <td className='p-[5px]'>{detail.product.name}</td>
                                <td className='p-[5px]'>{detail.jumlahproduct}</td>
                                <td className='p-[5px]'>Cell 3</td>
                                <td className='p-[5px]'>{detail.product.price}</td>
                            </tr>
                        </tbody>
                          )
                        })}
                    </table>
                  </div>
                  <div className='grid grid-cols-4 mt-[10px]'>
                    <div className='col-span-2 text-gray-500 text-[14px]'>
                      Lorem ipsum dolor sit amet.
                    </div>
                    <div className='col-span-1'>
                      hello
                    </div>
                    <p>dd</p>
                  </div>
                </div>
                </div>
                </div>
              </div>
              </div>
              )}
            </div>
        </MainLayout>
    )
}

export default Main
