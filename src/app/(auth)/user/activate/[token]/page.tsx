"use client";
import { toast } from '@/components/ui/use-toast';
import { useUserRegistrationMutation } from '@/redux/api/baseApi';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = (): JSX.Element => {
    const router = useRouter();
    const params = useParams();
    const { token } = params as { token: string };

    const [error, setError] = useState<boolean>(false);
    const [setUserRegistration, { data, isLoading }] = useUserRegistrationMutation();

    const registration = async (): Promise<void> => {
        try {
            await setUserRegistration({
                token: token
            }).unwrap();
            router.push("/");
            toast({
                title: "Activation Succesfull",
                description: data?.message,
            });
        } catch (error: any) {
            console.error("Failed to login:", error);
            toast({
                variant: "destructive",
                title: "Invalid Credential.",
                description: error?.data?.message,
            });
            setError(true);
        }
    };

    useEffect(() => {
        registration();
    }, []);

    return (
        <div className='flex items-center justify-center h-[100vh] text-2xl font-bold'>
            {
                isLoading ? <>Loading ......</> :
                    !error ? <>..... Activating Account!</> :
                        <div className='text-red-500'>Registration Failed!</div>
            }
        </div>
    );
};

export default Page;
