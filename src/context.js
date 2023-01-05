import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import dummyImages from "./images";

const url = "https://swapi.dev/api/people/";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);

  const fetchPeople = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      const { results } = data;

      if (results) {
        const newPeoples = results.map((item, index) => {
          item.image = dummyImages[index];

          const { image, name } = item;

          return {
            image,
            name,
          };
        });
        setPeoples(newPeoples);
      } else {
        setPeoples([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);
  return (
    <AppContext.Provider value={{ loading, peoples }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
