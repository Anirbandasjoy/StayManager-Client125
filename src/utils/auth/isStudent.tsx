import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const isStudent = (Component: any) => {
  return function IsStudent(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const student = currentUser?.payload?.role === "student";
    const admin = currentUser?.payload?.role === "admin";

    useEffect(() => {
      if (!isLoading && (!currentUser || !student || !admin)) {
        redirect("/");
      }
    }, [student, currentUser, isLoading, admin]);

    if (isLoading) {
      return <h1>Loading....</h1>;
    }

    if (!currentUser || !student || !admin) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isStudent;
