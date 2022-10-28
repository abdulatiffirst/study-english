import React from 'react'

import { Container, LinksResponsive } from './style'

import logo_img from "../../assets/logos/images.png"

import { Link, useLocation } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const ITEM_HEIGHT = 48;

function NavbarComponent() {

    const location = useLocation()

    const pathname = location.pathname

    const a = pathname.startsWith("/grammar")

    console.log('====================================');
    console.log(a);
    console.log('====================================');


   
    //MENU

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Container>
                <Link to={"/"}>
                    <img src={logo_img} className='logo' alt="llllasdsad" />
                </Link>


                <ul className='links'>
                    <li style={{ backgroundColor: `${a === true ? "black" : ''}` }}>
                        <Link style={{ color: `${a === true ? "white" : ''}` }} to={"/grammar"}>
                            Grammar
                        </Link>
                    </li>
                    <li style={{ backgroundColor: `${pathname === '/vocabulary' ? "black" : ''}` }}>
                        <Link style={{ color: `${pathname === '/vocabulary' ? "white" : ''}` }} to={"/vocabulary"}>
                            Vocabulary
                        </Link>
                    </li>
                    <li style={{ backgroundColor: `${pathname === '/reading' ? "black" : ''}` }}>
                        <Link style={{ color: `${pathname === '/reading' ? "white" : ''}` }} to={"/reading"}>
                            Reading
                        </Link>
                    </li>
                    <li style={{ backgroundColor: `${pathname === '/speaking' ? "black" : ''}` }}>
                        <Link style={{ color: `${pathname === '/speaking' ? "white" : ''}` }} to={"/speaking"}>
                            Speaking
                        </Link>
                    </li>
                    <li style={{ backgroundColor: `${pathname === '/writing' ? "black" : ''}` }} >
                        <Link style={{ color: `${pathname === '/writing' ? "white" : ''}` }} to={"/writing"}>
                            Writing
                        </Link>
                    </li>
                </ul>
                <div className='openBtn'>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >

                    <MenuItem onClick={handleClose}>
                        <LinksResponsive>
                            <li style={{ backgroundColor: `${pathname === '/grammar' ? "black" : ''}` }}>
                                <Link style={{ color: `${pathname === '/grammar' ? "white" : ''}` }} to={"/grammar"}>
                                    Grammar
                                </Link>
                            </li>
                            <li style={{ backgroundColor: `${pathname === '/vocabulary' ? "black" : ''}` }}>
                                <Link style={{ color: `${pathname === '/vocabulary' ? "white" : ''}` }} to={"/vocabulary"}>
                                    Vocabulary
                                </Link>
                            </li>
                            <li style={{ backgroundColor: `${pathname === '/reading' ? "black" : ''}` }}>
                                <Link style={{ color: `${pathname === '/reading' ? "white" : ''}` }} to={"/reading"}>
                                    Reading
                                </Link>
                            </li>
                            <li style={{ backgroundColor: `${pathname === '/speaking' ? "black" : ''}` }}>
                                <Link style={{ color: `${pathname === '/speaking' ? "white" : ''}` }} to={"/speaking"}>
                                    Speaking
                                </Link>
                            </li>
                            <li style={{ backgroundColor: `${pathname === '/writing' ? "black" : ''}` }} >
                                <Link style={{ color: `${pathname === '/writing' ? "white" : ''}` }} to={"/writing"}>
                                    Writing
                                </Link>
                            </li>
                        </LinksResponsive>
                    </MenuItem>

                </Menu>

                <h1 className='slogan'>
                    Study !
                </h1>

            </Container>

        </>
    )
}

export default NavbarComponent