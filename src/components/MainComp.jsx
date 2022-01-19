import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from './HomeComp';
import Hello from './HelloComp';
import Number from './NumberComp';
import HelloColor from './HelloColorComp';

/**
 * //// MAIN COMPONENT //////////////////////////////////////
 */
const Main = () => {
    return (
        <main role="main bg-light">
            <div className='container mt-4'>
                <div className='row'>
                    <div className="col">
                        {/* **** HOME ROUTE ************** */}
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        {/* **** HELLO ROUTE ************** */}
                        <Route exact path="/hello">
                            <Hello />
                        </Route>
                        {/* **** NUMBER ROUTE ************* */}
                        <Route path="/number/:number">
                            <Number />
                        </Route>
                        {/* **** HELLO COLOR BACKGROUND COLOR ROUTE ******** */}
                        <Route path="/Hello/:color/:backgroundColor">
                            <HelloColor />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main