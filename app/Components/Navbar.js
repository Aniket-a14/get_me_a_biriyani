"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <nav className=" text-gray-300 p-4">
        <div className="container backdrop-blur-sm bg-[rgba(255,255,255,.35)] p-3 rounded-full mx-auto flex justify-between items-center">
          <Link href="/" className="ml-3 font-semibold text-white">
            MyWebsite
          </Link>

          <ul className="flex gap-4 mr-3">
            <li>
              <Link href="/" className="text-white font-semibold hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/about" className="text-white font-semibold hover:text-blue-400 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/dashboard/contact" className="text-white font-semibold hover:text-blue-400">
                Contact
              </Link>
            </li>
            {session ? (
              <li>
                
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex relative bottom-0.5 text-white text-center"><img src="/user.svg" alt="" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem><Link href="/dashboard">Dashboard</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link href={`/${session.user.name}`}>Profile</Link></DropdownMenuItem>
                      <DropdownMenuItem>Services</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                
              </li>
            ) : (
              <li>
                <Link href="/login" className="text-white font-semibold hover:text-blue-400">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
