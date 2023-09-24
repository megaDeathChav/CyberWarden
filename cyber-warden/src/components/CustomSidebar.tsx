"use client";

// refers to my index.ts file which exports all components from specified component files
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from '../';
import { CSSObject } from '@emotion/styled';
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "next-themes";

import Link from 'next/link';
import Image from 'next/image';


// icon import
import { Diamond } from '../icons/Diamond';
import { InkBottle } from '../icons/InkBottle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Service } from '../icons/Service';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';





// Type for menuItems
type ThemeColor = {
  backgroundColor: string;
  color: string;
};

type Theme = {
  sidebar: ThemeColor;
  menu: {
    menuContent: string;
    icon: string;
    hover: ThemeColor;
    disabled: ThemeColor;
  };
};

const themes: Record<string, Theme> = {
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
        backgroundColor: '#c5e4ff',
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
        backgroundColor: '#c5e4ff',
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


export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])


  /* 
  The hexToRgba function is intended to convert a hexadecimal color code to its equivalent RGBA (red, green, blue, alpha) values.

  The function takes a hexadecimal color code as its only argument. The color code must be in the format #rrggbb, where rr, gg, and bb are each two
  hexadecimal digits representing the red, green, and blue components of the color, respectively.

  The function returns an object with four properties: r, g, b, and a. The r, g, and b properties represent the red, green, and blue components of the 
  color, respectively, and are each a number between 0 and 255. The a property represents the alpha channel of the color, and is a number between 0 and 1.
  */  

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
      color: themes[theme ?? 'light'].menu.icon, // Use a type assertion (!) to assert that theme is not null or undefined
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme ?? 'light'].menu.disabled.color, // Use a type assertion (!) to assert that theme is not null or undefined
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme ?? 'light'].menu.menuContent, !collapsed ? 0.4 : 1) // Use a type assertion (!) to assert that theme is not null or undefined
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme ?? 'light'].menu.disabled.color, // Use a type assertion (!) to assert that theme is not null or undefined
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme ?? 'light'].menu.hover.backgroundColor, 1), // Use a type assertion (!) to assert that theme is not null or undefined
        color: themes[theme ?? 'light'].menu.hover.color, // Use a type assertion (!) to assert that theme is not null or undefined
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

    return (
      <>
        <Sidebar
            collapsed={collapsed}
            breakPoint="md"
            backgroundColor={hexToRgba(themes[theme ?? 'light'].sidebar.backgroundColor, 1)}
            rootStyles={{
              color: themes[theme ?? 'light'].sidebar.color,
              borderRight: `1px solid ${theme === 'dark' ? "#254133" : "#D1D5DB"}`, // Adjust the border color based on the theme
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
                    // callback function (maybe make notes on callback functions :D)
                    onClick={() => {
                      setCollapsed(!collapsed)
                      console.log(theme)
                    }} 
                    > 
                      <div className='flex items-center justify-center pr-4'>
                        {!collapsed ?         
                          <Typography variant="subtitle1" fontWeight={600} color={theme === 'dark' ? "#0098e5" : "#4DBAFF"}>
                            Cyber Warden
                          </Typography> 
                        :
                          ''}
                      </div>
                      
                    </MenuItem>
                    {/* render line with different colors based on theme */}
                    <div className="border-t border-gray-300 w-full dark:border-gray-700"></div>
                </Menu>
              <div style={{ flex: 1, marginBottom: '40px' }}>
                <div style={{ padding: '15px 24px 0', marginBottom: '8px'}}>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                  >
                    General
                  </Typography>
                </div>
                <Menu menuItemStyles={menuItemStyles}>
                  <MenuItem icon={<HomeOutlinedIcon />} component={<Link href='/'/>}>
                    Home
                  </MenuItem>
                  {/* TEMPORARY !!! */}
                    <MenuItem 
                      icon={theme === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />} 
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}    
                     >
                    Change Mode
                    </MenuItem>
                  {/* TEMPORARY !!! */}
                  {/* HERE AS AN EXAMPLE OF NESTED SUBMENU's */}
                  <SubMenu label="Components" icon={<Diamond />}>
                    <MenuItem> Grid</MenuItem>
                    <MenuItem> Layout</MenuItem>
                    <SubMenu label="Forms">
                      <MenuItem> Input</MenuItem>
                      <MenuItem> Select</MenuItem>
                    </SubMenu>
                  </SubMenu>
                  {/* HERE AS AN EXAMPLE OF NESTED SUBMENU's */}
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
                  <MenuItem icon={<LogoutOutlinedIcon />} component={<Link href='/login'/>}>
                    Logout
                  </MenuItem>
                  <MenuItem disabled icon={<Service />}>
                    Examples
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Sidebar>
      </>
    );
};
