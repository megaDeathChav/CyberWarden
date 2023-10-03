'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkMode, LightMode } from "@mui/icons-material";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";


export default function ThemeSwitcher() 
{
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null

    return (
        <>
            <button
                aria-label="Toggle Light Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}   
                className="flex items-center h-full w-full" 
            >
                {
                    theme === 'dark' ? 
                        <SunIcon className=" text-deep-orange-400 mr-3 w-5 h-5" /> 
                    :
                        <MoonIcon className=" text-gray-700 mr-3 w-5 h-5" />
                }
                <Typography color='inherit' className='font-thin'>
                    {
                        theme === 'dark' ? 
                            'Light Mode' 
                        :
                            'Dark Mode'
                    }
                </Typography>
            </button>

        </>
    )

}