import { Link } from "react-router";
import { use } from 'react';
import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";

export const AboutPage = () => {

const { isAuthenticated,logout } = use(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />
      <br />
      <div className="felx flex-col gap-2">
        {/*  Perfil de usuario si tiene sesión*/}
        {isAuthenticated &&(<Link to="/profile" className="hover:text-blue-500 underline text-2xl">
          Perfil <br />
        </Link>)}
        {/* Login Logout */}
        {
          isAuthenticated?(
            <Button variant='destructive' className="mt-4" onClick={logout}>
              Salir
            </Button>
        ): (
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">
          Iniciar sesión{" "}
        </Link>
        )
      }
      </div>
    </div>
  );
};
