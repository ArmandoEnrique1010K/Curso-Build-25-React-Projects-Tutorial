import { useEffect, useState } from "react";
import User from "./components/User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("ArmandoEnrique1010K");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      console.log(data);

      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!userName) return;

    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading data! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <form onSubmit={handleSubmit} className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
