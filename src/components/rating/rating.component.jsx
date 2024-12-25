import { FaStar } from "react-icons/fa"


const Rating = ({userName, content, note=1}) => {
  return (
    <div className="flex flex-col justify-start gap-4">
        <div className="rating_stars flex items-center justify-start gap-1">
            { [...Array(note)].map((_, index) =>{
                return <FaStar key={index} />
            })
             }
        </div>
        <div className="content_card text-left flex flex-col gap-2 justify-start pb-8">
            <p className="font-medium">{userName}</p>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2" >{content? content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis assumenda eos cum. Temporibus, maiores?"} </p>
        </div>
    </div>
  )
}

export default Rating