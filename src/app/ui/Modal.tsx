// 'use client'

import React from "react"
import Icon from "./Icon"
import { IoClose } from "react-icons/io5"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"

export type ModalProps = {
  title: string,
  onClick: () => void,
  children: React.ReactNode
}

export default function Modal({ title, onClick, children }: ModalProps) {
  return (
    <div className="bg-black/50 w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {title}
            </CardTitle>
            <button onClick={onClick} type="button" className="cursor-pointer">
              <Icon icon={IoClose} />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}