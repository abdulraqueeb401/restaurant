import { forwardRef } from "react";
import TabLink from "./TabLink";
import PropTypes from "prop-types";

const TabLinks = forwardRef(function TabLinks(
  { tabLinks, enableStickyTabs },
  ref
) {
  return (
    <section
      ref={ref}
      className={`${
        enableStickyTabs ? "sticky top-32 z-10" : ""
      } flex justify-start text-gray-700 mt-3 relative gap-10 bg-white`}
    >
      {tabLinks.map((tablink) => (
        <TabLink key={tablink.id} to={tablink.link} title={tablink.title} />
      ))}
      <hr className="bg-gray-400 h-0.5 absolute bottom-0 left-0 m-0 p-0 w-full" />
    </section>
  );
});

TabLinks.propTypes = {
  tabLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  enableStickyTabs: PropTypes.bool.isRequired,
};

export default TabLinks;
