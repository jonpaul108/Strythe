import React from 'react';
import styles from '../styles/app.module.scss';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './header.jsx';
import ConditionalRender from './conditionalRender.jsx';
import Footer from './footer.jsx';

const App = () => {
    const [page, setPage] = React.useState('home');

    return (
    <Router>
       <div className={styles.main} >
            <Header setPage={setPage}/>
            <ConditionalRender  />
            <Footer />
        </div>
    </Router>
        
    )
}

export default App;