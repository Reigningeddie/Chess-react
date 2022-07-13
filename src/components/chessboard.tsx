import React from 'react';
import './chessboard.css';

    //* horizontal tiles
const hAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    //* vertical tiles
const vAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function chessboard() {
    //* creates an array
        let board = [];

    //* invert loops through vertical axis
        for(let j = vAxis.length-1; j >= 0; j--) {
        //* loops through horizontal
            for(let i = 0; i < hAxis.length; i++) {
                const number = j + i + 2;

                if(number % 2 === 0) {
                    board.push(
                        <div className="tile black-tile">{hAxis[i]}-{vAxis[j]}</div>);
                } else {
                    board.push(
                        <div className="tile white-tile">{hAxis[i]}-{vAxis[j]}</div>);
                }
                console.log(hAxis[i], vAxis[j]);
            //* combines V and H axis' and puts it on the board

            }
        }
    return <div id="chessboard">{board}</div>;
}