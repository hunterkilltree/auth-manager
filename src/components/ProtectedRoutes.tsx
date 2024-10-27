import { Outlet } from "react-router-dom";
import { NotFound } from "../pages";
import LocalStorageHelper from "../utils/helpers/LocalStorageHelper";
import ConstantHelper from "../utils/constants/ConstantHelper";

const ProtectedRoutes = () => {
  const errorCode = "404";
  const message = "You need to be logged in to access this page";

  // Check if the user is authenticated
  const isAuthenticated = LocalStorageHelper.getLocalStorageItem(
    ConstantHelper.USER_TOKEN
  );

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <NotFound errorCode={errorCode} message={message} />
  );
};

export default ProtectedRoutes;
