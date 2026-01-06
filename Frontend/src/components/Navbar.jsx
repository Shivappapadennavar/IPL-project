import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="nav">
<h2>🏏 IPL Hub</h2>
<div>
<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>
</div>
</nav>
);
}
