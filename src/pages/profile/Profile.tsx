import { Button } from "@hunterkilltree/ui-lib";
import ConstantHelper from "../../utils/constants/ConstantHelper";
import LocalStorageHelper from "../../utils/helpers/LocalStorageHelper";
import { useNavigate } from "react-router-dom";
import RouteConstant from "../../utils/constants/RouteConstant";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(RouteConstant.LOGOUT);
  };

  return (
    <>
      <h1>Profile</h1>
      <p>{LocalStorageHelper.getLocalStorageItem(ConstantHelper.USER_TOKEN)}</p>
      <Button type="submit" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}

export default Profile;
