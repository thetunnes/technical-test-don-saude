import { CaretLeft } from "@phosphor-icons/react";
import { ReactNode, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  title: string;
  children?: ReactNode;
}

export function TopHeader({ children, title }: Props) {
  const { pathname, state } = useLocation()

  const route = useMemo(() => {
    for (const key in state) {
      if (pathname.includes(key)){
        return state[key]
      }
    }
  }, [state])

  return (
    <header className="w-full h-8 flex items-center justify-between mb-3.5">
      <div className="flex items-center gap-1">
        {!!state && <Link to={route}><CaretLeft size={20} /></Link>}
        <h2 className="text-2xl text-gray-800 font-bold">{title}</h2>
      </div>
      {children}
    </header>
  );
}
