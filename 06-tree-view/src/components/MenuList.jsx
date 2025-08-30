import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
}

MenuList.propTypes = {
  list: PropTypes.array,
};
