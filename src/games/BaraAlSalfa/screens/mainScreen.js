import React from "react";
import { useBaraAlSalfa } from "../context";
import Landing from "./Landing";
import Players from "./Players";
import FindTopic from "./FindTopic";

const BaraAlSalfa = () => {
  const { currntPage } = useBaraAlSalfa();

  if (currntPage === "landing") {
    return <Landing />;
  }

  if (currntPage === "Players") {
    return <Players />;
  }

  if (currntPage === "FindTopic") {
    return <FindTopic />;
  }

  return null;
};

export default BaraAlSalfa;
