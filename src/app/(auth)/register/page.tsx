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

interface IFormInputs {
  name: string;
  email: string;
  phone: string,
  password: string;
  confirmPassword: string;
}


const Register = () => {

  const router = useRouter();
  const [setProcessRegistration, { data, isLoading }] = useProcessRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const response = data

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {

    if (data.password !== data.confirmPassword) {
      return toast({
        title: "Validataion error.",
        description: "Password and confirm password will same.",
      })
    }

    try {

      await setProcessRegistration({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        profileImage: "https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
      }).unwrap();
      toast({
        title: "Registration Succesfull",
        description: `Please Active you email : ${data.email}`
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
    console.log(data);
  };

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

                  {/* Name */}
                  <Label htmlFor="name">Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: "name is required",
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="name"
                          placeholder="Enter your Name.."
                          className="py-6"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs">
                            {errors.name.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* email */}
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

                {/* pnone number  */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Pnone Number</Label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone Number is required",
                      pattern: {
                        value: /^(\+8801|01)[3-9]\d{8}$/,
                        message: "Please enter a valid Bangladeshi phone number",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="phone"
                          placeholder="Enter your Phone Number .."
                          className="py-6"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs">
                            {errors.phone.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* Password */}
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

                  {/* Confirm Password */}
                  <Label htmlFor="password">Confirm Password</Label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "confirmPassword is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                        message: "Invalid confirmPassword. Try again",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          type="password"
                          id="confirmPassword"
                          placeholder="Enter The Same Password"
                          className="py-6"
                        />
                        {errors.confirmPassword && (
                          <span className="text-red-500 text-xs">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
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