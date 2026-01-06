import TeamCard from "../components/TeamCard";


export default function Home() {
const teams = ["CSK", "RCB", "MI", "KKR", "RR"];


return (
<div className="grid">
{teams.map(t => <TeamCard key={t} team={t} />)}
</div>
);
}
