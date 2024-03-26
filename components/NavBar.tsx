// app/page.tsx
"use client";

// import aws-amplify css styles for react
import "@aws-amplify/ui-react/styles.css";

// import signOut from aws-amplify/auth
import { signOut } from "aws-amplify/auth";

// import Fragment from react
import { Fragment } from "react";

// import Disclosure, Menu, Transition from @headlessui/react
import { Disclosure, Menu, Transition } from "@headlessui/react";

// import Bars3Icon, UserCircleIcon, XMarkIcon from @heroicons/react/24/outline
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [{ name: "Home", href: "#", current: true }];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    //style={{width:20px;height:20px;color:var(--amplify-colors-primary-60)}}

                    className="h-8 w-auto fill-white"
                    viewBox="0 0 24 22"
                    aria-hidden="true"
                  >
                    <path d="M14.3128 20.0394C14.3651 20.1298 14.4618 20.1855 14.5664 20.1855H16.8444C17.0698 20.1855 17.2107 19.942 17.098 19.7472L8.82308 5.44278C8.71037 5.24795 8.4286 5.24795 8.31589 5.44278L7.09981 7.54494C7.09518 7.55294 7.09518 7.56281 7.09981 7.57081L7.10128 7.57334C7.1106 7.58946 7.09894 7.60961 7.08029 7.60961C7.07163 7.60961 7.06363 7.61422 7.0593 7.62171L0.0396396 19.7616C-0.0730193 19.9565 0.0678714 20.2 0.293265 20.2H10.9633C11.1887 20.2 11.3296 19.9564 11.2169 19.7616L10.1254 17.8749C10.0731 17.7845 9.97646 17.7288 9.87184 17.7288H4.4145C4.3018 17.7288 4.23135 17.607 4.28771 17.5096L8.4417 10.3288C8.49805 10.2314 8.63894 10.2314 8.6953 10.3288L14.3128 20.0394Z"></path>
                    <path d="M10.1282 2.30989C10.0759 2.40032 10.0759 2.51172 10.1282 2.60214L20.2155 20.0394C20.2678 20.1298 20.3645 20.1855 20.4691 20.1855H22.7412C22.9666 20.1855 23.1075 19.942 22.9948 19.7472L11.7715 0.346077C11.6588 0.151242 11.377 0.151243 11.2643 0.346077L10.1282 2.30989Z"></path>
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={async () => {
                              try {
                                await signOut();
                              } catch (error) {
                                console.log("error signing out: ", error);
                              }
                            }}
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
