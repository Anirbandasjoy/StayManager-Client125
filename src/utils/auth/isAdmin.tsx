import UiLoading from "@/components/loading/UiLoading";
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
      return <UiLoading />;
    }

    if (!currentUser || !admin) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAdmin;
