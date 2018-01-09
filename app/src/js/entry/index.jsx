import React from 'react';
import { render } from 'react-dom';
import TestApp from '@components/TestApp';

require('@styles/main.styl');

render(<TestApp />, document.getElementById('root'));
