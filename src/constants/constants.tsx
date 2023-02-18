import { MenuItem } from "../types/types";
import { RiListUnordered, RiHome5Line } from "react-icons/ri";

export const menuItems: MenuItem[] = [
    { title: 'Dashboard', url: '/dashboard', icon: <RiHome5Line />},
    { title: 'Categories', url: '/categories', icon: <RiListUnordered />},
];
