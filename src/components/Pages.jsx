
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { pages } from "../data/pages";
import { useStateContext } from "../contexts/AppContext";
import { Page } from "./Page";

function Pages() {
  const location = useLocation();
  const { preset, enterAnimation, exitAnimation } = useStateContext();

  if (preset) {
    return (
      <PageTransition
        preset={preset}
        transitionKey={location.pathname}
        enterAnimation={enterAnimation || ""}
        exitAnimation={exitAnimation || ""}
      >
        <Routes location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                key={index}
                path={page.path}
                element={<Page page={page} />}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/page-1" />} />
        </Routes>
      </PageTransition>
    );
  }

  return null;
}

export { Pages };