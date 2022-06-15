import React, { createContext, useCallback, useState } from "react";
import { ICharacter } from "../consts";

export interface IPlayers {
    player1: ICharacter | null;
    player2: ICharacter | null;
}

export interface IRootContext {
    selectedPlayers: IPlayers;
    activeScreen: number;
    selectPlayer: (character: ICharacter, playerNum: number) => void;
    setActiveScreen: (screen: number) => void;
}

export const RootContext = createContext({} as IRootContext);

export const RootContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeScreen, setActiveScreen] = useState<number>(0);
    const [selectedPlayers, setSelectedPlayers] = useState<IPlayers>({
        player1: null,
        player2: null
    });

    const selectPlayer = useCallback((character: ICharacter, playerNumber: number = 1) => {
        setSelectedPlayers((prev: IPlayers) => ({ ...prev, [`player${playerNumber}`]: character }))
    }, []);

    return (
        <RootContext.Provider value={{ selectedPlayers, selectPlayer, activeScreen, setActiveScreen }}>
            {children}
        </RootContext.Provider>
    )
}
