'use client'
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import AddNewHabitModal from "../ui/AddNewHabitModal";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [isModelOpen, setIsModalOpen] = useState(false);

  const handleAddHabit = () => {
    setIsModalOpen(!isModelOpen);
  }

  return (
    <div>
      <Header onAddHabit={handleAddHabit}/>
      {isModelOpen && (
        <AddNewHabitModal onClick={handleAddHabit} />
      )}
      <div className="flex h-[calc(100vh-72px)] overflow-auto md:flex-row md:overflow-hidden">
        <SideNav />
        <main className="flex-grow bg-stone-50 md:overflow-y-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  )
}