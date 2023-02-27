import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import SideDrawer from "./SideDrawer";
const Header = () => {
  const [drawOpen, setDrawOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);
  const toggleDraw = value => {
    setDrawOpen(value);
    }; 
    const handleScroll = () => {
        if (window.scrollY>0) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    }, []);
    
  return (
    <AppBar
      className="appbar"
      position="fixed"
          style={{ background:  headerShow? "#2f2f2f" :"transparent", boxShadow: "none", padding: "10px 0" ,width:"100%",left:0,right:0}}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">
            The Event Place
          </div>
          <div className="header_logo_title">Musical Events</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => {
            toggleDraw(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawOpen} onClose={value => toggleDraw(value)} />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
