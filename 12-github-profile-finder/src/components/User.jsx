import PropTypes from "prop-types";
export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div className="image-container">
        <img src={avatar_url} className="avatar" alt="User" />
      </div>

      <div className="name-container">
        <table className="table">
          <tbody>
            <tr>
              <td className="info-label">Username</td>
              <td className="info-value">
                {" "}
                <a href={`https://github.com/${login}`}>{name || login}</a>
              </td>
            </tr>
            <tr>
              <td className="info-label">User joined on</td>
              <td className="info-value">
                {`${createdDate.getDate()} ${createdDate.toLocaleString(
                  "en-us",
                  {
                    month: "short",
                  }
                )} ${createdDate.getFullYear()}`}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th className="info-label">Public Repos</th>
              <th className="info-label">Followers</th>
              <th className="info-label">Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="info-value">{public_repos}</td>
              <td className="info-value">{followers}</td>
              <td className="info-value">{following}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
