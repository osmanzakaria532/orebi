import { Link } from "react-router-dom";

const LiItem = ({ liInnerContent, className, liClassName, children }) => {
  return (
    <div>
      <li className={liClassName}>
        <Link
          className={`inline-block w-full font-DM text-sm font-bold capitalize ${className}`}
          href="#"
        >
          {liInnerContent}
        </Link>
        {children}
      </li>
    </div>
  );
};

export default LiItem;
