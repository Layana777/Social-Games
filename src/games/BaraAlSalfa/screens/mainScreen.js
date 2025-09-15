import React from "react";
import { useBaraAlSalfa } from "../context";
import Landing from "./Landing";
import Players from "./Players";
import FindTopic from "./FindTopic";
import Game from "./game";
import InitGame from "./InitGame";
import GamePlay from "./GamePlay";

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

  if (currntPage === "Game") {
    return <Game />;
  }

  if (currntPage === "InitGame") {
    return <InitGame />;
  }

  if (currntPage === "GamePlay") {
    return <GamePlay />;
  }

  return null;
};

export default BaraAlSalfa;
