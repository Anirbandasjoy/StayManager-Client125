import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useCurrentUserQuery } from "@/redux/api/baseApi";

const isAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const auth = currentUser?.success;

    useEffect(() => {
      if (!isLoading && !auth) {
        redirect("/");
      }
    }, [auth, isLoading]);

    if (isLoading) {
      return <h1>Loading....</h1>;
    }

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAuth;
