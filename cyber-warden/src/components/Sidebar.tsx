'use client';

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";

import type { CardProps } from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  NewspaperIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ProfileMenu } from './ProfileMenu'; 
import ThemeSwitcher from "./ThemeSwitcher";
import { DialogCustomAnimation } from "./Dialoge";

export function SidebarWithLogo() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const [tableOpen, setTableOpen] = React.useState(false);
  const handleTableOpen = () => setTableOpen(!tableOpen);
 
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card variant="gradient" className="rounded-none h-screen w-7/8 max-w-[20rem] shadow-2xl bg-gradient-to-t from-blue-100 via-blue-200 to-blue-100 shadow-black dark:shadow-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/assets/logo.png" alt="brand" className="h-14 w-14" /> 
        <Typography variant="h5" color="blue-gray" className="text-black dark:text-gray-200">
          Cyber Warden
        </Typography>
      </div>
      <List>
        <button className="py-2 px-4 rounded-md hover:bg-blue-300 hover:dark:bg-purple-900 w-full text-left">
        <div className="flex items-center">
          <PresentationChartBarIcon className="h-5 w-5 text-blue-800 dark:text-gray-400" />
          <span className="ml-2 font-normal text-black dark:text-gray-200">
              Dashboard
         </span>
        </div>
        </button>

        <button className="py-2 px-4 rounded-md hover:bg-blue-300 hover:dark:bg-purple-900 w-full text-left">
        <div className="flex items-center">
          <NewspaperIcon className="h-5 w-5 text-blue-800 dark:text-gray-400" />
          <span className="ml-2 font-normal text-black dark:text-gray-200">
            Server Logs
          </span>
       </div>
        </button>
      </List>
      
      <List className="flex justify-end h-full mb-6">
        <ListItem className='text-black hover:bg-blue-300 dark:text-gray-200 hover:dark:bg-purple-900'>
          <ThemeSwitcher />
        </ListItem>
        <ListItem className='text-black hover:bg-blue-300 dark:text-gray-200 hover:dark:bg-purple-900'>
          <ListItemPrefix>
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-900 dark:text-red-700" />
          </ListItemPrefix>
          Alerts
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="red" className="rounded-full text-orange-900 dark:text-red-400" />
          </ListItemSuffix>
        </ListItem>
        {/* <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem> */}
        <ProfileMenu />
        {/* <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <Link href='/login'>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link> */}
      </List>
      <Alert open={openAlert} className="mt-auto w-56 m-6" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Welcome to Cyber Warden !
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          The capabilities of this platform are at you fingertips...
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            I'm Excited
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}