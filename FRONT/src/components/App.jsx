import React from 'react';
import '../styles/global.scss';
import Login from "../containers/login.jsx";
import Layout from '../containers/layout.jsx';

const App = () => {
    return (
        
        <Layout>
            <Login /> 
            {/* como no le voy a pasar hijos asi cerrado inmediatamente esta bien */}
        </Layout>
    );
};

export default App;