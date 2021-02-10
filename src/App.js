import React from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Routed Imports
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            {/* Routing */}
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/work">
                    <OurWork />
                </Route>
                <Route path="/contactus">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
