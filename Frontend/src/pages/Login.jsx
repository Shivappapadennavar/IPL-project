import { useState } from "react";
import API from "../services/api";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const submit = async (e) => {
e.preventDefault();
const res = await API.post("/auth/login", { email, password });
localStorage.setItem("token", res.data.token);
window.location.href = "/";
};


return (
<form className="form" onSubmit={submit}>
<h2>Login</h2>
<input placeholder="Email" onChange={e => setEmail(e.target.value)} />
<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
<button>Login</button>
</form>
);
}
