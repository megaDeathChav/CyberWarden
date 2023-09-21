"use client";

import Image from 'next/image';
import Link from 'next/link';
import login from './login/page';
import { DataGrid } from '@mui/x-data-grid';
import RootLayout from './layout';
import CustomSidebar from '../components/CustomSidebar';
import LoginIcon from '@mui/icons-material/Login';

import { useState, useEffect } from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Sidebar } from "../components/Sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import SidebarItem from "../components/SidebarItem";
// icon import
import { Diamond } from '../icons/Diamond';
import { BarChart } from '../icons/BarChart';
import { Global } from '../icons/Global';
import { InkBottle } from '../icons/InkBottle';
import { Book } from '../icons/Book';
import { Calendar } from '../icons/Calendar';
import { ShoppingCart } from '../icons/ShoppingCart';
import { Service } from '../icons/Service';


export default function Home() {

  const menuItems = [
    {
      title: 'Login',
      to: '/login',
      icon: <LoginIcon />,
    },
  ];

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

  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  

  const [isCollapsed, setIsCollapsed] = useState(true);
  // currentPage is a string that is used to check which page the user is currently viewing
  // depending on that the corresponding icon will be blue
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    }, []);
  
  return (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ width: '250px' }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={'#ffffff'}
        rootStyles={{
          color: '#607489',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>
            <Menu>
              <SubMenu
                label="Charts"
                icon={<BarChart />}
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps" icon={<Global />}>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" icon={<InkBottle />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <SubMenu label="Components" icon={<Diamond />}>
                <MenuItem> Grid</MenuItem>
                <MenuItem> Layout</MenuItem>
                <SubMenu label="Forms">
                  <MenuItem> Input</MenuItem>
                  <MenuItem> Select</MenuItem>
                  <SubMenu label="More">
                    <MenuItem> CheckBox</MenuItem>
                    <MenuItem> Radio</MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
              <SubMenu label="E-commerce" icon={<ShoppingCart />}>
                <MenuItem> Product</MenuItem>
                <MenuItem> Orders</MenuItem>
                <MenuItem> Credit card</MenuItem>
              </SubMenu>
            </Menu>

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Extra
              </Typography>
            </div>

            <Menu>
              <MenuItem icon={<Book />}>Documentation</MenuItem>
              <MenuItem disabled icon={<Service />}>
                Examples
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
    </div>
    <main className="min-h-screen max">
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
          Toggle
        </button>
      <div className='flex flex-col items-center justify-center'>
        <div>
          Here is the dashboard
        </div>
        
        <div className='mt-4'>
          <Link href='/login'>Login Here </Link>
        </div>
      </div>
    </main>
  </div>
  )
}
