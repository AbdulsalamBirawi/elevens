import React from 'react'
import { Range ,getTrackBackground } from 'react-range'
const STEP = 50;
const MIN = 0;
const MAX = 1000;
const RangeSlider = ({ rtl }) => {
    const [values, setValues] = React.useState([0,1000]);
  return (
    <div className='flex mt-10  flex-row gap-2 justify-between items-baseline'>
       < div className=' flex flex-col items-center'>
                <p >${values[0]}</p>
                <p className='border-t text-center border-[#ccc]'>Min Price</p>
            </div>
            <div className='max-w-[80%] w-full'>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
  
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderMark={({ props, index }) => (
          <div
            {...props}
            className={`h-[17px] w-[2px] ${index * STEP > values[0]&&index * STEP < values[1]?"bg-primeryLight":"bg-[#ccc]"}`}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '2px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: values,
                  colors: [ '#ccc','#849679', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '17px',
              width: '17px',
              borderRadius: '10px',
              backgroundColor: '#849679',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div className={`h-[16px] w-[5px] bg-primeryLight`}/>
          </div>
        )}
      />
    </div>
    </div>
    <div className='flex flex-col items-center'>
                <p >${values[1]}</p>
                <p className='border-t text-center border-[#ccc]'>Max Price</p>
            </div>
    </div>
  )
}

export default RangeSlider