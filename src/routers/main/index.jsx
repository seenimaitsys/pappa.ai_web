import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Routers Component
const Routers = () => {
  const HomeLayout = lazy(() => import("../../layout/Home"));
  const LoginLayout = lazy(() => import("../../layout/login"));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<HomeLayout />} /> {/* Home page */}
          <Route path="/" element={<LoginLayout />} /> {/* Home page */}
          {/* Redirect to Home for unknown routes */}
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
