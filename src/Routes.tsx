import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { PageNotFound } from "./pages/NotFound404";
import { Parceiros } from "./pages/Parceiros";



export function Router() {

  return (
    <Routes>

      <Route path="/" element={<BaseLayout />}>
        <Route path="parceiros" element={<Parceiros />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}