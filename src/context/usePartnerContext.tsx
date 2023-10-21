import { createContext, ReactNode, useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
interface Address {
  cep: string
  street: string
  number: string
  district: string
  complement: string
}

interface InsertPartnerProps {
  name: string
  cnpj: string
  email: string
  category: string
  financialResponsible: string
  clinicalResponsible: string
  address?: Array<Address>
}

export interface PartnerProps {
  id: string
  name: string
  cnpj: string
  email: string
  category: string
  financialResponsible: string
  clinicalResponsible: string
  address?: Array<Address>
}

interface PartnerContextProps {
  partners: Array<InsertPartnerProps>
  addPartner: (data: InsertPartnerProps) => void
  removePartner: (partnerId: string) => void
  editPartner: (partnerId: string, data: InsertPartnerProps) => void
  // creatingPartner: InsertPartnerProps
  filteredPartners: unknown[]
  onFilterPartners: (data: unknown) => void
  page: number
  changePage: (page: number) => void
}

export const PartnerContext = createContext({} as PartnerContextProps)

interface Props {
  children: ReactNode
}
export function PartnerContextProvider({ children }: Props) {
  const [partners, setPartners] = useState<PartnerProps[]>([])
  const [filteredPartners, setFilteredPartners] = useState<unknown[]>([])
  const [page, setPage] = useState(0)

  function changePage(page: number) {
    if (page < filteredPartners.length) {
      setPage(page)
    }

  }
  function addPartner(data: InsertPartnerProps) {
    const partnerId = uuidV4();
    setPartners((prev) => {
      prev.push({
        id: partnerId,
        ...data
      }); return prev
    })
  }

  function removePartner(partnerId: string) {

    setPartners(prev => prev.filter(partner => partner.id === partnerId))
  }

  function editPartner(partnerId: string, newData: InsertPartnerProps) {
    const indexPartner = partners.findIndex((partner) => partner.id === partnerId)

    if (indexPartner < 0) {
      return Error('Não foi possível encontrar o parceiro na lista')
    }

    setPartners((prev) => {
      prev[indexPartner] = {
        id: partnerId,
        ...newData
      }

      return prev
    })
  }


  function onFilterPartners(data: unknown) {
    if (Array.isArray(data)) {
      setFilteredPartners(data)
    }
  }

  return (
    <PartnerContext.Provider value={{ partners, addPartner, removePartner, editPartner, filteredPartners, onFilterPartners, page, changePage }}>
      {children}
    </PartnerContext.Provider>
  )
}


export const usePartnerContext = () => useContext(PartnerContext)