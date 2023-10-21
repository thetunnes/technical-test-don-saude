import { TBody, TData, THead, THeading, TRow, Table } from "@/components/Table";
import { PartnerProps, usePartnerContext } from "@/context/usePartnerContext";
import { CaretDown, CircleDashed, Placeholder } from "@phosphor-icons/react";
import { useMemo } from "react";

export function ListPartners() {
  const { partners, filteredPartners, page } = usePartnerContext();


  const list = useMemo(() => {
    if (filteredPartners && page >= 0) {
      return filteredPartners[page] as PartnerProps[]
    }
    return []
  }, [page, filteredPartners])
  return (
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
          {filteredPartners.length ? (
            list.map((partner) => (
              <TRow>
                <TData className="pl-4 py-3">{partner.category}</TData>
                <TData>
                  <div className="flex flex-col gap-0.5">
                    <strong>{partner.name}</strong>
                    <span>{partner.cnpj}</span>
                  </div>
                </TData>
                <TData>{partner.email}</TData>
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
            ))
          ) : partners.length ? (
            partners.map((partner) => (
              <TRow>
                <TData className="pl-4 py-3">{partner.category}</TData>
                <TData>
                  <div className="flex flex-col gap-0.5">
                    <strong>{partner.name}</strong>
                    <span>{partner.cnpj}</span>
                  </div>
                </TData>
                <TData>{partner.email}</TData>
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
            ))
          ) : (
            <TRow>
              <TData className="px-4 py-3  text-center text-muted" colSpan={6}>
                <div className="flex items-center flex-col gap-1 justify-center">
                  <Placeholder size={20} />
                  Oh que pena, não foi possível encontrar parceiros cadastrados
                </div>
              </TData>
            </TRow>
          )}
        </TBody>
      </Table>
    </div>
  );
}
