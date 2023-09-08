"use client";

import Head from "next/head";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosMoon } from "react-icons/io";
import { useState } from "react";
import Image from "next/legacy/image";
import deved from "/public/ladywithwirelessheadset.png";
import design from "/public/desgining.png";
import code from "/public/code.png";
import experiness from "/public/experiness.png";
import weather from "/public/weatheringWithYou.png";
import prase from "/public/praseJournal.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Basma Abdulahad Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className="bg-white px-2 dark:bg-gray-900 md:px-10 lg:px-20">
        <div className="flex justify-center">
          <section className="justify-center max-w-7xl dark:max-w-7xl">
            <nav className="py-10 mb-8 max-w-7xl dark:text-white">

                  <IoIosMoon
                    className=" cursor-pointer float-right text-4xl sm:text-2xl xs:text-xl bg-gradient-to-r from-violet-300 text- to-pink-300 text-black dark:text-white px-1 py-1 border-none rounded-md ml-8 "
                    onClick={() => setDarkMode(!darkMode)}
                  />
            </nav>
            <div className="text-center">
              <h2 className="text-5xl py-2 text-violet-500 font-medium dark:text-pink-400 md:text-6xl">
                Basma Abdulahad
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Frontend Developer and UI Designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                I have cultivated a proficiency in Front-End development. My
                fervor lies in crafting aesthetically pleasing designs while
                ensuring their seamless integration into responsive and
                user-centric websites that align with client expectations.
              </p>
            </div>
            <div className="mx-auto bg-gradient-to-r from-violet-300 text- to-pink-300 rounded-full w-80 h-80 relative overflow-hidden mt-10 xs:w-52 xs:h-52 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved"/>
            </div>
            <div className="text-center w-full p-4 py-4 mt-10 ">
              <h3 className="text-3xl py-2 dark:text-white max-w-xl mx-auto md:text-xl lg:text-3xl lg:max-w-xl">
                Work experience
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto lg:text-xl">
                Since the beginning of my creear I design and developer, I've
                done remote work for
                <span className="text-violet-500 font-medium dark:text-pink-400">
                  {" "}
                  CTEK{" "}
                </span>
                consulted for{" "}
                <span className="text-violet-500 font-medium dark:text-pink-400">
                  {" "}
                  SKILL{" "}
                </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto lg:text-xl">
                These are the most languages and tools that I use :
              </p>
            </div>
            <div className="lg:flex gap-4">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-DriedLavender flex-1">
                <Image class="mx-auto" src={code} width={200} height={200} alt="coding"/>
                <h3 className="text-lg font-medium pt-8 pb-2 ">Coding</h3>
                <p className="text-gray-800 py-1">HTML/CSS & JavaScript</p>
                <p className="text-gray-800 py-1">C#, Tailwind CSS</p>
                <p className="text-gray-800 py-1">Python, jQuery</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 mb-12 bg-white dark:bg-DriedLavender flex-1">
                <Image
                  class="mx-auto"
                  src={experiness}
                  width={200}
                  height={200}
                  alt="experiness"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Framework</h3>
                <p className="text-gray-800 py-1">Angular </p>
                <p className="text-gray-800 py-1">.NET</p>
                <p className="text-gray-800 py-1">React.js</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white dark:bg+-*96--DriedLavender flex-1">
                <Image class="mx-auto" src={design} width={200} height={200} alt="Designing"/>
                <h3 className="text-lg font-medium pt-8 pb-2  ">Designing</h3>

                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Blender</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Mockups</h3>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={weather}
                  alt="weather"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100"}
                  layout="responsive"
                  src={prase}
                  alt="prase"
                />
              </div>
            </div>
            <div className="">
              <h3 className="text-l py-2 dark:text-white md:text-xl xs:text-sm">
                This page was made with Next.js, React.js and Tailwind CSS.
              </h3>
              <h3 className="text-l py-2 dark:text-white md:text-xl xs:text-sm">
              All copyright reserved by Basma Abdulahad.
              </h3>
            </div>
            <footer className="py-4 dark:text-white">
               <ul className="flex">
                <li>
                  <a
                    className="text-3xl flex justify-center sm:text-2xl xs:text-xl bg-gradient-to-r from-violet-300 text- to-pink-300 text-white dark:text-black px-1 py-1 border-none rounded-md ml-2"
                    href="https://www.linkedin.com/in/basma-abdulahad/"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="text-3xl flex justify-center sm:text-2xl xs:text-xl bg-gradient-to-r from-violet-300 text- to-pink-300 text-white dark:text-black px-1 py-1 border-none rounded-md ml-4"
                    href="https://www.instagram.com/8ui12ux/"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );

}
