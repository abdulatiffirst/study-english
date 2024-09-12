import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { Link, useLocation } from 'react-router-dom'

import { SidebarContainerResponsive } from "../sidebar/style"

function SidebarResponsive() {

  const [state, setState] = useState({ left: false, })

  const { pathname } = useLocation()

  //TOGGLE-SIDEBAR
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  //TOGGLE-SIDEBAR-LIST
  const list = (anchor) => (
    <>
      <Box
        style={{ width: '250px', height: '100vh', paddingTop: "60px" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >


        <SidebarContainerResponsive>
        <ul>
          <li className='title'>
            <h3 >Past Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-simple"}>Past Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-continious"}>Past Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-perfect"}>Past Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/past-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/past-perfect-continious"}>Past Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Present Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-simple"}>Present Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-continious"}>Present Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-perfect"}>Present Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/present-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/present-perfect-continious"}>Present Perfect Continious</Link>
          </li>
          <li className='title'>
            <h3 >Future Tenses</h3>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-simple' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-simple"}>Future Simple</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-continious"}>Future Continious</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-perfect' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-perfect"}>Future Perfect</Link>
          </li>
          <li style={{ backgroundColor: `${pathname === '/grammar/future-perfect-continious' ? "rgba(219, 218, 215,.03)" : ''}` }}>
            <Link to={"/grammar/future-perfect-continious"}>Future Perfect Continious</Link>
          </li>
        </ul>
        </SidebarContainerResponsive>

      </Box>
    </>
  )

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ backgroundColor: "#1e2359",color:"white",boxShadow:"0px 0 10px grey",top:"14px", zIndex:"9999", opacity:"90%" }} onClick={toggleDrawer(anchor, true)}><MenuOpenIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SidebarResponsive