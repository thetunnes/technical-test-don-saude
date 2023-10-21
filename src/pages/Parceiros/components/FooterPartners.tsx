import { useEffect, useMemo, useState } from "react"
import { usePartnerContext } from "@/context/usePartnerContext"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";


export function FooterPartners() {
  const { partners, onFilterPartners, page, changePage } = usePartnerContext()
  const [amountPartnersInPage, setAmountPartnersInPage] = useState(0)

  const listAmountShow = useMemo(() => {
    if (partners.length < 10) {
      const allLessList = ['1', '2', '4', '6', '8', '10']
      const index = allLessList.findIndex((num) => Number(num) >= partners.length)
      return allLessList.slice(0, index)
    }
    
    if (partners.length) {
      const calc = Math.round(partners.length / 10)

      return Array.from(Array(calc).keys()).map((key) =>  {
        const amount = key * 10
        return amount > 0 ? String(amount) : String(amount + 1)
      })
    }

    return []
  }, [partners])

  useEffect(() => {
    const arr = []
    if (amountPartnersInPage > 0) {
      for (let i = 0; i < partners.length; i += amountPartnersInPage) {
        arr.push(partners.slice(i, i + amountPartnersInPage))
      }

      onFilterPartners(arr)
      changePage(0)
    }
    
    
  }, [amountPartnersInPage])


  return (
    <footer className="flex items-center justify-between px-4 pt-2">
          <div className="font-medium text-xxs text-muted flex items-center gap-1">
            <span>Mostrando</span>
            <Select onValueChange={(v) => setAmountPartnersInPage(Number(v))}>
              <SelectTrigger variant="small" icon="small">
                <SelectValue placeholder={partners.length > 10 ? "10" : "0"} />
              </SelectTrigger>
              <SelectContent className=" ">
                <SelectGroup>
                  {listAmountShow.map((item) => (

                  <SelectItem variant="small" key={item} value={item}>
                    {item}
                  </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
            <span>de <strong className="text-accent">{partners.length}</strong> resultados</span>
          </div>

          {!!partners.length && (
            <div className="flex items-center gap-1">
            <button onClick={() => changePage(page > 0 ? page - 1 : page)} className="text-[0.5rem]"><CaretLeft /></button>
            <span className="text-xxs text-muted">{page + 1}</span>
            <button onClick={() => changePage(page + 1)} className="text-[0.5rem]"><CaretRight /></button>
          </div>
          )}
        </footer>
  )
}