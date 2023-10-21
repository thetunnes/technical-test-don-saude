import { NavLink } from "react-router-dom";
import Logo from "@/assets/don-saude-logo.svg";
import Icon from "@/assets/icon.svg";
import {
  ChartPie,
  CurrencyDollar,
  GearSix,
  IdentificationBadge,
  User,
  UsersFour,
} from "@phosphor-icons/react";
import { useState } from "react";

const menus = [
  {
    title: "Indicadores",
    icon: <ChartPie size={20} />,
    url: "/",
  },
  {
    title: "Atendimento",
    icon: <IdentificationBadge size={20} />,
    url: "/atendimento",
  },
  {
    title: "Financeiro",
    icon: <CurrencyDollar size={20} />,
    url: "/financeiro",
  },
  {
    title: "Parceiros",
    icon: <UsersFour size={20} />,
    url: "/parceiros",
  },
  {
    title: "Usuários",
    icon: <User size={20} />,
    url: "/usuarios",
  },
  {
    title: "Configurações",
    icon: <GearSix size={20} />,
    url: "/configuracoes",
    subItems: [],
  },
];

export function Sidebar() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
  return (
    <div
      id="sidebar"
      data-menu={!isOpenMenuMobile}
      className="fixed data-[menu='true']:translate-x-0 -translate-x-full sm:relative min-w-max bg-white min-h-screen flex flex-col gap-4 items-center justify-between p-6"
    >
      <img
        src={Logo}
        alt="Don Saúde, don em negrito, saúde com fonte thin e icone rosa a cima de saúde"
        onClick={() => setIsOpenMenuMobile(prev => !prev)}
      />

      <nav className="flex-1 flex flex-col gap-4 justify-start mt-10">
        {menus.map((menu) => (
          <NavLink
            to={menu.url}
            key={menu.title}
            className={({ isActive }) =>
              `bg-transparent rounded-2xl px-4 py-2 text-gray-700 flex items-center gap-3 text-xs transition-all ${
                isActive && `!bg-pink-500 text-white `
              }`
            }
          >
            {menu.icon}
            {menu.title}
          </NavLink>
        ))}
      </nav>

      <button className="w-full rounded-full flex bg-destructive gap-2 p-1">
        <img src={Icon} alt="Círculo rosa com uma cruz preenchida de branco ao centro" />
        <div className="flex-1 flex flex-col items-start justify-between text-accent-foreground">
        <strong className="text-xsmall">Ibiporã</strong>
        <p className="text-[0.5rem]">Cauê Pani</p>
        </div>
      </button>
    </div>
  );
}
