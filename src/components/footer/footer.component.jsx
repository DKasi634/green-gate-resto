import { TbBrandInstagramFilled, TbBrandLinkedin, TbBrandWhatsappFilled } from "react-icons/tb"
import Logo from "../../assets/images/Logo.png"
import { NavLink } from "react-router-dom"
import React from "react"
import { routes } from "../../data"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container flex flex-col gap-1">
            
            <div className="footer_top flex items-center justify-between gap-4">
                    <div className="logo">
                        <img src={Logo} className='w-full h-full' alt="" />
                    </div>
                    <ul key={"footer_links_key"} className="footer__links flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        { routes.map(({name, path}, index) =>
                         { if(name.trim().toLowerCase() !== "home"){
                            return <li> <NavLink key={name} to={path} className="text-sm">{name}</NavLink></li> 
                        }})
                        }
                    </ul>

                    <span className="block text-sm">
                        Contact: <span className="font-semibold">+1 (213) 776 24 10</span>
                    </span>
            
            </div>
            <ul className="socials flex items-center justify-center w-fit mx-auto gap-4">
                <li className="text-xl"> 
                    <a href="https://www.instagram.com/dkasi634/profilecard/?igsh=d3gwc2c1Y3pweG5x" target="_blank" rel="noopener noreferrer"><TbBrandInstagramFilled /></a>
                 </li>
                <li className="text-xl"><a href="https://www.linkedin.com/in/daniel-kasi-32093b228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer noopener"><TbBrandLinkedin /> </a></li>
                <li className="text-xl"><a href="https://wa.me/+243975623008" target="_blank" rel="noreferrer noopener"><TbBrandWhatsappFilled/></a></li>
            </ul>

            <p className="text-white text-sm mb-2 text-center py-4"> {new Date().getFullYear()} Dan Kasi &copy; All rights reserved </p>
        </div>
    </footer>
  )
}

export default Footer