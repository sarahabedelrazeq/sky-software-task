import { ErrorBoundary, Fallback } from "components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import { useLanguage, useTheme } from "./hooks";
import "./sass/index.scss";

function App() {
  const language = useLanguage();
  const theme = useTheme();

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", language.direction);
    document.documentElement.setAttribute("dir", language.direction);
    document.documentElement.setAttribute("class", "theme-" + theme.name);
  }, [language, theme]);

  return (
    <ErrorBoundary>
      <div>
        <React.Suspense
          fallback={
            <div className="vw-100 vh-100">
              <Fallback />
            </div>
          }
        >
          <Routes basename="/">
            {routes.map((route, index) => {
              return (
                route.component && (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              );
            })}
          </Routes>
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
