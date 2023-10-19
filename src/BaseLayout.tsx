import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

export function BaseLayout() {
  return (
    <div className="grid grid-cols-layout">
      <Sidebar />

      <div>
        <header className="h-20 bg-white"></header>

        <main className="h-[calc(100vh-5rem)] bg-gray-100 rounded-tl-2xl px-12 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
