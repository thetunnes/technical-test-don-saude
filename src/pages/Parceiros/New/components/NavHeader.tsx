import { Button } from "@/components/ui/button";

interface Props {
  stateForm: 1 | 2
}

export function NavHeader({ stateForm }: Props) {
  return (
    <nav className="w-full grid grid-cols-2 border border-background p-1 rounded-full">
      <Button variant="secondary" size="small" disabled={stateForm === 1}>
        <span className="w-3 h-3 bg-primary px-1 py-px text-white text-[0.5rem] rounded-full flex items-center justify-center">
          1
        </span>
        <span className="text-primary">Informações</span>
      </Button>
      <Button variant="outline" size="small" disabled={stateForm === 2}>
        <span className="w-3 h-3 group-disabled:bg-primary px-1 py-px group-disabled:text-white bg-border text-muted-foreground text-[0.5rem] rounded-full flex items-center justify-center">
          1
        </span>
        <span className="group-disabled:text-primary text-muted">
          Endereços
        </span>
      </Button>
    </nav>
  );
}
