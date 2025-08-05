import React, { createContext, useState } from "react"

type ModalContextType = {
  isModelOpen: boolean,
  UpdateModalState: (newState: boolean) => void
}

export const ModalContext = createContext<ModalContextType | null>(null);


const ModalProvider = ({ children }: { children: React.ReactNode }) => {

  const [isModelOpen, setIsModelOpen] = useState(false);

  const UpdateModalState = (newState: boolean) => {
    setIsModelOpen(newState);
  }

  return (
    <ModalContext.Provider value={{ isModelOpen, UpdateModalState }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider