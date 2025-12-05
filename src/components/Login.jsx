import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         await signInWithEmailAndPassword(auth, email, password);
         alert("Sesión iniciada correctamente");
      } catch (error) {
         alert("Error al iniciar sesión: " + error.message);
      }
   };

   const handleLogout = async () => {
      await signOut(auth);
      alert("Sesión cerrada");
   };

   return (
      <div className="container mt-5" style={{ maxWidth: '400px'}}>
         <h2 className="text-center mb-4">Login Profesor</h2>

         <form onSubmit={handleLogin}>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Correo</label>
               <input
                  type="email"
                  placeholder="Correo"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Contraseña</label>   
               <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>

            <button type="submit" className="btn btn-success w-100">Ingresar</button>
            </form>
            <button onClick={handleLogout} className="btn btn-danger w-100 mt-3">Cerrar sesión</button>
      </div>
   );
}

export default Login;