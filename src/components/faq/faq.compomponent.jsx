import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Faq = ({question, answer}) => {
    const [faqToggled, setFaqToggled] = useState(false);

    const toggleFaq = ()=>{
        setFaqToggled(!faqToggled);
    }
  return (
    <div className="faq flex flex-col justify-start text-left gap-0 py-2 pl-4 rounded-md cursor-pointer h-fit" onMouseDown={toggleFaq}>
        <div className="faq_header flex items-center justify-between gap-1 pr-4">
            <h3 className='font-medium text-black text-left w-fit'>{question}</h3>
            <span className='text-xl'> { faqToggled ?<FaAngleUp/> :<FaAngleDown />} </span>
        </div>
        {faqToggled && <p className='faq_content text-sm font-normal py-2 w-fit clamp' >{answer}</p>}
    </div>
  )
}

export default Faq