import React from "react";
import SideNav from "./_components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex font-mono h-screen md:flex-row md:overflow-hidden">
      <SideNav />
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</main>
    </div>
  )
}