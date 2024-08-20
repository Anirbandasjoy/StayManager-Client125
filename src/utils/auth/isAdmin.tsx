import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const isAdmin = (Component: any) => {
  return function IsAdmin(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const admin = currentUser?.payload?.role === "admin";

    useEffect(() => {
      if (!isLoading && (!currentUser || !admin)) {
        redirect("/");
      }
    }, [admin, currentUser, isLoading]);

    if (isLoading) {
      return <h1>Loading....</h1>;
    }

    if (!currentUser || !admin) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAdmin;
