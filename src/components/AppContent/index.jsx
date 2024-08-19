import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// routes config
import routes from "../../routers";
import { Container, Spinner } from "react-bootstrap";

const AppContent = () => {
  return (
    <Container
      fluid
      className={`h-100 w-100 d-flex align-items-center justify-content-center`}
    >
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default React.memo(AppContent);
