export default function User({ user }) {
    // Desestructura las propiedades relevantes del objeto user
    const {
        // URL del avatar del usuario
        avatar_url,
        // Número de seguidores
        followers,
        // Número de cuentas seguidas
        following,
        // Número de repositorios públicos
        public_repos,
        // Nombre del usuario
        name,
        // Nombre de usuario en GitHub
        login,
        // Fecha de creación de la cuenta
        created_at,
    } = user;

    // Convierte la fecha de creación a un objeto Date
    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div className="image-container">
                {/* Muestra la imagen del avatar del usuario */}
                <img src={avatar_url} className="avatar" alt="User" />
            </div>

            <div className="name-container">
                {/* Enlace al perfil de GitHub del usuario */}
                <a href={`https://github.com/${login}`}>{name || login}</a>

                {/* Muestra la fecha en que el usuario se unió a GitHub */}
                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdDate.getFullYear()}`}
                </p>
            </div>

            {/* Muestra información adicional del perfil */}
            <div className="profile-info">
                <div>
                    <p>Public Repos</p>
                    {/* Muestra el número de repositorios públicos */}
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    {/* Muestra el número de seguidores */}
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    {/* Muestra el número de cuentas que sigue */}
                    <p>{following}</p>
                </div>
            </div>
        </div>
    );
}