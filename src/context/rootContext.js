import { createContext, useCallback, useState } from "react";

export const RootContext = createContext();

export function RootContextProvider({ children }) {
    const [activeScreen, setActiveScreen] = useState(0);
    const [selectedPlayers, setSelectedPlayers] = useState({
        player1: null,
        player2: null
    });

    const selectPlayer = useCallback((character, playerNumber = 1) => {
        setSelectedPlayers((prev) => ({ ...prev, [`player${playerNumber}`]: character }))
    }, []);

    return (
        <RootContext.Provider value={{ selectedPlayers, selectPlayer, activeScreen, setActiveScreen }}>
            {children}
        </RootContext.Provider>
    )
}
