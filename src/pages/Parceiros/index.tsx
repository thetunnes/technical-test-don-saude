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
import { TBody, TData, THead, THeading, TRow, Table } from "@/components/Table";

export function Partner() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col">
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

        <div className="w-full h-[calc(100%-6rem)] overflow-auto">
          <Table>
            <THead>
              <TRow>
                <THeading className="px-4 py-3">
                  <div className="flex items-center text-xxs text-muted font-medium gap-0.5 ">
                    Organização <CaretDown />
                  </div>
                </THeading>
                <THeading>
                  <div className="flex items-center gap-0.5">
                    Nome <CaretDown />
                  </div>
                </THeading>
                <THeading>Telefones</THeading>
                <THeading>Código</THeading>
                <THeading>Unidade preferida</THeading>
                <THeading className="px-4 py-3">Ações</THeading>
              </TRow>
            </THead>
            <TBody>
              <TRow>
                <TData className="pl-4 py-3">XXXXXXXX</TData>
                <TData>
                  <div className="flex flex-col gap-0.5">
                    <strong>Username Name</strong>
                    <span>XXX.XXX.XXX-XX</span>
                  </div>
                </TData>
                <TData>(XX) X XXXX-XXXX</TData>
                <TData>XXXXXXXX</TData>
                <TData>Partner Name</TData>
                <TData className="px-4">
                  <div className="flex items-center justify-center">
                    <CircleDashed size={12} />
                    <CircleDashed size={12} />
                    <CircleDashed size={12} />
                  </div>
                </TData>
              </TRow>
            </TBody>
          </Table>

          {/* {Array.from(Array(12).keys()).map((item) => ( */}
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
                  <SelectItem variant="small" value="10">
                    10
                  </SelectItem>
                  <SelectItem variant="small" value="20">
                    20
                  </SelectItem>
                  <SelectItem variant="small" value="30">
                    30
                  </SelectItem>
                  <SelectItem variant="small" value="40">
                    40
                  </SelectItem>
                  <SelectItem variant="small" value="50">
                    50
                  </SelectItem>
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
