import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { PageNotFound } from "./pages/NotFound404";
import { Partner } from "./pages/Parceiros";
import { NewPartner } from "./pages/Parceiros/New";



export function Router() {

  return (
    <Routes>

      <Route path="/" element={<BaseLayout />}>
        <Route path="parceiros" element={<Partner />} />
        <Route path="parceiros/novo" element={<NewPartner />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}