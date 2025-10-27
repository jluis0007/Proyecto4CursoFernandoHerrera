import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link } from "react-router";

export const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil del usuario</h1>
      <hr />
      <br />
      <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify({ user }, null, 2)}
      </pre>
      <br />
      <Link to="/about" className="my-4">
        <Button variant="ghost">Volver a la página principal</Button>
      </Link>
      <Button variant="destructive" className="my-4" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
