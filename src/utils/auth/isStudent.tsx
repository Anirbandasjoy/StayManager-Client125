import UiLoading from "@/components/loading/UiLoading";
import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const isStudentOrAdmin = (Component: React.ComponentType<any>) => {
  return function IsStudentOrAdmin(props: any) {
    const { data: currentUser, isLoading } = useCurrentUserQuery();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading) {
        if (
          !currentUser ||
          (currentUser.payload.role !== "student" &&
            currentUser.payload.role !== "admin")
        ) {
          redirect("/");
        }
      }
    }, [currentUser, isLoading, router]);

    if (isLoading) {
      return <UiLoading />;
    }

    if (
      !currentUser ||
      (currentUser.payload.role !== "student" &&
        currentUser.payload.role !== "admin")
    ) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default isStudentOrAdmin;
