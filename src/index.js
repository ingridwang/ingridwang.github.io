import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import PageContainer from './PageContainer';

ReactDOM.render((
    <BrowserRouter>
        <PageContainer />
    </BrowserRouter>
), document.getElementById('page_container'));
