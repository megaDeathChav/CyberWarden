"use client";

import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import SidebarItem from "./SidebarItem";
// icon import
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";




// Type for menuItems
interface MenuItemType {
  title: string;
  to: string;
  icon: JSX.Element;
}

interface SidebarProps {
  menuItems: MenuItemType[];
  currentPage: string;
}


const CustomSidebar: React.FC<SidebarProps> = ({ menuItems, currentPage }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    // currentPage is a string that is used to check which page the user is currently viewing
    // depending on that the corresponding icon will be blue
    const [selected, setSelected] = useState({currentPage});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    return (
        <Box
            sx={{
                "& .Sidebar-inner": {
                    background: `${"#e1e2fe"} !important`
                },
                "& .Sidebar-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .Sidebar-inner-item": {
                    padding: "5px 35px 5px 20 px !important"
                },
                "& .Sidebar-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .Sidebar-menu-item.active":{
                    color: "#6870fa !important"
                },
                "& .Sidebar":{
                    height: "100vh !important",
                    position: "fixed !important",
                    top: "0 !important",
                    bottom: "0 !important"
                },
                transition: isCollapsed ? "padding-right 0.15s ease-in-out" : "padding-right 0.3s ease-in-out",
                paddingRight: isCollapsed ? "80px" : "250px",
            }}
        >
        <Sidebar collapsed={isCollapsed}>
        <Menu>
          {/* MENU ICON */}
          <MenuItem
            // when collapsed 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 0 0",
              // color: "#3e4396",
            }}
          >
            {/* when not collapsed */}
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                ml="15px"
              >
                <IconButton style={{color: "#3e4396"}} onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src='logo.png'
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  color={"#3e4396"} 
                  m="10px 0 0 0"
                  >
                  Serial Scripter
                </Typography>

                <Typography
                  variant="h4"
                  color={"#2e7c67"}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Keyboard Cowboys
                </Typography>
              </Box>
            </Box>
          )}

          {/* <Box paddingLeft={isCollapsed ? undefined : "10%"} paddingTop={isCollapsed ? undefined : "30px"}> */}
          <Box paddingTop={!isCollapsed && isMounted ? "30px" : undefined}>

              <SidebarItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                color={"#3e4396"}
              />
              <Box>
              {/* Generate menu items dynamically if menuItems are passed*/}
              {menuItems ? menuItems.map((item) => (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  color={"#3e4396"}
                />
              )) : null}
              </Box>
          </Box>
        </Menu>
        </Sidebar>
        </Box>
    );
};

export default CustomSidebar;