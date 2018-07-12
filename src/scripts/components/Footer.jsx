import React from 'react';

const Footer = ({title}) => {
    return (
        <footer className="footer" style={{border: '1px solid pink'}}>
        {title}
        </footer>
    );
}
export default Footer;