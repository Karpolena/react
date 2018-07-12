import React, { Component } from 'react';
import Header from './components/Header'; 
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return(
            <div className="app">
                <Header />
                <Aside />
                <Content />
                <Footer />
            </div>
        );      
    } 
}

export default App; 