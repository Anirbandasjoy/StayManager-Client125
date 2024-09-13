"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  useCurrentUserQuery,
  useUpdateAccountPasswordMutation,
} from "@/redux/api/baseApi";
import { toast } from "@/components/ui/use-toast";

type FormValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const Account = () => {
  const { data: loginUser } = useCurrentUserQuery();
  const [setUpdatePassword, { isLoading, error }] =
    useUpdateAccountPasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await setUpdatePassword({
        oldPassword: data?.oldPassword,
        newPassword: data?.newPassword,
        confrimPassword: data?.confirmPassword,
      }).unwrap();
      toast({
        title: "Password updated",
      });
      reset();
    } catch (error: any) {
      if (error?.data?.statusCode === 401) {
        toast({
          variant: "destructive",
          title: "Old Password dot't match",
          description: "Please old password correct send.",
        });
      } else if (error?.data?.statusCode === 403) {
        toast({
          variant: "destructive",
          title: "newPassword and confrimpassword don't match",
          description: "Please send mathch password",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Credential.",
          description: "There was a problem with your request.",
        });
      }
      console.log(error);
    }
  };

  return (
    <div className="col-span-12 md:col-span-9  sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Account</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-[15px]">
        Update your account settings. Set your preferred language and timezone.
      </p>

      <div className="space-y-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              className="w-full focus:ring-0 focus:border-red-100"
              value={loginUser?.payload?.name}
            />

            <p className="text-gray-500 text-xs dark:text-gray-400">
              This is the name that will be displayed on your profile and in
              emails.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h1 className="text-sm font-medium">Update Password</h1>
            <div className="space-y-2 ">
              <Input
                id="oldPassword"
                type="password"
                placeholder="Old Password"
                {...register("oldPassword", {
                  required: "Old password is required",
                })}
              />
              {errors.oldPassword && (
                <p className="text-red-500 text-xs">
                  {errors.oldPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2 ">
              <Input
                id="newPassword"
                type="password"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                    message: "Invalid password. Try again",
                  },
                })}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2 ">
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                    message: "Invalid password. Try again",
                  },
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Update Account Button */}
          <div className="space-x-3">
            {loginUser?.payload?.googleId || loginUser?.payload?.githubId ? (
              <Button
                type="button"
                className="mt-6 text-xs dark:bg-zinc-950 dark:text-white dark:border dark:border-gray-700 cursor-not-allowed w-full md:w-auto"
              >
                {isLoading ? "Loading..." : "Update account"}
              </Button>
            ) : (
              <Button
                type="submit"
                className="mt-6 text-xs w-full md:w-auto dark:bg-zinc-950 dark:text-white dark:border dark:border-gray-700"
              >
                {isLoading ? "Loading..." : "Update account"}
              </Button>
            )}

            <Button
              type="button"
              className="mt-6 w-full text-xs dark:text-white bg-red-500 hover:bg-red-400 md:w-auto"
            >
              Delete account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
