import { Link, useResolvedPath, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

function TabLink({ to, title }) {
  let resolved = useResolvedPath(to);
  console.log(resolved);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div className="relative">
      <div
        className={`${
          match ? "text-red-500" : "text-gray-500 font-light"
        } px-4 py-4`}
      >
        <Link to={to}>{title}</Link>
      </div>
      {match && (
        <hr className="bg-red-500 h-1 absolute bottom-0 left-0 w-full z-10" />
      )}
    </div>
  );
}

TabLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TabLink;
