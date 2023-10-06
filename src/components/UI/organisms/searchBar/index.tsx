import React from 'react'
import RangeSlider from '../../molecules/RangeSlider'
import Select from '../../atoms/Select'
//import Select from 'react-select'
import { Button, Container } from '../../atoms'
const index = () => {
  return (
    <div className='lg:mx-16 '>
        <RangeSlider/>
        <div className='  flex flex-col md:flex-row gap-5 lg:gap-36  justify-center   items-center my-10 '>
            <div className=' z-10 flex flex-row gap-3  w-full items-center justify-center '>
              <div className=' flex flex-col gap-3 md:flex-row w-full'>
              <Select/>
              <Select/>
              </div>
           
              <div className=' flex gap-3 flex-col md:flex-row w-full'>
              <Select/>
              <Select/>
              </div>
           
            
            </div>
        
        
        
        <Button className='' fill color='primery' style={{width:'200px'}}>Search</Button>
    
     </div>
    </div>
  )
}

export default index