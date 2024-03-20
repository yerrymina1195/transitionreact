import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import { Pages } from "./Pages";

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/page-1" />} />
      <Route path="/*" element={<Pages />} />
    </RouterRoutes>
  );
}

export { Routes };








// import React from "react";
// import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
// import { PageTransition } from "@steveeeie/react-page-transition";
// import { pages } from "../data";
// import { Page } from "./Page";
// import { useStateContext } from "../contexts/AppContext";

// export function Routes() {
//   const { preset, enterAnimation, exitAnimation } = useStateContext();

//   return (
//     <RouterRoutes>
//       <Route path="/" element={<Navigate to="/page-1" />} />

//       <Route path="*">
//         <PageTransition
//           preset={preset}
//           transitionKey={window.location.pathname}
//           enterAnimation={enterAnimation}
//           exitAnimation={exitAnimation}
//         >
//           <RouterRoutes>
//             {pages.map((page, index) => (
//               <Route
//                 key={index}
//                 path={page.path}
//                 element={<Page page={page} />}
//               />
//             ))}
//           </RouterRoutes>
//         </PageTransition>
//       </Route>
//     </RouterRoutes>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
// import { PageTransition } from "@steveeeie/react-page-transition";
// import { pages } from "../data";
// import { Page } from "./Page";
// import { useStateContext } from "../contexts/AppContext";

// export function Routes() {
//   const { preset, enterAnimation, exitAnimation } = useStateContext();
//   const location = useLocation();
//   const [transitionKey, setTransitionKey] = useState(location.pathname);

//   useEffect(() => {
//     setTransitionKey(location.pathname);
//   }, [location]);

//   return (
//     <RouterRoutes>
//       {pages.map((page, index) => (
//         <Route
//           key={index}
//           path={page.path}
//           element={
//             <PageTransition
//               preset={preset}
//               transitionKey={transitionKey} 
//               enterAnimation={enterAnimation}
//               exitAnimation={exitAnimation}
//             >
//               <Page page={page} />
//             </PageTransition>
//           }
//         />
//       ))}
//     </RouterRoutes>
//   );
// }
