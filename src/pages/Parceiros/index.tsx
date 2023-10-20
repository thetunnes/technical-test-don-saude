import { Button } from "@/components/ui/button";
import { TopHeader } from "./components/TopHeader";
import { CaretDown, CircleDashed, PlusCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputSearch } from "@/components/InputSearch";

export function Partner() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col">
      <TopHeader title="Parceiros">
        <Button
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

        <div className="w-full h-[calc(100%-6rem)] overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="whitespace-nowrap border-y border-border">
                <th className="w-6">
                  <div className="flex items-center text-xxs text-muted font-medium gap-0.5 px-4 py-3">
                    Organização <CaretDown />
                  </div>
                </th>
                <th>
                  <div className="flex items-center text-xxs text-muted font-medium gap-0.5 px-4 py-3">
                    Nome <CaretDown />
                  </div>
                </th>
                <th className="text-xxs text-muted font-medium text-start">
                  Telefones
                </th>
                <th className="text-xxs text-muted font-medium text-start">
                  Código antigo
                </th>
                <th className="text-xxs text-muted font-medium text-start">
                  Unidade preferida
                </th>
                <th className="w-[3.5rem] text-xxs text-muted font-medium text-start">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(12).keys()).map((item) => (
                <tr className="whitespace-nowrap border-y border-border" key={item}>
                  <td className="text-xxs text-accent pl-4 py-3 font-medium">
                    XXXXXXX
                  </td>
                  <td className="text-xxs px-4 text-accent font-medium">
                    Username Name
                  </td>
                  <td className="text-xxs text-accent font-medium">
                    (XX) X XXXX-XXXX
                  </td>
                  <td className="text-xxs text-accent font-medium">XXXXXXX</td>
                  <td className="text-xxs text-accent font-medium">
                    Partner Name
                  </td>
                  <td className="w-max text-xxs text-accent pr-4 font-medium">
                    <div className="w-max flex items-center justify-center gap-3 text-muted-foreground">
                      <CircleDashed size={12} />
                      <CircleDashed size={12} />
                      <CircleDashed size={12} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="px-4 pt-2">
          <label className="font-medium text-xxs text-muted flex items-center gap-1">
            Mostrando{" "}
            <Select>
              <SelectTrigger variant="small" icon="small">
                <SelectValue defaultValue="10" placeholder="10" />
              </SelectTrigger>
              <SelectContent className=" ">
                <SelectGroup>
                  <SelectItem variant="small" value="10">10</SelectItem>
                  <SelectItem variant="small" value="20">20</SelectItem>
                  <SelectItem variant="small" value="30">30</SelectItem>
                  <SelectItem variant="small" value="40">40</SelectItem>
                  <SelectItem variant="small" value="50">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
            de <strong className="text-accent">400</strong> resultados
          </label>
        </footer>
      </section>
    </div>
  );
}
