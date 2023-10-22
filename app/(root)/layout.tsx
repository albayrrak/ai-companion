import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};
const RooutLayout = (props: RootLayoutProps) => {
  return (
    <div className="h-full">
        <Navbar />
      <main className="md:pl-20 pt-16 h-full">{props.children}</main>
    </div>
  );
};

export default RooutLayout;
