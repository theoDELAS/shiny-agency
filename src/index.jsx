import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import GlobalStyle from "./utils/styles/GlobalStyle";
import { ThemeProvider, SurveyProvider } from "./utils/context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <SurveyProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/survey/:questionNumber"
                        element={<Survey />}
                    />
                    <Route path="/results" element={<Results />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route element={<Error />} />
                </Routes>
                <Footer />
            </SurveyProvider>
        </ThemeProvider>
    </BrowserRouter>
);
