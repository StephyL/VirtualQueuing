import React, { Suspense, useContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import routes from "./router";
import LoadingPage from "./pages/LoadingPage";
import DashboardPage from "./pages/DashboardPage";
import { UserContext } from "./pages/Context";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Suspense fallback={<LoadingPage />}>
          <BrowserRouter>
            <Routes>
              {user.data ? (
                <Route path="/" element={<Homepage />} />
              ) : (
                <Route path="/" element={<Navigate to="/home" replace />} />
              )}
              {user.data ? (
                <Route path="/profile" element={<ProfilePage />} />
              ) : (
                <Route path="/profile" element={<Navigate to="/home" replace />} />
              )}
              {user?.data?.data.role === "Manager" ? (
                <Route path="/dashboard" element={<DashboardPage />} />
              ) : (
                <Route path="/dashboard" element={<Navigate to="/home" replace />} />
              )}
              {routes.map((route) => {
                const { path } = route;
                return <Route {...route} key={path} />;
              })}
              <Route path="/loading" element={<LoadingPage />} />
              <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </>
    </ThemeProvider>
  );
};

export default App;
