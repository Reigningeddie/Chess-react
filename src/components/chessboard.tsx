import React from 'react';
import './chessboard.css';

    //* horizontal tiles
const hAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    //* vertical tiles
const vAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function chessboard() {
    return <div id="chessboard"></div>;
}