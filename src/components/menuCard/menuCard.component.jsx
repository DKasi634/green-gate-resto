import React from 'react'

const MenuCard = ({image, rating, type,  name, description, calories, diet}) => {
  return (
    <div className='menu_card flex flex-col gap-1 justify-start'>
        <div className="menu_image">
            <img src={image} alt={name} />
            <span className='diet_type p-2 rounded-md' >{type}</span>
            <span className='menu_rating'>{rating}</span>
        </div>
        <div className="menu_details flex flex-col justify-start gap-1">
            <div className="flex flex-col justify-start w-full gap-2">
                <div className="flex items-center gap-2 justify-between mt-2">
                    <span className='font-semibold text-sm line-clamp-1'>{name}</span> <span className='text-xs font-light text-gray-500'>{calories}kcal</span>
                </div>
                <p className='my-1 text-left line-clamp-2 text-xs font-normal'>{description}</p>
                <span className='text-sm font-normal'>{diet}</span>
            </div>
        </div>
    </div>
  )
}

export default MenuCard