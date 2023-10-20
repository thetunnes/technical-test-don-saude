import { createContext, ReactNode, useContext, useState } from "react"

interface Address {
  cep: string
  street: string
  number: string
  district: string
  complement: string
}

interface PartnerProps {
  name: string
  cnpj: string
  email: string
  category: string
  code: string
  preferredUnit: string
  address?: Array<Address>
}

interface PartnerContextProps {
  partners: Array<PartnerProps>
  addPartner: (data: PartnerProps) => void
  removePartner: (partnerId: string) => void
  editPartner: (partnerId: string) => void
  creatingPartner: PartnerProps
}

export const PartnerContext = createContext({} as PartnerContextProps)

interface Props {
  children: ReactNode
}
export function PartnerContextProvider({ children }: Props) {
  const [partners, setPartners] = useState()
  return (
    <PartnerContext.Provider value={{ }}>
      {children}
    </PartnerContext.Provider>
  )
}


export const usePartnerContext = () => useContext(PartnerContext)