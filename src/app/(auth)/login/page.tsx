"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useCurrentUserQuery, useLoginMutation } from "@/redux/api/baseApi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { handleGithubLogin, handleGoogleLogin } from "@/helper/auth";
import { MdShowChart } from "react-icons/md";

interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [setLogin, { data, isLoading }] = useLoginMutation();
  const { refetch: currentUserRefetch } = useCurrentUserQuery();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await setLogin({ email: data.email, password: data.password }).unwrap();
      currentUserRefetch();
      toast({
        title: "Login Successfully.",
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error);
      toast({
        variant: "destructive",
        title: "Invalid Credential.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Card className="w-[400px] shadow-md p-3 ">
        <CardHeader className="">
          <CardTitle className="text-2xl font-semibold">
            Login Your Account
          </CardTitle>
          <CardDescription className="mt-2">
            Enter your email below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="flex gap-2">
            <Button
              onClick={handleGithubLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGithub />
              Github
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Google
            </Button>
          </div>
          <div className="relative flex items-center my-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4 text-gray-500">OR CONTINUE WITH</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        id="email"
                        placeholder="m@example.com"
                        className="py-2 mt-1"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                      message: "Invalid password. Try again",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        className="py-2 mt-1"
                      />
                      {errors.password && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.password.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              {isLoading ? "Loading..." : "Login"}
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="py-2 mt-2 h-10 px-3 w-full rounded-md bg-transparent border-2 text-gray-600  flex items-center justify-center gap-1 cursor-pointer">
                  <MdShowChart className="text-xl" />
                  <span className="font-bold sm:text-sm text-xs text-nowrap">
                    Show Creadential
                  </span>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-200">
                <h1 className="text-center font-medium text-xl text-gray-600">
                  Creadential
                </h1>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm" htmlFor="email">
                      Admin Email
                    </label>
                    <Input value="admin@gmail.com" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm" htmlFor="password">
                      Admin password
                    </label>
                    <Input value="12345A@" />
                  </div>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-800 hover:text-white">
                    Close
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
          <CardDescription className="mt-4 text-center">
            Not Create Account? please{" "}
            <Link href="/register" className="text-blue-600">
              Register
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
