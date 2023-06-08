import React from "react";

import { Footer, Blog, Possibility, What, Features, Header } from "./containers/"; //ignorar error
import { Brand, Cta, Navbar } from './components'; //ignorar error
import './App.css'


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


