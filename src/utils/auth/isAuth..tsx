import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useCurrentUserQuery } from "@/redux/api/baseApi";
const isAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const { data: currentUser } = useCurrentUserQuery();
    const auth = currentUser?.success;
    console.log(auth);

    useEffect(() => {
      if (!auth) {
        return redirect("/");
      }
    }, [auth]);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAuth;
