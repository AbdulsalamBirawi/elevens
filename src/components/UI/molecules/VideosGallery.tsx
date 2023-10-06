import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

type proprsType={
    setShowVideos:(e:boolean)=>void,
    startIndex:number,
    videos:{}[],
    playVideo:(e:boolean)=>void,
    imageGalleryRef:object
}
const VideosGallery = ({setShowVideos, startIndex ,videos,playVideo,imageGalleryRef}:proprsType) => {
  return (
    <div>
			<div
				className={`justify-center w-auto h-[600px]  flex m-auto  md:mt-0 fixed inset-0 z-50 transition   `}
			>
				<div className="relative   my-6 mx-auto ">
					<div className="border-0  w-auto h-[250px] rounded-lg shadow-lg relative flex flex-col   outline-none focus:outline-none">
						<div className="flex items-start justify-between  border-solid  border-slate-200 rounded-t">
              
              <button
								className="  rounded-full mb-2  m-auto   border-0 text-gray-200  hover:text-gray-400  text-4xl leading-none font-light"
								onClick={() => setShowVideos(false)}
							>
								<AiOutlineClose/>
							</button>
          
							
						</div>
					
            <div className='w-full'>
              <ImageGallery ref={imageGalleryRef}  onClick={()=>playVideo(true)} showPlayButton={false} startIndex={startIndex} showFullscreenButton={true} items={videos} />
            </div>
						
					</div>
				</div>
			</div>
			<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
		</div>
  )
}

export default VideosGallery