import { Button } from "@/components/ui/button";

interface Props {
  stateForm: 1 | 2
}

export function NavHeader({ stateForm }: Props) {
  return (
    <nav className="w-full grid grid-cols-2 border border-background p-1 rounded-full">
      <Button variant={stateForm !== 2 ? "secondary" : "outline"} size="small" data-state={stateForm} disabled={true}>
      <span className="w-3 h-3 group-data-[state='1']:bg-primary px-1 py-px group-data-[state='1']:text-white bg-border text-muted-foreground text-[0.5rem] rounded-full flex items-center justify-center">
          1
        </span>
        <span className="group-data-[state='1']:text-primary text-muted">Informações</span>
      </Button>
      <Button variant={stateForm === 2 ? "secondary" : "outline"} size="small" data-state={stateForm} disabled={true}>
        <span className="w-3 h-3 group-data-[state='2']:bg-primary px-1 py-px group-data-[state='2']:text-white bg-border text-muted-foreground text-[0.5rem] rounded-full flex items-center justify-center">
          1
        </span>
        <span className="group-data-[state='2']:text-primary text-muted">
          Endereços
        </span>
      </Button>
    </nav>
  );
}
