import { useNavigate } from "react-router-dom";
import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { TopHeader } from "./components/TopHeader";
import { InputSearch } from "@/components/InputSearch";
import { ListPartners } from "./components/ListPartners";
import { FooterPartners } from "./components/FooterPartners";

export function Partner() {
  const navigate = useNavigate();
  
  return (
    <>
      <TopHeader title="Parceiros">
        <Button
          size="lg"
          className="flex items-center gap-2"
          onClick={() =>
            navigate("/parceiros/novo", {
              state: {
                parceiros: "/parceiros",
              },
            })
          }
        >
          <PlusCircle size={20} />
          Adicionar parceiro
        </Button>
      </TopHeader>

      <section className="w-full h-[calc(100%-4rem)] rounded-2xl bg-white">
        <div className="pt-3 pb-2 px-4">
          <InputSearch />
        </div>

        <ListPartners />
        
        <FooterPartners />
      </section>
    </>
  );
}
