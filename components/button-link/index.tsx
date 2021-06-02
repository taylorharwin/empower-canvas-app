import Link from "next/link";
import cn from "clsx";

function ButtonLink({ href = "/", className = "", children }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "text-white",
          "bg-black",
          "p-2",
          "rounded",
          "text-sm",
          "font-bold",
          {
            [className]: Boolean(className),
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
