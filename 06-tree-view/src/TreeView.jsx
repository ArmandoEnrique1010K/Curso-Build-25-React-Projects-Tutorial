import MenuList from "./components/MenuList";
import PropTypes from "prop-types";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

TreeView.propTypes = {
  menus: PropTypes.array,
};
