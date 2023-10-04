import React from 'react'
import GridImage from '../atoms/GridImage'
type propsType={
  images:string[],
  handelStartIndex:(e:number)=>React.MouseEvent<HTMLDivElement, MouseEvent>
  showGallare:(e:boolean)=>React.MouseEvent<HTMLDivElement, MouseEvent>
  windowWidth:number
}
const GridGallary = ({images,handelStartIndex,showGallare,windowWidth}:propsType) => {

  const handelIndex=(e:number)=>{
    handelStartIndex(e)
  }
  return (
    <div>
    <div onClick={()=>showGallare(true)} className="grid grid-rows-3 h-[800px] hover:cursor-pointer lg:h-[400px] grid-flow-row lg:grid-flow-col gap-4">
        <GridImage image={images[0]} index={0} handelStartIndex={handelStartIndex}  className={`${windowWidth<1024?'row-span-2':'row-span-3'}`}/>
        <div className=" grid grid-cols-2  grid-flow-col h-[400px] grid-rows-2 gap-2">
            <GridImage className=' hidden lg:block' image={images[1]} index={1} handelStartIndex={handelStartIndex}    gridArea="1 / 1 / 2 / 2" />
            <GridImage  image={images[2]} index={2} handelStartIndex={handelStartIndex}  gridArea="1 / 2 / 2 / 3"/>
            <GridImage className=' hidden lg:block' image={images[3]} index={3} handelStartIndex={handelStartIndex}  gridArea= '2 / 1 / 3 / 2'/>
            <div onClick={()=>handelIndex(4)} className="relative h-full ">
              <GridImage className='h-full' image={images[4]} index={4} handelStartIndex={handelStartIndex}  gridArea= '2 / 2 / 3 / 3'/>
              {images.length>5?<div className="h-full text-slate-50  absolute top-0 left-0 w-[100%] text-3xl  block bg-black opacity-50">
                <p className=' text-center w-full h-full my-20  ' >+{windowWidth<1024?images?.length-2:images?.length-5}</p>
              </div>:""}
            </div>
        </div>
    
    </div>



    </div>
  )
}

export default GridGallary