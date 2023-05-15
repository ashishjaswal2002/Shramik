import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { LoginModal } from "../components/LoginModal";
import img from '/Logo.png'
import useModalStore from "../store/State";

export const HeaderSection = () => {

 const {isOpen,openModal,closeModal,isLogin,loggedIn,logout }  = useModalStore();




  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
    



      {isOpen && (
        <div className="bg-black w-full h-screen bg-opacity-60 backdrop-blur-md fixed  "></div>
      )}
      <header
        className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  fixed top-0 
   overflow-hidden bg-white z-10 text-black bg-opacity-90 "
      >
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
          <img src={img}  alt='Shramik Logo' className="w-[140px] logo" />
            <div className="sm:hidden">
              <button
            
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-dark"
                aria-controls="navbar-dark"
                aria-label="Toggle navigation"
              >
                <svg
                  width="11"
                  height="10"
                  className=""
                  viewBox="0 0 72 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8769 32.9393L28.4077 50.6963L23.3219 57L0 28.5L23.3219 0L28.4077 6.30374L13.8769 24.0607H72V32.9393H13.8769ZM72 1.86449V10.743H35.6731V1.86449H72ZM72 46.257V55.1355H35.6731V46.257H72Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-dark"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5   h-[50%] sm:h-[2em]">
              <NavLink to="/">Home</NavLink>

              <NavLink
                className=" font-medium "
                
                aria-current="page"
                onClick={ openModal}
              >
                Login
              </NavLink>
              {isOpen && <LoginModal closing={closeModal} userlogedIn={loggedIn} />}

              

              <NavLink
                className=" font-medium "
                to="contact"
                aria-current="page"
              >
                🛂 Help Support
              </NavLink>
              {/* <NavLink>Logout</NavLink> */}
              <div>Change Language</div>
{isLogin &&


              <div className="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-custom-trigger"
                  type="button"
                  className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none  focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <img
                    className="w-8 h-auto rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Maria"
                  />
                  <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                    Maria
                  </span>
                  <svg
                    className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu   transition-[opacity,margin]  duration hs-dropdown-open:opacity-100 opacity-0 hidden  min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                  aria-labelledby="hs-dropdown-custom-trigger"
                >
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                  Profile Settings
                  </a>

                  <NavLink to='categories'
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                  Your Jobs
                  </NavLink>
                 
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#" onClick={logout}
                  >
                 Logout ↪
                  </a>

                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Help
                  </a>
                </div>
              </div>
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
