import React from "react";
import { BaraAlSalfaProvider } from "../context";
import BaraAlSalfa from "./mainScreen";

const BaraAlSalfaScreen = () => {
  return (
    <>
      <BaraAlSalfaProvider>
        <BaraAlSalfa />
      </BaraAlSalfaProvider>
    </>
  );
};

export default BaraAlSalfaScreen;
