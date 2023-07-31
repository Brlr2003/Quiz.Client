import React, { createContext, useState, useContext } from "react";

type ScoreContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const ScoreContext = createContext<ScoreContextType>({
  score: 0,
  setScore: () => {},
});

export function useScoreContext() {
  return useContext(ScoreContext);
}

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
