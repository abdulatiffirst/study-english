import React from 'react'

import { Container } from './style'

import logo_img from "../../assets/logos/images.png"

import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <>
            <Container>
                <Link to={"/"}>
                    <img src={logo_img} className='logo' alt="llllasdsad" />
                </Link>


                <ul>
                    <li>
                        <Link to={"/vocabulary"}>
                            Vocabulary
                        </Link>
                    </li>
                    <li>
                        <Link to={"/reading"}>
                            Reading
                        </Link>
                    </li>
                    <li>
                        <Link to={"/speaking"}>
                            Speaking
                        </Link>
                    </li>
                    <li>
                        <Link to={"/writing"}>
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