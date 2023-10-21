import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { PageNotFound } from "./pages/NotFound404";
import { Partner } from "./pages/Parceiros";
import { NewPartner } from "./pages/Parceiros/New";
import { PartnerContextProvider } from "./context/usePartnerContext";
import { LayoutPartner } from "./pages/layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route
          path="parceiros"
          element={
            <PartnerContextProvider>
              <LayoutPartner />
            </PartnerContextProvider>
          }
        >
          <Route path="" element={<Partner />} />
          <Route path="novo" element={<NewPartner />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
