import MenuList from "./components/MenuList";
import PropTypes from "prop-types";
import "./styles.css";

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
