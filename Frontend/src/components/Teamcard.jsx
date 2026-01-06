import { Link } from "react-router-dom";


export default function TeamCard({ team }) {
return (
<Link to={`/team/${team}`} className="card">
<h3>{team}</h3>
</Link>
);
}
