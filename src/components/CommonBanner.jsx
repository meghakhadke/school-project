import React from 'react'

function CommonBanner({title}) {
  return (
    <div  className='bg-[url(/images/subheaderbg.jpg)] bg-no-repeat bg-cover'  >
 
        <h3 className='text-center text-primary font-bold text-3xl py-10'>
            {title}
        </h3>
  
    </div>
  )
}

export default CommonBanner