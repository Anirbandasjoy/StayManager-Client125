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
import { useProcessRegisterMutation } from "@/redux/api/baseApi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const router = useRouter();
  const [setProcessRegistration, { data, isLoading }] =
    useProcessRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast({
        title: "Validation error.",
        description: "Password and confirm password must be the same.",
      });
    }

    try {
      await setProcessRegistration({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        profileImage:
          "https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png",
      }).unwrap();
      toast({
        title: "Registration Successful",
        description: `Please activate your email: ${data.email}`,
      });
      router.push("/login");
    } catch (error: any) {
      console.error("Failed to register:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error?.data?.message,
      });
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center bg-gray-100">
      <Card className="w-[600px] shadow-md p-3 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Create Your Account
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGithub />
              Github
            </Button>
            <Button
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
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        id="name"
                        placeholder="Your Name"
                        className="py-2 mt-1"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col w-full">
                  <Label htmlFor="email">Email</Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                <div className="flex flex-col w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^(\+8801|01)[3-9]\d{8}$/,
                        message:
                          "Please enter a valid Bangladeshi phone number",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="phone"
                          placeholder="Enter your Phone Number"
                          className="py-2 mt-1"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col w-full">
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
                <div className="flex flex-col w-full">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Confirm Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                        message: "Invalid confirm password. Try again",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          type="password"
                          id="confirmPassword"
                          placeholder="Re-enter your Password"
                          className="py-2 mt-1"
                        />
                        {errors.confirmPassword && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              {isLoading ? "Loading..." : "Create Account"}
            </Button>
          </form>
          <CardDescription className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              Login
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
