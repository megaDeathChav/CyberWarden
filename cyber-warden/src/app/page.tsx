"use client";

import Image from 'next/image';
import Link from 'next/link';
import login from './login/page';
import { DataGrid } from '@mui/x-data-grid';
import RootLayout from './layout';
import LoginIcon from '@mui/icons-material/Login';
import styled, { CSSObject } from '@emotion/styled';


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
import { menuClasses } from '@/utils/utilityClasses';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import BarGraph from '@/components/BarCharts';
import PieGraph from '@/components/PieCharts';


type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

export interface MenuItemStylesParams {
  level: number;
  disabled: boolean;
  active: boolean;
  isSubmenu: boolean;
  open?: boolean;
}

export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);

interface MenuItemType {
  title: string;
  to: string;
  icon: JSX.Element;
}

interface SidebarProps {
  menuItems: MenuItemType[];
  currentPage: string;
}

export interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

export default function Home() {

  // Type for menuItems  

  const [collapsed, setCollapsed] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState('250px');
  const [theme, setTheme] = useState<Theme>('light');

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };


  const collapseSidebar = () => {
    setCollapsed(!collapsed);
    // Toggle between the initial and collapsed width
    setSidebarWidth(sidebarWidth === '250px' ? '80px' : '250px');
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };


  return (
  <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar
        collapsed={collapsed}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={                
                <Image
                  alt="profile-user"
                  width={80}
                  height={80}
                  src='/assets/logo.png'
                />} 
                onClick={collapseSidebar} 
                > 
                  {
                    !collapsed ?         
                      <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
                        Cyber Warden
                      </Typography> 
                    :
                      ''
                  }
                </MenuItem>
                <div className="border-t border-gray-300 w-full dark:bg-gray-300"></div>
            </Menu>
          <div style={{ flex: 1, marginBottom: '40px' }}>
            <div style={{ padding: '15px 24px 0 0', marginBottom: '8px'}}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<HomeOutlinedIcon />} component={<Link href='/login'/>}>
                Home
              </MenuItem>
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

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<Calendar />}>
                Calendar
              </MenuItem>
              <MenuItem icon={<Book />}>Documentation</MenuItem>
              <MenuItem disabled icon={<Service />}>
                Examples
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>
    <main className="min-h-screen max">
        <button className="sb-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Mode
        </button>
      <div className='flex flex-col items-center justify-center'>
        <div>
          Here is the dashboard
        </div>
        
        <div className='mt-4'>
          <Link href='/login'>Login Here </Link>
        </div>
      </div>
        <div style ={{display: "flex"}}> {/* temporary location */}
          <BarGraph/>
          <PieGraph/>
        </div>
    </main>
  </div>
  )
}
