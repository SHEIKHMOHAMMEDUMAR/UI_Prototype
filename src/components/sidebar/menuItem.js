import {
    Dashboard,
    LabelImportant,
    Settings,
    Speed,
    Widgets
  } from "@mui/icons-material";
  
export const menuItems = [
    { name: "Dashboard", icon: Dashboard, link: "/dashboard"},
    { name: "Transactions", icon: LabelImportant, link: "/transactions"},
    { name: "Entites", icon: Widgets, link: "/entites"},
    { name: "Health", icon: Speed, link: "/health"},
    { name: "Settigs", icon: Settings, link: "/settings"},
];
