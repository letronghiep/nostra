"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaCartPlus, FaSearch, FaTimes, FaUser } from "react-icons/fa";
function Header() {
  const avatar_user = "/avatar.jpg";
  return (
    <>
      <div className="py-2 bg-gray-900 text-white text-sm flex items-center justify-center relative">
        <div className="flex items-center gap-x-1.5 justify-center">
          <h4 className="">
            Sign up and <span className="font-bold">GET 20% OFF</span> for your
            first order
          </h4>
          <Link className="underline" href="#">
            Sign up now
          </Link>
        </div>
        <span className="absolute right-3 lg:right-28 text-base">
          <FaTimes />
        </span>
      </div>
      <div className="bg-base-100">
        <div className="md:navbar lg:max-w-7xl mx-auto flex items-center justify-between px-6 md:px-4 lg:my-6 my-2 md:my-4">
          <Link href="/" className="">
            <Image
              className="object-cover"
              src="/FASCO.png"
              width={120}
              height={52}
              alt="Logo"
            />
          </Link>
          <div className="relative">
            <ul className="menu md:menu-horizontal px-1 top-full z-[1] font-semibold right-24 w-52 md:w-auto absolute md:relative">
              <li className="">
                <details className="dropdown dropdown-bottom">
                  <summary tabIndex={0}>Shop</summary>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 static"
                  >
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/most-wanted">Most wanted</Link>
              </li>
              <li>
                <Link href="/new-arrival">New Arrival</Link>
              </li>
              <li>
                <Link href="/brands">Brands</Link>
              </li>
              <div className="border flex items-center gap-x-2 py-2 px-4 rounded-md w-auto lg:w-auto">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none w-full"
                />
              </div>
            </ul>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full flex items-center justify-center">
                  {avatar_user ? (
                    <Image
                      src={avatar_user}
                      width={10}
                      height={10}
                      alt="avatar"
                      objectFit="contain"
                    />
                  ) : (
                    <Image
                      src="/noavatar.jpg"
                      width={20}
                      height={20}
                      alt="no-avatar"
                      objectFit="contain"
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
