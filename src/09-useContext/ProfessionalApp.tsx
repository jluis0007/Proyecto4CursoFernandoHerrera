import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { UserContextProvideer } from "./context/UserContext";

export const ProfessionalApp = () => {
  return (
    <UserContextProvideer>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvideer>
  );
};
