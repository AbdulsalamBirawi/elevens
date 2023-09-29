import React from 'react'
type propsType={
    gridArea?:string,
    className?:string,
    image?:string,
    index?:number,
    handelStartIndex?:(e:number)=>React.MouseEvent<HTMLDivElement, MouseEvent>
}
const GridImage = ({className,gridArea,image,index,handelStartIndex}:propsType) => {
  return (
    <div className={className} onClick={()=>handelStartIndex(index)} style={{gridArea:`${gridArea?gridArea:""}`}}>
          <img className=" object-cover object-center h-full w-full" src={image} alt="" />
    </div>
  )
}

export default GridImage