import { Outlet, Navigate } from 'react-router';
import { getUserRole } from '@/config/auth-validators'

type ProtectedRouteProps = {
  allowedRoles: string[];
  redirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoute = ({
  allowedRoles,
  redirectPath = '/',
  children,
}: ProtectedRouteProps) => {

  const role = getUserRole();
  console.log(role)
  console.log(allowedRoles)
  if (!allowedRoles.includes(role.toLowerCase())) {
    console.log("redirect")
    return <Navigate to={redirectPath} replace />;
  }

  console.log("allowed")
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
