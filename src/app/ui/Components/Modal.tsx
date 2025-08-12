'use client'
import React, { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    if (modalState?.UpdateModalState) {
      modalState.UpdateModalState(false);
    }
  };

  if (!modalState?.isModelOpen || !isMounted) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-[1000] bg-black/50 grid place-items-center"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <Card className="w-full max-w-md p-4">
        <div onClick={(e) => e.stopPropagation()}>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <button onClick={handleClose} aria-label="Close modal">
              <Icon icon={IoClose} size={20} />
            </button>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </div>
      </Card>
    </div>
  );

  return createPortal(overlay, document.body);
}