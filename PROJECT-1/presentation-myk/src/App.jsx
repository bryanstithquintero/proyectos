import React from "react";

import { Footer, Blog, Possibility, What, Features, Header } from "./containers";
import { Brand, Cta, Navbar } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradiente_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App


