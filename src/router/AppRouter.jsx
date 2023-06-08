import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPages, DcPage } from "../heroes/pages";
import { LoginPage } from "../auth/pages";
import { Navbar } from "../ui/components";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPages />}></Route>
        <Route path="dc" element={<DcPage />}></Route>

        <Route path="login" element={<LoginPage />}></Route>

        <Route path="/" element={<Navigate to={"/marvel"} />}></Route>
      </Routes>
    </>
  );
};
