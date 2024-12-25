import React from 'react'

const DietCard = ({name, image, description, price}) => {
  return (
    <div className="flex flex-col gap-1 justify-start">
        <div className="diet_image">
            <img src={image} alt="" />
        </div>
        <div className="diet_details flex flex-col gap-1 text-left" >
            <p className="font-medium text-left text-sm">{name}</p>
            <div className='flex justify-start items-center gap-3 text-sm' > 
                <div className="tag_span">1300kcal</div>
                <div className="tag_span">1300kcal</div>
                <div className="tag_span">1300kcal</div>
             </div>
            <p className='text-sm text-gray-400 line-clamp-3 my-4'>{description ? description :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora corporis error ad consectetur illum quidem."}  </p>
            <div className="diet_actions flex items-center justify-between gap-4">
                <p className='text-sm text-gray-400'> from <span className='font-semibold text-xl text-black'>{price}</span><b className='text-black'>UGX</b>/day </p>
                <button className="btn_green p-2 text-sm">Choose</button>
            </div>
        </div>

    </div>
  )
}

export default DietCard