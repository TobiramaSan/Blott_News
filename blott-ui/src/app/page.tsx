"use client";
import { motion, easeOut } from "framer-motion";
import { blottLogo, ovalLight } from "@/assets";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image
        src={ovalLight}
        alt=""
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100vh",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />

      <motion.main
        className="z-1000 flex flex-col items-start justify-center h-full w-[90%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:w-[75%]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-full flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 xl:w-[62%]"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.125rem] font-normal font-poppins leading-[100%] tracking-[1.4px] text-white">
            Blott Studio
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] md:text-nowrap leading-[100%] md:leading-[120px] lg:leading-[150px] font-bold tracking-[1.4px] text-white">
            Web Assessment
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#828282] font-semibold leading-[100%] tracking-[1.4px]">
            Finance Digest
          </h3>
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center md:flex-row md:justify-between mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-[200px] xl:w-[85%]"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 md:mb-0">
            <Image
              src={blottLogo}
              alt="Blott Ltd Logo"
              width={150}
              height={36}
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 200px, 235px"
              className="w-[150px] h-[36px] sm:w-[180px] sm:h-[43px] md:w-[200px] md:h-[48px] lg:w-[235px] lg:h-[56px]"
            />
            <div className="flex flex-col gap-0 text-center sm:text-left">
              <h1 className="text-white text-sm sm:text-base font-bold">
                Blott.io Ltd
              </h1>
              <p className="text-white text-sm sm:text-base font-normal">
                ⓒ2020 Blott.io Ltd, All right reserved
              </p>
            </div>
          </div>

          <Button
            href="/news"
            width="full sm:w-auto md:w-[200px] lg:w-[250px] xl:w-[328px]"
            height="14 sm:h-16 md:h-[60px] lg:h-[70px] xl:h-[85px]"
            overrideStyles="
              text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px]
              px-6 sm:px-8 md:px-12 lg:px-[80px] xl:px-[100px]
              rounded-full md:rounded-[500px] text-nowrap
            "
          >
            Click Me!
          </Button>
        </motion.div>
      </motion.main>
    </div>
  );
}
