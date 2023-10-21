import { Outlet } from "react-router-dom";



export function LayoutPartner() {

  return (
    <div className="w-full h-full flex flex-col">
      <Outlet />
    </div>
  )
}