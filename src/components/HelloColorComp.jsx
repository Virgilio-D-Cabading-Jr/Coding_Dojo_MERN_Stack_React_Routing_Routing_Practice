import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * //// HELLO COLOR COMPONENT ////////////////////////////////
 * @returns HTML For Hello with Color Text Color and Background Color
 */
const HelloColor = () => {
    const { color, backgroundColor } = useParams();

    return (
        <div style={{ color: color, backgroundColor: backgroundColor }}>
            <h1>Hello</h1>
        </div>
    );
};

export default HelloColor;
