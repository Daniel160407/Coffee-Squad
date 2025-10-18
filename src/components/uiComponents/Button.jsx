const Button = ({
  icon: Icon,
  title,
  style = "",
  iconPosition = "LEFT",
  onClick,
  type = "submit",
  outline,
  bg
}) => {
  const flexDirection = {
    TOP: "flex-col",
    BOTTOM: "flex-col-reverse",
    LEFT: "flex-row",
    RIGHT: "flex-row-reverse",
  };

  return (
    <button
      className={`flex items-center outline-1 py-2 px-5 transition-all hover:bg-lime-500 rounded-[10px] bg-cyan-600 cursor-pointer justify-center gap-2 ${flexDirection[iconPosition]} ${style}`}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon />}
      {title && <p>{title}</p>}
    </button>
  );
};

export default Button;