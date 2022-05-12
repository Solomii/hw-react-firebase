import { useState } from "react";

export default function Singup () {
  const [user, setUser] = useState("");

  return (
    <div className="login_page">
      <h2>sing up</h2>
      <form>
       <input type="email" placeholder="Enter email..." />
       <br />
       <input  type="password" placeholder="Password..." />
       <br />
       <button>Login</button>
      </form>
    </div>
  )
}