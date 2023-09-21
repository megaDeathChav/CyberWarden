"use client";

import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Typography, SvgIconProps } from "@mui/material";
import Link from "next/link";

// Define a type for the props the SidebarItem component will accept
interface SidebarItemProps {
  title: string;
  to: string;
  icon: React.ReactElement<SvgIconProps>;
  selected: { currentPage: string };
  color: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, to, icon, selected, color }) => {
  return (
    <MenuItem
      active={selected.currentPage === title}
      style={{
        color: color, // removed the curly braces around color
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to}> {/* Changed to 'href' from 'to' */}
        <a>{title}</a> {/* Adding anchor tag */}
      </Link>
    </MenuItem>
  );
};

export default SidebarItem;
