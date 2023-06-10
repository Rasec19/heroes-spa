import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { LoginPage } from "../auth/pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login" element={<LoginPage />}></Route>
        
        <Route path="/*" element={<HeroesRoutes />}></Route>

      </Routes>
    </>
  );
};
