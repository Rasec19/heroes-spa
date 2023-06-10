import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { MarvelPages, DcPage, SearchPage, HeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />}></Route>
          <Route path="dc" element={<DcPage />}></Route>

          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>

          <Route path="/" element={<Navigate to={"/marvel"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
