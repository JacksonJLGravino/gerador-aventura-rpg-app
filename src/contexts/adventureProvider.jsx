import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const AdventureContext = createContext();

export default function AdventureProvider({ children }) {
  const [adventures, setAdventures] = useState([]);

  const findAdventures = async () => {
    const result = await AsyncStorage.getItem("adventures");
    if (result !== null) setAdventures(JSON.parse(result));
  };

  useEffect(() => {
    findAdventures();
  }, []);

  return (
    <AdventureContext.Provider
      value={{ adventures, setAdventures, findAdventures }}>
      {children}
    </AdventureContext.Provider>
  );
}

export const useAdventures = () => useContext(AdventureContext);
