import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'
function Booking() {
  return (
    <div className='px-4 py-12 max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
      <div className='flex flex-col lg:col-span-2  '>
        <div className='py-3'>
       <h2>Luxury Included Vacations For Two People</h2>
       <p className='text-justify py-3'>These resorts often include gourmet dining, premium drinks, spa treatments, and activities. Popular destinations include the Maldives, the Caribbean, and Mediterranean hotspots like Spain and Greece.: For a more intimate experience, you can rent a luxury villa. Many come with private pools, hot tubs, and stunning views. Destinations like Italy, Bali, and the Caribbean are known for their romantic villas</p>
        </div>
      <div className='grid sm:grid-cols-2 gap-8 py-4'>
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <button className='bg-gray-300 rounded-2xl'>
         <RiCustomerService2Fill  className='text-blue-600' size={35}/>
          </button>
          <div>
            <h3 className='py-2 '>LEADING SERVICE</h3>
            <p className='px-2'>ALL Inclusive-company For 20 Years IN-A-ROW</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center text-center '>
          <button className='bg-gray-300 rounded-2xl '>
         <MdOutlineTravelExplore className='text-green-500 ' size={35}/>
          </button>
          <div>
            <h3 className='py-2 '>LEADING SERVICE</h3>
            <p className='px-2'>ALL Inclusive-company For 20 Years IN-A-ROW</p>
          </div>
        </div>
       
      </div>
      </div>
      {/* //right */}
      <div>
        <div className='border text-center '>
        <p className='pt-2'> GET AN ADDITIONAL 10% OFF</p>
        <p className='py-2'>12 HOURS LEFT</p>
        <p className='border bg-black text-white mx-auto p-2  rounded-xl'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full cursor-pointer font-semibold'>
          <div className='flex flex-col  my-2'>
            <label htmlFor="destination" >Destination</label>
            <select className='py-1 border rounded-2xl' id='destination' >
              <option >GoA</option>
              <option selected >Maldives</option>
              <option >lakshadweep</option>
              <option >Paris</option>
            </select>
          </div>
          <div className='flex flex-col  my-3'>
            <label htmlFor="checkin">Check-In</label>
            <input className='border rounded-e-md' id='checkin' type="date" />
          </div>
          <div className='flex flex-col  my-2'>
            <label htmlFor="checkout">Check-Out</label>
            <input className='border rounded-e-md' id='checkout' type="date" />
          </div>
          <button className='border rounded-xl w-full font-bold text-white bg-gradient-to-r from-teal-500 to-blue-400 text-xl p-2'>Rates & Avalabilities</button>
        </form>
      </div>
    </div>
  )
}

export default Booking
