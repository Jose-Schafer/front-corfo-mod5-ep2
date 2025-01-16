import { Outlet, Navigate } from 'react-router';
import { useAuth } from '@/providers/AuthContext';

type ProtectedRouteProps = {
  allowedRoles: string[];
  redirectPath?: string;
  children?: React.ReactNode;
}

function ProtectedRoute({ allowedRoles, redirectPath = '/', children }: ProtectedRouteProps) {
  const { user } = useAuth()

  if (!allowedRoles.includes(user?.role?.toLowerCase())) {
    console.log("redirect")
    return <Navigate to={redirectPath} replace />;
  }

  console.log("allowed")
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
