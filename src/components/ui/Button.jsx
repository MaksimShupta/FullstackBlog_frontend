const Button = ({
    text,
    onClick,
    type = "button",
    className = "",
    noBaseClass = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${noBaseClass ? className : `btn ${className}`}`}
        >
            {text}
        </button>
    );
};

export default Button;
