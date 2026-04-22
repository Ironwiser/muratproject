import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { KontaktPage } from "./pages/KontaktPage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { DatenschutzPage } from "./pages/DatenschutzPage";
import { LeistungPage } from "./pages/LeistungPage";
import { CorporatePage } from "./pages/CorporatePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
          <Route path="ueber-uns" element={<Navigate to="/kurumsal/about" replace />} />
        <Route path="leistung" element={<LeistungPage />} />
        <Route path="leistung/:slug" element={<ServiceDetailPage />} />
        <Route path="kurumsal/:section" element={<CorporatePage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="datenschutz" element={<DatenschutzPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
