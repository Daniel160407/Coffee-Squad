const Button = ({
  icon: Icon,
  imgSrc,
  title,
  style = "",
  iconPosition = "LEFT",
  onClick,
  type = "button",
}) => {
  const flexDirection = {
    TOP: "flex-col",
    BOTTOM: "flex-col-reverse",
    LEFT: "flex-row",
    RIGHT: "flex-row-reverse",
  };

  return (
    <button
      className={`flex items-center transition-all rounded-[10px] justify-center gap-2 cursor-pointer ${flexDirection[iconPosition]} ${style}`}
      onClick={onClick}
      type={type}
    >
      {imgSrc && <img src={imgSrc} alt="avatar" className="w-[60px]" />}
      {Icon && <Icon />}
      {title && <p>{title}</p>}
    </button>
  );
};

export default Button;
