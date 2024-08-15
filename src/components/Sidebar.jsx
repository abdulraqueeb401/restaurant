import PropTypes from "prop-types";

const Sidebar = ({ categories }) => {
  const handleClick = (key) => {
    console.log(key);
  };
  return (
    <div className="flex flex-col w-full gap-y-2 pt-4 sticky top-48 h-screen">
      {categories.map((category, index) => (
        <h3
          key={index}
          onClick={() => handleClick(category)}
          className="pl-5 active:bg-gradient-to-r hover:bg-gradient-to-r from-white to-red-500 cursor-pointer"
        >
          {category}
        </h3>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Sidebar;
