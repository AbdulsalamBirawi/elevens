import React from 'react'
import RangeSlider from '../../molecules/RangeSlider'
import Select from '../../atoms/Select'
import { Button, Container } from '../../atoms'
const index = () => {
  return (
    <div className='lg:mx-16'>
        <RangeSlider/>
        <div className='flex flex-row gap-4 md:gap-0  my-10'>
            <div className='flex flex-row gap-2 w-full'>
            <Select/>
            <Select/>
            <Select/>
            <Select/>
            </div>
        
        
        
        <Button className='w-[10px]' fill color='primery' style={{width:'200px'}}>Search</Button>
    
     </div>
    </div>
  )
}

export default index