import { useEffect } from "react";
import LocalStorageHelper from "../../utils/helpers/LocalStorageHelper";
import ConstantHelper from "../../utils/constants/ConstantHelper";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../utils/constants/RouteConstant";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    // Clear auth token on component mount
    LocalStorageHelper.removeLocalStorageItem(ConstantHelper.USER_TOKEN);
    // Redirect to the login page or home page
    navigate(RouteConstant.LOGIN);
  }, [navigate]);

  return null; // No UI needed
}

export default Logout;
