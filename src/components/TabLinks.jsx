import TabLink from "./TabLink";
import PropTypes from "prop-types";

function TabLinks({ tabLinks }) {
  return (
    <section className="flex justify-start text-gray-700 mt-3 relative gap-10">
      {tabLinks.map((tablink) => (
        <TabLink key={tablink.id} to={tablink.link} title={tablink.title} />
      ))}
      <hr className="bg-gray-400 h-0.5 absolute bottom-0 left-0 m-0 p-0 w-full" />
    </section>
  );
}

TabLinks.propTypes = {
  tabLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabLinks;
