import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { useCurrentUserQuery } from "@/redux/api/baseApi";
import UiLoading from "@/components/loading/UiLoading";

const isAuth = (Component: any) => {
  return function IsAuth(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const auth = currentUser?.success;
    const path = usePathname();
    console.log({ path });

    useEffect(() => {
      localStorage.setItem("location", path);
      if (!isLoading && !auth) {
        redirect("/login");
      }
    }, [auth, isLoading, path]);

    if (isLoading) {
      return <UiLoading />;
    }

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAuth;
