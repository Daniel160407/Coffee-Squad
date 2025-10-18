const Button = ({
  icon: Icon,
  title,
  style = "",
  iconPosition = "LEFT",
  onClick,
  type = "submit",
}) => {
  const flexDirection = {
    TOP: "flex-col",
    BOTTOM: "flex-col-reverse",
    LEFT: "flex-row",
    RIGHT: "flex-row-reverse",
  };

  return (
    <button
      className={`flex items-center hover:bg-lime-500 transition-all rounded-[10px] py-3 px-7 justify-center gap-2 ${flexDirection[iconPosition]} ${style}`}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon />}
      {title && <p>{title}</p>}
    </button>
  );
};

export default Button;