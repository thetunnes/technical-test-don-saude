import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";

export function FormPartner() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent className=" ">
          <SelectGroup>
          <SelectLabel>Categoria</SelectLabel>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </form>
  );
}
