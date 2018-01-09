require('../../styles/main.styl');

const initializeApp = () => {
    const testButton = document.getElementById('testButton');
    testButton.addEventListener('click', () => {
        window.alert('🍔'); // eslint-disable-line no-alert
    });
};

document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
        initializeApp();
    }
};
