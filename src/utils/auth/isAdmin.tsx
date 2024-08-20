import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const isAdmin = (Component: any) => {
  return function IsAdmin(props: any) {
    const { data: currentUser } = useCurrentUserQuery();
    const admin = currentUser?.payload?.role === "admin";

    useEffect(() => {
      if (!currentUser && !admin) {
        return redirect("/");
      }
    }, [admin, currentUser]);

    if (!currentUser && !admin) {
      return null;
    }
    return <Component {...props} />;
  };
};

export default isAdmin;
