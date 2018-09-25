import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
