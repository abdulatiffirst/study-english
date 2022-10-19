import React from 'react'

import { Container } from './style'

import logo_img from "../../assets/logos/images.png"

import { Link, useLocation } from 'react-router-dom'





function NavbarComponent() {

    const {pathname} = useLocation()

    return (
        <>
            <Container>
                <Link to={"/"}>
                    <img src={logo_img} className='logo' alt="llllasdsad" />
                </Link>


                <ul>
                <li style={{backgroundColor: `${pathname === '/grammar' ? "black": ''}`}}>
                        <Link style={{color: `${pathname === '/grammar' ? "white" : ''}`}} to={"/grammar"}>
                           Grammar
                        </Link>
                    </li>
                    <li style={{backgroundColor: `${pathname === '/vocabulary' ? "black": ''}`}}>
                        <Link style={{color: `${pathname === '/vocabulary' ? "white" : ''}`}} to={"/vocabulary"}>
                            Vocabulary
                        </Link>
                    </li>
                    <li style={{backgroundColor: `${pathname === '/reading' ? "black": ''}`}}>
                        <Link style={{color: `${pathname === '/reading' ? "white": ''}`}}  to={"/reading"}>
                            Reading
                        </Link>
                    </li>
                    <li style={{backgroundColor: `${pathname === '/speaking' ? "black": ''}`}}>
                        <Link style={{color: `${pathname === '/speaking' ? "white": ''}`}} to={"/speaking"}>
                            Speaking
                        </Link>
                    </li>
                    <li style={{backgroundColor: `${pathname === '/writing' ? "black": ''}`}} >
                        <Link style={{color: `${pathname === '/writing' ? "white": ''}`}}  to={"/writing"}>
                            Writing
                        </Link>
                    </li>
                </ul>

                <h1 className='slogan'>
                    Study !
                </h1>

            </Container>
        </>
    )
}

export default NavbarComponent