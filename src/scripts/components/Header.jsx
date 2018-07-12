import React from 'react';

const Header = (props) =>{
    return (
        <header className="header" style={{border: '1px solid red'}}>
            {props.title}
            {props.children}
            {props.name}
        </header>
    );
}
export default Header;