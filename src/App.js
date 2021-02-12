import React from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Routed Imports
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

// animation
import { AnimatePresence } from "framer-motion";

function App() {
    // Get Key of the current page
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence>
                {/* Routing */}
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
