import cn from "clsx";

function Button({
  onClick = console.log,
  className = "",
  children = null,
  type = null,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-black",
        "text-white",
        "p-2",
        "rounded",
        "uppercase",
        "text-sm",
        "font-bold",
        { "cursor-not-allowed": disabled, "opacity-50": disabled },
        {
          [className]: Boolean(className),
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
