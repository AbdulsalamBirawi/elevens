import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import icon from "../../../assets/Framed Icon-01.png";
const HouseForm = () => {

  type FormData = {
    fullName: string;
    email: string;
    phoneNumber: string;
    message?: string;
  };
  

    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<FormData>();
  
  const onSubmit = async (data:FormData) => {
      console.log("aa")
	};
  return (
    <div className='border-2 p-8 border-primeryLight my-5 w-[100%] m-auto sm:w-[75%] lg:w-[50%]'>
    <div className='flex flex-col  justify-center items-center gap-5'>
    
    <div className="w-40 flex items-center h-full">
      <Image src={icon} alt="icon" />
    </div>

        
        <p className='text-base '>Send Message via Whatsapp</p>
        <p className='text-base text-center px-3 py-2  border-primeryLight border-2 w-[200px] text-primeryLight '>+21 555 665 456</p>
        <p className='mb-2'>or Book now</p>
    </div>
     
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-5' action="">

      <div className='w-full '>
        
        <Controller
        
          control={control}
          name="fullName"
          rules={{ required: 'Full name is required' }}
          render={({ field }) => (
            <>
              <input placeholder='Full Name' type="text" {...field} className=' w-full border-2 py-2 px-2  border-primeryLight' />
              {errors.fullName && <span className='text-red-600'>{errors.fullName.message}</span>}
            </>
          )}
        />
      </div>

      <div className='w-full'>
       
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email format',
            },
          }}
          render={({ field }) => (
            <>
              <input placeholder='Last Name' type="email" className=' w-full border-2 py-2 px-2 border-primeryLight' {...field} />
              {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            </>
          )}
        />
      </div>

      <div className='w-full'>
        
        <Controller
          control={control}
          name="phoneNumber"
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^\d{14}$/,
              message: 'Phone number must be 14 digits',
            },
          }}
          render={({ field }) => (
            <>
              <input placeholder='Phone Number' type="text" {...field} className=' w-full border-2 py-2 px-2  border-primeryLight' />
              {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber.message}</span>}
            </>
          )}
        />
      </div>

      <div className='w-full'>
        
        <Controller
          control={control}
          name="message"
          render={({ field }) => <textarea placeholder='Message (Optional)' rows={6} className=' w-full border-2 border-primeryLight py-2 px-2 ' {...field} />}
        />
      </div>

      <button type="submit" className=' transition duration-300 py-2 px-5 hover:border-primeryLight border bg-primeryLight text-white hover:bg-white hover:text-primeryLight w-60 lg:w-44 xl:w-60'>Send Message</button>

    </form>
                
						
  
</div>
  )

}

export default HouseForm