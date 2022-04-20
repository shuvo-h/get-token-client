import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/slices/authSlice";
import { RootState } from "../redux/store/store";

const useAuthAccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const user = useSelector((state: RootState) => state.user);
  return {
    user,
  };
};

export default useAuthAccess;
