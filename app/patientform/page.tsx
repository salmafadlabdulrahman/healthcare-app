"use client";

import LogoImg from "@/components/LogoImg";
import Image from "next/image";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

const PatientForm = () => {
  const [date, setDate] = React.useState<Date>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[90%] m-auto mt-[2em]">
      <LogoImg />
      <div>
        <div className="mt-[3em]">
          <div className="flex items-center gap-2">
            <h1 className="text-[1.7em] font-semibold">Welcome </h1>
            <Image
              src={"/assets/icons/welcome.png"}
              alt="welcoming hand"
              height={30}
              width={30}
              unoptimized
            />
          </div>
          <p className="text-dark-600 font-medium">
            Tell us more about yourself
          </p>

          <div className="mt-[2em]">
            <p className="font-semibold text-[1.6em]">Personal Information</p>
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

                <div className="md:flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem className="md:w-[50%] mb-[2em] md:m-0">
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
                      <FormItem className="md:w-[50%]">
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
                </div>

                <div className="mt-[3em]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-[280px] h-[45px] justify-start text-left font-normal bg-dark-400 hover:bg-dark-200 hover:text-white border-dark-500 text-white",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span className="text-dark-600 font-semibold">Select your birthdate</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-dark-200 border-dark-500">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
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
        <div></div>
      </div>
    </div>
  );
};

export default PatientForm;
