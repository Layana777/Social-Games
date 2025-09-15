import { createContext, use, useContext, useState } from "react";

export const BaraAlSalfaContext = createContext();

export const BaraAlSalfaProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [currntPage, setCurrntPage] = useState("landing");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [outPlayer, setOutPlayer] = useState(0);
  const [showWordGame, setShowWordGame] = useState([]);
  const [showCategory, setShowCategory] = useState("");

  const value = {
    players,
    setPlayers,
    currntPage,
    setCurrntPage,
    selectedTopic,
    setSelectedTopic,
    outPlayer,
    setOutPlayer,
    showWordGame,
    setShowWordGame,
    showCategory,
    setShowCategory,
  };

  return (
    <BaraAlSalfaContext.Provider value={value}>
      {children}
    </BaraAlSalfaContext.Provider>
  );
};

export const useBaraAlSalfa = () => {
  const context = useContext(BaraAlSalfaContext);
  if (!context) {
    throw new Error("useBaraAlSalfa must be used within a BaraAlSalfaProvider");
  }
  return context;
};
