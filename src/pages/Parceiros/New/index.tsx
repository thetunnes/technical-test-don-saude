import { useState } from "react";
import { TopHeader } from "../components/TopHeader";
import { NavHeader } from "./components/NavHeader";
import { FormPartner } from "./components/FormPartner";

export function NewPartner() {
  const [stateForm, setStateForm] = useState<1 | 2>(1);
  return (
    <div className="w-full max-h-full h-max flex flex-col overflow-hidden">
      <TopHeader title="Novo parceiro" />
      <section className="w-full h-[calc(100%-5rem)] overflow-auto flex flex-col gap-7 p-6 rounded-2xl bg-white">
        <NavHeader stateForm={stateForm} />

        <FormPartner nextStep={() => setStateForm(2)} />
      </section>
    </div>
  );
}
