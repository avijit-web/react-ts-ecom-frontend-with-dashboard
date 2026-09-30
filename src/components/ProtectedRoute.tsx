import { Outlet } from "react-router";

function ProtectedRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
