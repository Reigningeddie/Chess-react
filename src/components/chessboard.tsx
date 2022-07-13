import React from 'react';
import './chessboard.css';

    //* horizontal tiles
const hAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    //* vertical tiles
const vAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function chessboard() {
    //* creates an array
        let board = [];
    //* loops through horizontal
        for(let i = 0; i < hAxis.length; i++) {
        //* invert loops through vertical axis
            for(let j = vAxis.length-1; j >= 0; j--) {
                console.log(hAxis[i], vAxis[j]);
            //* combines V and H axis' and puts it on the board
                board.push(<span>{hAxis[i]}-{vAxis[j]}</span>);
            }
        }
    return <div id="chessboard">{board}</div>;
}