import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import Image from "next/image";
import { blottLogo } from "@/assets";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
const Layout = ({ children, className }: ContainerProps) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 px-4 lg:px-0",
    className
  );
  return (
    <div className={newClassName}>
      <div className="flex item-center justify-center">
        <Image src={blottLogo} width={200} height={50} alt="logo" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
