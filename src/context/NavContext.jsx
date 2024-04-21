import { createContext, useContext } from "react";

const navItemsList = ["Home", "About", "Works", "Products"];
const NavItemsContext = createContext()

// vite.configのbase
const appBase = './'
const APPContext = createContext()

// App.jsxで囲む
export const NavItemsProvider = ({children}) => {
  return (
    <NavItemsContext.Provider value={navItemsList}>
      <APPContext.Provider value={appBase}>
        {children}
      </APPContext.Provider>
    </NavItemsContext.Provider>
  )
}

// 他のコンポーネントで使用する
export const useNavItems = () => useContext(NavItemsContext)

// vite.configのbase -> 画像のリンクに使用
export const useAppBase = () => useContext(APPContext)