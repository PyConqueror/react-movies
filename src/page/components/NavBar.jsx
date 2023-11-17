import {Link} from "react-router-dom"
function NavBar({ user }) {
    return (
      <nav>
        {user ? (
          <>
            <p>Hello {user}</p>
            <Link to="/">MoviesListPage</Link>
            &nbsp; | &nbsp;
            <Link to="/movies/:movieName">MovieDetailPage</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">ActorListPage</Link>
          </>
        ) : null}
      </nav>
    );
  }

export default NavBar