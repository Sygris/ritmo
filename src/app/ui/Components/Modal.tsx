import React, { useContext } from "react"
import { ModalContext } from "@/lib/Contexts/ModalContext"
import Icon from "./Icon"
import { IoClose } from "react-icons/io5"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"

export type ModalProps = {
  title: string,
  children: React.ReactNode
}

export default function Modal({ title, children }: ModalProps) {

  const modalState = useContext(ModalContext);

  // Handle modal close via button or context
  const handleClose = () => {
    if (modalState?.UpdateModalState) {
      modalState.UpdateModalState(false);
    }
  };

  // Don't render Modal if isModalOpen is false
  if (!modalState?.isModelOpen) return null;

  return (
    <dialog className="bg-black/50 w-full h-full fixed top-0 left-0 z-[100] flex items-center justify-center">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <button onClick={handleClose} aria-label="Close modal">
            <Icon icon={IoClose} size={20} />
          </button>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </dialog>
  )
}