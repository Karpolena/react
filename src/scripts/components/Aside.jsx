import React from 'react';

const Aside = ({title}) => {
    return (
        <aside className="aside" style={{border: '1px solid green'}}>
        {title}
        </aside>
    );
}
export default Aside;