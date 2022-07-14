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
    //* rooks
pieces.push({ image: "assets/images/Rook_B.png", x: 0, y: 7 })
pieces.push({ image: "assets/images/Rook_B.png", x: 7, y: 7 })
pieces.push({ image: "assets/images/Rook_W.png", x: 0, y: 0 })
pieces.push({ image: "assets/images/Rook_W.png", x: 7, y: 0 })

    //* knights
pieces.push({ image: "assets/images/Knight_B.png", x: 1, y: 7 })
pieces.push({ image: "assets/images/Knight_B.png", x: 6, y: 7 })
pieces.push({ image: "assets/images/Knight_W.png", x: 1, y: 0 })
pieces.push({ image: "assets/images/Knight_W.png", x: 6, y: 0 })

    //* Bishops
pieces.push({ image: "assets/images/Bishop_B.png", x: 2, y: 7 })
pieces.push({ image: "assets/images/Bishop_B.png", x: 5, y: 7 })
pieces.push({ image: "assets/images/Bishop_W.png", x: 2, y: 0 })
pieces.push({ image: "assets/images/Bishop_W.png", x: 5, y: 0 })

    //* Queen
pieces.push({ image: "assets/images/Queen_B.png", x: 3, y: 7 })
pieces.push({ image: "assets/images/Queen_W.png", x: 3, y: 0 })

    //* King
pieces.push({ image: "assets/images/King_B.png", x: 4, y: 7 })
pieces.push({ image: "assets/images/King_W.png", x: 4, y: 0 })

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
                board.push(<Tile image={image} number={number} />);



            }
        }
    return <div id="chessboard">{board}</div>;
}