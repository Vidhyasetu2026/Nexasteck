import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AnimatedBackground from "./components/shared/AnimatedBackground";
import CustomCursor from "./components/shared/CustomCursor";
import LoadingScreen from "./components/shared/LoadingScreen";
import ScrollToTop from "./components/shared/ScrollToTop";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import ScrollToTopOnRouteChange from "./components/shared/ScrollToTopOnRouteChange";
import PageTransition from "./components/shared/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <AnimatedBackground />
      <ScrollToTopOnRouteChange />

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
