import React, { Component } from 'react';
import Header from './components/Header'; 
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';

const Menu = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: "",
            email: "",
            result: ""
        }
    }

    clickHandler() {
        let count = this.state.count;
        count++;
        let result = this.state.name + " - " + this.state.email;
        this.setState({count, result});
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return(
            <div className="app">
                <Header title="Header" name={this.state.name}>
                    <Menu />
                </Header>
                <Aside title="Aside"/>
                <Content 
                    title="Content"
                    count={this.state.count}
                    name={this.state.name}
                    email={this.state.email}
                    result={this.state.result}
                    clickHandler={this.clickHandler.bind(this)} 
                    changeName={this.changeName.bind(this)}
                    changeEmail={this.changeEmail.bind(this)}
                />
                <Footer title="Footer" />
            </div>
        );      
    } 
}

export default App; 