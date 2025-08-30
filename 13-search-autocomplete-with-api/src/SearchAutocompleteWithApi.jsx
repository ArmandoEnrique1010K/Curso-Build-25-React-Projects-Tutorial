import { useEffect, useState } from "react";
import Suggestions from "./components/Suggestions.jsx";

export default function SearchAutocompleteWithApi() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "36px",
            margin: "0 auto",
          }}
        >
          Loading Data! Please wait
        </h1>
      ) : (
        <div style={{ width: "400px" }}>
          <input
            value={searchParam}
            name="search-users"
            placeholder="Search Users here..."
            onChange={handleChange}
            style={{
              marginTop: "36px",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "20px",
            }}
          />

          {showDropdown ? (
            <Suggestions handleClick={handleClick} data={filteredUsers} />
          ) : (
            <p
              style={{
                marginTop: "24px",
                textAlign: "center",
                color: "red",
                fontSize: "20px",
              }}
            >
              Write at least two characters! (example: "ar", "so")
            </p>
          )}

          {error}
        </div>
      )}
    </div>
  );
}
