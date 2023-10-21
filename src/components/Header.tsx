import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { InputSearch } from "./InputSearch";



export function Header() {
  const navigate = useNavigate()
  return (
    <header className="h-20 bg-white flex items-center px-12">
      <section className="flex items-center max-w-lg gap-4">
      <Button variant="secondary" size="lg" className="flex-1 whitespace-nowrap gap-2" onClick={() => navigate('/atendimento')}>
        <PlusCircle size={20} />
        Novo atendimento 
      </Button>

      <InputSearch />
      </section>
    </header>

  )
}