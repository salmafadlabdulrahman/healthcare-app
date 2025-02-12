"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import LogoImg from "@/components/LogoImg";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2).max(50),
  phonenumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be at most 15 digits." })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Invalid phone number format.",
    }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex items-start h-screen">
      <div className="w-[90%] m-auto pt-[3em] md:w-[80%] lg:w-[65%] xl:w-[50%] xl:p-[3em] h-screen ">
        {" "}
        <LogoImg />
        <h2 className="font-semibold text-[2.1em] mt-[1em]">Hi there, ...</h2>
        <p className="mt-[1em] text-dark-600 font-semibold">
          Get started with Appointements
        </p>
        <div className="pt-[1em]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="mb-[2em]">
                    <FormLabel className="text-dark-600">Full name</FormLabel>
                    <FormControl className="">
                      <div className="input-container-border-style">
                        <Image
                          src={"/assets/icons/user.svg"}
                          alt="user icon"
                          width={20}
                          height={20}
                          className="ml-3 absolute"
                        />
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="input-border-style "
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem className="mb-[2em]">
                    <FormLabel className="text-dark-600">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <div className="input-container-border-style">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="ml-3 absolute"
                        />
                        <Input
                          placeholder="+000342045334"
                          {...field}
                          className="input-border-style"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-dark-600">Email</FormLabel>
                    <FormControl>
                      <div className="input-container-border-style">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="ml-3 absolute"
                        />
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="input-border-style"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-green-500 w-full mt-[3em] h-[40px]"
              >
                Get Started
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden xl:block w-[50%] h-screen">
        <Image
          src={"/assets/images/onboarding-img.png"}
          alt="hero image"
          width={50}
          height={100}
          className="w-full h-full object-cover rounded-l-xl"
          unoptimized
        />
      </div>
    </div>
  );
};

export default SignUp;
