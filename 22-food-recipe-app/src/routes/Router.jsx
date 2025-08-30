import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import DetailsPage from "../pages/DetailsPage";
import Navbar from "../components/Navbar";

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipe-item/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}
