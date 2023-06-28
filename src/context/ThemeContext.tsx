import { createContext } from "react";
export type ThemeContextType = {
    theme : string
    setTheme: (c: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: ()=> {}
})
