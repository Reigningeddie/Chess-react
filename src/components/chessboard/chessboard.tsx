import './chessboard.css';
import Tile from "../Tiles/tile";

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
            //* adds both axis arrays and adds 1 because arrays start at 0
                const number = j + i + 2;
            //* takes the number and adds it to the tile - logic continued in tile.tsx
                board.push(<Tile number={ number } />);

                console.log(hAxis[i], vAxis[j]);
            //* combines V and H axis' and puts it on the board

            }
        }
    return <div id="chessboard">{board}</div>;
}