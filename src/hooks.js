import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const trigerNotifi = useNotification("Can I steal your kimchi?", {
        body: "I love kimchi dont you"
    });
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClicj={triggerNotif}>Hello</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
