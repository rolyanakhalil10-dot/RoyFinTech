import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import MobileNav from "./MobileNav";

export default function Dashboard() {
  return (
    <div className="font-body antialiased flex h-screen overflow-hidden">
      <Sidebar />
      <MainContent />
      <MobileNav /> 
    </div>
  );
}



