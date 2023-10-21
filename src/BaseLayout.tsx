import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

export function BaseLayout() {
  return (
    <div className="sm:grid grid-cols-layout">
      <Sidebar />

      <div className="w-full h-screen grid grid-rows-[80px_auto]">
        <Header />
        <main className="w-full h-[calc(100vh-5rem)] bg-gray-100 rounded-tl-2xl px-12 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
