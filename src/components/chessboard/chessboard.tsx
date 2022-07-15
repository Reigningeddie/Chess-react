import './chessboard.css';
import Tile from "../Tiles/tile";

    //* horizontal tiles
const hAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    //* vertical tiles
const vAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

    //* creates a piece interface
interface Piece {
    image: string;
    x: number;
    y: number;
}

    //* creates a piece array
const pieces: Piece[] = [];

    //* loops through numbers 1-8 for black pawns
for(let i = 0; i < 8; i++) {
//* hard codes black pawns into selected tile array
    pieces.push({ image: "assets/images/Pawn_B.png", x: i, y: 6 })
};

    //* loops through numbers 1-8 for white pawns
for(let i = 0; i < 8; i++) {
//* hard codes white pawns into selected chessboards array
    pieces.push({ image: "assets/images/Pawn_W.png", x: i, y: 1 })
}

    //* loops through an array of 0 and 1
for (let p = 0; p < 2; p++) {
//* if its zero assign B otherwise assign W
    const color = p === 0 ? "B" : "W";
//* if its zero assign 7 otherwise assign 0
    const y = p === 0 ? 7 : 0;

    //*inserts color and y variable 
pieces.push({ image: `assets/images/Rook_${color}.png`, x: 0, y })
pieces.push({ image: `assets/images/Rook_${color}.png`, x: 7, y })
pieces.push({ image: `assets/images/Knight_${color}.png`, x: 1, y })
pieces.push({ image: `assets/images/Knight_${color}.png`, x: 6, y })
pieces.push({ image: `assets/images/Bishop_${color}.png`, x: 2, y })
pieces.push({ image: `assets/images/Bishop_${color}.png`, x: 5, y })
pieces.push({ image: `assets/images/Queen_${color}.png`, x: 3, y })
pieces.push({ image: `assets/images/King_${color}.png`, x: 4, y })
}


export default function chessboard() {
    //* creates an array
        let board = [];

    //* invert loops through vertical axis
        for(let j = vAxis.length-1; j >= 0; j--) {
        //* loops through horizontal
            for(let i = 0; i < hAxis.length; i++) {
            //* adds both axis arrays and adds 1 because arrays start at 0
                const number = j + i + 2;
                let image = undefined;

                pieces.forEach(p => {
                    if(p.x === i && p.y === j) {
                        image = p.image;
                    }
                })

            //* takes the number and adds it to the tile - logic continued in tile.tsx
                board.push(<Tile key={`${j}.${i}`}image={image} number={number} />);



            }
        }
    return <div id="chessboard">{board}</div>;
}