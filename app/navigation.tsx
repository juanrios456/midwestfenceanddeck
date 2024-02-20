import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, Button, Image, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { FaGripLines } from "react-icons/fa";
import { IconContext } from "react-icons";

export function NavigationMenu() {
  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Gallery',
      href: '/gallery'
    },
    {
      text: 'Contact Us',
      href: '/#footer'
    }
  ];
  const ok= <FaGripLines size="40px" />

        

  return (
    <Navbar isBordered className="sm:grid items-center h-auto">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle/>
      </NavbarContent>


      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Image
            src="/logo.jpg"
            alt="ok"
            width='auto'
            height='auto'
            className="h-[60px]"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 max-w-[600px]" justify="center">
        <NavbarBrand className="pr-10">
          <Image
            src="/logo.jpg"
            alt="ok"
            width='auto'
            height='auto'
            className="h-[70px] p-4"
          />
        </NavbarBrand>

        {
          menuItems.map((item, index)=>(
          <NavbarItem key={index}>
            <Link href={item.href}>
              {item.text}
            </Link>
          </NavbarItem>
          ))
        }
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
