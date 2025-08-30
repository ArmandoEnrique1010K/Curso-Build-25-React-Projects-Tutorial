import PropTypes from "prop-types";
export default function Suggestions({ data, handleClick }) {
  return (
    <ul style={{ width: "max-content", listStyle: "square", fontSize: "16px" }}>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

Suggestions.propTypes = {
  data: PropTypes.array,
  handleClick: PropTypes.func,
};
