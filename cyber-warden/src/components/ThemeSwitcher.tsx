'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


export default function ThemeSwitcher() 
{
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null

    console.log(theme)

    return (

        <button
            aria-label="Toggle Light Mode"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}    
        >
            {
                theme === 'dark' ? 
                    <LightModeOutlinedIcon className="text-white" /> 
                :
                    <DarkModeOutlinedIcon className="text-black" />
            }
        </button>

    )

}