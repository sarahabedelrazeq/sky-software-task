import { ar, en } from "languages";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export default function useLanguage() {
  const store = useContext(ReactReduxContext);
  const state = store?.store?.getState();
  return state?.app?.language === "ar" ? ar : en;
}