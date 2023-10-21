import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePartnerContext } from "@/context/usePartnerContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const partnerSchema = z.object({
  category: z.string(),
  cnpj: z.string(),
  name: z.string().min(4, 'Um nome deve conter pelo menos 4 letras'),
  email: z.string().email('Um e-mail válido deve ser inserido'),
  financialResponsible: z.string(),
  clinicalResponsible: z.string(),
});

type IPartner = z.infer<typeof partnerSchema>;

interface Props {
  nextStep: () => void;
}

export function FormPartner({ nextStep }: Props) {
  const navigate = useNavigate()
  const form = useForm<IPartner>({
    resolver: zodResolver(partnerSchema),
  });

  const { addPartner } = usePartnerContext()

  function onSubmit(data: IPartner) {
    console.log(data);
    addPartner(data)
    nextStep();
  }

  function cancelChangePartner() {
    navigate("/parceiros")
  }

  return (
    <Form {...form}>
      <form
        id="newPartner"
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 overflow-auto"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                Categoria
              </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="cnpj"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                CNPJ
              </FormLabel>
              <Input placeholder="Digite o CNPJ" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                Nome completo
              </FormLabel>
              <Input placeholder="Digite o nome completo" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                E-mail
              </FormLabel>
              <Input placeholder="Digite o seu melhor e-mail" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="clinicalResponsible"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                Responsável Clínico
              </FormLabel>
              <Input placeholder="Digite o nome completo" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="financialResponsible"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="font-medium text-sm text-muted-foreground">
                Responsável Financeiro
              </FormLabel>
              <Input placeholder="Digite o nome completo" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>

      <footer className="w-full max-w-[500px] flex gap-3 self-end">
        <Button variant="outline" size="lg" className="flex-1" onClick={() => cancelChangePartner()}>
          Cancelar
        </Button>
        <Button size="lg" className="flex-1" type="submit" form="newPartner">
          Próxima
        </Button>
      </footer>
    </Form>
  );
}
