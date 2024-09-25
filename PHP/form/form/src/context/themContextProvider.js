import React, { createContext, useContext, useState } from "react";

const themeContext = createContext(undefined);

export function ThemContextProvider({ children }) {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		theme == "light" ? setTheme("dark") : setTheme("light");
	};
	return (
		<themeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</themeContext.Provider>
	);
}

export const useTheme = () => useContext(themeContext);
