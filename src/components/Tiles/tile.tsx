import './tile.css';

interface Props {
    image?: string;
    number: number
}

export default function tile({ number, image }: Props) {
//* checks if number is divisible by 2
    if (number % 2 === 0) {
    //* if not divisible by 2 then turn tile black
        return (
        <div className="tile black-tile">
            <img src={image} alt=""/>
        </div>);
    } else {
    //* if divisible by 2 then turn tile white
        return (
        <div className="tile white-tile">
            <img src={image} alt="" />
        </div>);
    }
}