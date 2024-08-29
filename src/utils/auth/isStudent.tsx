import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const isStudent = (Component: any) => {
  return function IsAdmin(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const student = currentUser?.payload?.role === "student";

    useEffect(() => {
      if (!isLoading && (!currentUser || !student)) {
        redirect("/");
      }
    }, [student, currentUser, isLoading]);

    if (isLoading) {
      return <h1>Loading....</h1>;
    }

    if (!currentUser || !student) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isStudent;
