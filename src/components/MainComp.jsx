import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

/**
 * //// MAIN COMPONENT //////////////////////////////////////
 */
const Main = () => {
    return (
        <main role="main bg-light">
            <div className='container mt-4'>
                <div className='row'>
                    <div className="col">
                        <h2>Main Component</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main