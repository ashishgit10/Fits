import React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import flag from '../assets/flag.jpg'
import emblem from '../assets/emblem.jpg'
import { FaGlobe, FaBell, FaUser } from 'react-icons/fa';
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg?w=768',
}
const navigation = [
    { name: 'Home Page', href: '/', current: true },
    { name: 'About Us', href: '#', current: false },
    { name: 'Departments', href: '#', current: false },
    { name: 'Zone', href: '#', current: false },
    { name: 'Downloads', href: '#', current: false },
    { name: 'Tenders', href: '#', current: false },
]



const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Header = () => {
    return (
        <>
           <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Government Logo" 
              className="h-12 w-12 transition-transform hover:scale-105"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Government Portal</h1>
              <p className="text-sm text-gray-500">Delhi Administration</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              className="bg-transparent text-gray-600 hover:text-gray-900 text-sm font-medium">
              Screen Reader Access
            </button>

            <div className="relative">
              <button 
                className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 focus:outline-none">
                <FaBell className="h-4 w-4 text-gray-600" />
              </button>
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-48">
                <div className="p-2 text-sm text-gray-700">No new notifications</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 border rounded-md px-3 py-1.5 bg-gray-50">
              <FaGlobe className="h-4 w-4 text-gray-500" />
              <select 
                className="bg-transparent border-none text-sm focus:outline-none">
                <option>English</option>
                <option>हिंदी</option>
              </select>
            </div>

            <button 
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 focus:outline-none">
              <FaUser className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>

            <div>
                <div className="min-h-full">
                    <Disclosure as="nav" className="bg-gray-800">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium',
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon aria-hidden="true" className="size-6" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                                                </MenuButton>
                                            </div>
                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                {userNavigation.map((item) => (
                                                    <MenuItem key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </MenuItem>
                                                ))}
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="shrink-0">
                                        <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base/5 font-medium text-white">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <DisclosureButton
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </DisclosureButton>
                                    ))}
                                </div>
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </>
    );
};

export default Header;

