import { light, dark } from "themes";
import { useSelector } from "react-redux";

export default function useTheme() {
  const theme = useSelector((state) => state.app.theme);

  return theme === "dark" ? dark : light;
}
