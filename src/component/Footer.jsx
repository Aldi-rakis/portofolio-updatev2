import React from 'react'
import rakisMac from "../../src/assets/img/rakis-mac.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <section id="footer" className="bg-[#0b0b0d] dark:bg-[#f6f4e5]   py-20 text-white dark:text-black">
          <div className="max-w-6xl mx-auto px-4 flex flex-col">
            <div className="bg-gradient-to-b from-white/10 to-white/5 dark:bg-gradient-to-b dark:from-yellow/10 dark:to-white/80 rounded-xl p-6 lg:p-10 flex flex-col lg:flex-col items-center lg:items-start justify-between gap-10 text-center lg:text-left border border-white/10 dark:border-black/20">
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 w-full px-2 md:px-6">
                {/* <div className='absolute w-full -bottom-10 h-1.5 bg-white/10'></div> */}
    
                  <div className="w-full lg:w-1/2 justify-center flex">
                    <img
                      className="w-100 lg:absolute -top-39"
                      src={rakisMac}
                      alt=""
                    />
                  </div>
    
                  <div className="w-1/2 flex flex-row gap-10 md:gap-10  md:justify-center items-center text-start md:text-end">
                    <div>
                      <h3 className="font-clash font-semibold text-2xl md:text-3xl mb-4">
                        Professional Links
                      </h3>
                      <ul className="space-y-2 text-2xl font-thin text-white/80 dark:text-black">
                        <li>
                          <a href="#">LinkedIn</a>
                        </li>
                        <li>
                          <a href="#">Behance</a>
                        </li>
                        <li>
                          <a href="#">Dribbble</a>
                        </li>
                        <li>
                          <a href="#">Figma</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-clash font-semibold text-2xl md:text-3xl mb-4">
                        Quick Menu
                      </h3>
                      <ul className="space-y-2 text-2xl font-thin text-white/80 dark:text-black">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/About">About</a>
                        </li>
                       
                        <li>
                          <a href="/Porjects">projects</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
    
                {/* Copyright & Social */}
                <div className=" w-full flex flex-col lg:flex-row justify-between items-center border-t-4 border-white/10 dark:border-black/80 pt-6 text-sm text-white/50 dark:text-black/50 gap-4">
                  <p>© 2025 Aldhi Raqiswandri All Rights Reserved</p>
                  <div className="flex space-x-4 md:space-x-6">
                    <a href="/https://www.instagram.com/aldirakis05/" className="hover:text-white">
                      <FaInstagramSquare className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                    <a href="https://github.com/Aldi-rakis" className="hover:text-white">
                      <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/aldirakis/" className="hover:text-white">
                      <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Footer
