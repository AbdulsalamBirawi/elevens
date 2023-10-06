import React from 'react'
import GridImage from '../atoms/GridImage'
type propsType={
  videos:string[]
  handelStartIndex:(e:number)=>React.MouseEvent<HTMLDivElement, MouseEvent>
  showVideos:(e:boolean)=>React.MouseEvent<HTMLDivElement, MouseEvent>
}
const GridVideos = ({videos,handelStartIndex,showVideos}:propsType) => {
  const handelIndex=(e:number)=>{
    handelStartIndex(e)
  }

 const show=()=>{
  showVideos(true)
 }
  return (
    <div className=''>
      <h2 className='text-3xl font-bold my-2'>Video Review</h2>
      <div onClick={show} className=' m-auto  max-w-[900px]  border-b-2 border-gray-200'>
        
        <div className=' my-10 border  border-black grid  ' style={{gridTemplateColumns:`0.4fr 0.7fr 0.3fr `}}>
          <GridImage  image={videos[0]} index={0} handelStartIndex={handelStartIndex} className='' gridArea="1 / 1 / 3 / 2 "/>
          <div  className='grid border  border-black '>
            <GridImage image={videos[1]} index={1} handelStartIndex={handelStartIndex} gridArea="1 / 2 / 2 / 3 "/>
            <GridImage image={videos[2]} index={2} handelStartIndex={handelStartIndex} gridArea="2 / 2 / 3 / 3 "/>
          </div>
          <div className='  border border-black  grid  '>
            <GridImage image={videos[3]} index={3} handelStartIndex={handelStartIndex} className='' gridArea="1 / 3 / 2 / 4 "/>
            <GridImage image={videos[4]} index={4} handelStartIndex={handelStartIndex} className=' ' gridArea="2/ 3 / 3 / 4 "/>
          </div>  
        </div> 
      </div>
    </div>
    
  )
}

export default GridVideos