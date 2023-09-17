import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const usePreventLeave = (onLeaving) => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload");
    const disablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};

const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
