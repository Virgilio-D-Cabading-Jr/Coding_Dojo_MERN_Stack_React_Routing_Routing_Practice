import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

/**
 * //// LINKS BAR COMPONENT ////////////////////////////////////
 * @returns HTML for a Links Bar
 */
const LinksBar = () => {
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='row'>
                    <Link to="/home" className='col'>
                        <button className='btn btn-primary round'><strong>Home</strong></button>
                    </Link>
                    <Link to="/number/4" className='col'>
                        <button className='btn btn-success round'><strong>Number 4</strong></button>
                    </Link>
                    <Link to="/hello" className='col'>
                        <button className='btn btn-warning round'><strong>Hello</strong></button>
                    </Link>
                    <Link to="/hello/blue/red" className='col'>
                        <button className='btn btn-danger round'><strong>Hello Blue Red</strong></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LinksBar
