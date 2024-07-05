"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { useLoginMutation } from "@/redux/api/baseApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IFormInputs {
  email: string;
  password: string;
}


const Register = () => {

  const router = useRouter();
  const [setLogin, { data, isLoading }] = useLoginMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await setLogin({ email: data.email, password: data.password }).unwrap();
      toast({
        title: "Login Successfully.",
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error);
      toast({
        variant: "destructive",
        title: "Invalid Creadential.",
        description: "There was a problem with your request.",
      });
    }
  };
  console.log(data);

  return (
    <>
      <div className="flex h-screen w-full justify-center items-center bg-green-100">
        <Card className="w-[350px] bg-blue-300 shadow-xl">
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
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
                          placeholder="Enter your email address.."
                          className="py-6"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs">
                            {errors.email.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
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
                          className="py-6"
                        />
                        {errors.password && (
                          <span className="text-red-500 text-xs">
                            {errors.password.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Confirm Password</Label>
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
                          placeholder="Enter The Same Password"
                          className="py-6"
                        />
                        {errors.password && (
                          <span className="text-red-500 text-xs">
                            {errors.password.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-5">
                {isLoading ? "Loading..." : "SignUp"}
              </Button>
              <CardDescription className="mt-4 ms-2">
                Already have an Account ? <Link href={'/login'} className="text-blue-600"> login. </Link>
              </CardDescription>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
};

export default Register;