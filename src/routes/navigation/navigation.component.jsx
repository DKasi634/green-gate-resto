import React from 'react'
import Logo from "../../assets/images/Logo.png"
import { NavLink, Outlet } from 'react-router-dom'
import { IoBagOutline } from 'react-icons/io5'
import { Fragment } from 'react'
import "./navigation.styles.css"
import Footer from '../../components/footer/footer.component'
import { routes } from '../../data'

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <div className="container nav__container">
                    <div className='flex items-center justify-between gap-4' >
                        <div className="logo">
                            <NavLink to={"/"} className={(isActive) => isActive ? "active" : ""}> <img src={Logo} className='w-full h-full' alt="" /></NavLink>
                        </div>
                        <ul className="nav__links sm:hidden md:hidden lg:flex items-center justify-center gap-8 ">
                            {routes.map(({ name, path }, index) => {
                                if (name.trim().toLowerCase() !== "home") { return (<li> <NavLink key={index} to={path} className="text-sm">{name}</NavLink></li>) }
                            })}
                        </ul>

                        <div className="flex items-center justify-between gap-4">
                            <IoBagOutline className='font-semibold text-xl' />
                            <button className='btn_dark' >Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>

            <ul className="nav_sm sm:flex lg:hidden items-center justify-center gap-8">
                {routes.map(({ name, path, icon }, index) => 
                    (<li className='h-fit w-fit flex items-center justify-center'> <NavLink key={index} to={path} className="text-2xl">{icon}</NavLink></li>)
                )}
            </ul>

            <main className='main_page'>
                <Outlet />
            </main>
            <Footer />

        </Fragment>
    )
}

export default Navigation