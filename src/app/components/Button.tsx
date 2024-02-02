'use client'

type ButtonProps = {
    text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => {
    const handleClick = () => {
        console.log(text);
    };

    return (
        <button onClick={handleClick} className="bg-green-500 mx-auto">
            {text} is passed down as SS prop
        </button>
    );
};

export default Button;
