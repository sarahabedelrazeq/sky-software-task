import { light, dark } from "themes";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export default function useTheme() {
  const store = useContext(ReactReduxContext);
  const state = store?.store?.getState();
  return state?.app?.theme === "dark" ? dark : light;
}