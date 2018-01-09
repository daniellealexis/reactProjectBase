import React from 'react';

function cheeseburgerAlert() {
    alert('🍔'); // eslint-disable-line no-alert
}

const TestApp = () => (
    <div className="wrapper">
        <h1>Hello World <span role="img" aria-label="waving hand">👋</span></h1>
        <button onClick={cheeseburgerAlert}>Hungry?</button>
    </div>
);

export default TestApp;
