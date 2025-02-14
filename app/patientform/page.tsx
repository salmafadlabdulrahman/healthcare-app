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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiFormControl from "@mui/material/FormControl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  address: z.string().min(2).max(50),
  occupation: z.string().email().min(2),
  EmergencyContact: z.string().min(2).max(50),
  doctor: z.string({
    required_error: "Please select a doctor.",
  }),
  insuranceProvider: z.string().min(2),
  insurancePolicyNumber: z.string().min(2),
  allergies: z.string().optional(),
  currentMedication: z.string().min(2),
  familyMedHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identification: z.string({
    required_error: "Please select an identification type.",
  }),
  idNumber: z.string().min(2),
});

const doctorsList: { name: string; imagePath: string }[] = [
  { name: "Dr. Maya Cameron", imagePath: "dr-cameron.png" },
  { name: "Dr. Alyana Cruz", imagePath: "dr-cruz.png" },
  { name: "Dr. Leonard Green", imagePath: "dr-green.png" },
  { name: "Dr. Jasmine Lee", imagePath: "dr-lee.png" },
  { name: "Dr. Livingston", imagePath: "dr-livingston.png" },
  { name: "Dr. Peter Prestone", imagePath: "dr-peter.png" },
  { name: "Dr. Alex Ramirez", imagePath: "dr-remirez.png" },
  { name: "Dr. Hardlik Sharma", imagePath: "dr-sharma.png" },
];

const PatientForm = () => {
  const [date, setDate] = React.useState<Date>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      address: "",
      occupation: "",
      EmergencyContact: "",
      doctor: "",
      insuranceProvider: "",
      insurancePolicyNumber: "",
      allergies: "",
      currentMedication: "",
      familyMedHistory: "",
      pastMedicalHistory: "",
      identification: "",
      idNumber: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-[90%] m-auto mt-[2em] lg:mt-0 lg:w-full lg:pl-[3em]">
      {" "}
      <div className="lg:flex justify-between">
        <div className="lg:w-[65%] lg:pt-[2em] ">
          <LogoImg />
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
                  <div>
                    {" "}
                    {/*Personal Information */}
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem className="mb-[2em]">
                          <FormLabel className="text-dark-600">
                            Full name
                          </FormLabel>
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
                    <div className="md:flex items-center gap-2  ">
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
                            <FormLabel className="text-dark-600">
                              Email
                            </FormLabel>
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
                    <div className="mt-[3em] md:flex items-center justify-between gap-2">
                      <div className="w-full md:w-[50%]">
                        <p className="text-dark-600">Date of birth</p>
                        <Popover>
                          <PopoverTrigger asChild className="">
                            <div className="">
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full mt-[1em] h-[45px] justify-start text-left font-normal bg-dark-400 hover:bg-dark-200 hover:text-white border-dark-500 text-white",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                {" "}
                                {/*[280px] */}
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? (
                                  format(date, "PPP")
                                ) : (
                                  <span className="text-dark-600 font-semibold">
                                    Select your birthdate
                                  </span>
                                )}
                              </Button>
                            </div>
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

                      <div className="mt-[3em] md:mt-1 md:w-[50%]">
                        <MuiFormControl>
                          <FormLabel
                            id="demo-radio-buttons-group-label"
                            className="text-dark-600"
                          >
                            Gender
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <div className="flex flex-wrap gap-2 mt-[1em] ml-[.8em]">
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                                className="radio-btn"
                              />
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                                className="radio-btn"
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                                className="radio-btn"
                              />
                            </div>
                          </RadioGroup>
                        </MuiFormControl>
                      </div>
                    </div>
                    <div className="mt-[2em] ">
                      <div className="md:flex items-center gap-2 ">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%] ">
                              <FormLabel className="text-dark-600">
                                Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex: 14 street, New York, NY-5101"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="occupation"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Occupation
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Software Engineer"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="EmergencyContact"
                        render={({ field }) => (
                          <FormItem className="mb-[2em]">
                            <FormLabel className="text-dark-600">
                              Emergency Contact Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Guardian's Name"
                                {...field}
                                className="input-border-style"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>{" "}
                  {/*Personal Information */}
                  <div>
                    {/*Medical Information */}{" "}
                    <p className="font-semibold text-[1.6em]">
                      Medical Information
                    </p>
                    <div className="mt-[2em]">
                      <FormField
                        control={form.control}
                        name="doctor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-dark-600">
                              Primary Care physician
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="bg-dark-400 border border-dark-500 h-[50px]">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a doctor" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-dark-400 border border-dark-500 text-white ">
                                {doctorsList.map((doctor, i) => (
                                  <SelectItem
                                    value={doctor.name}
                                    className="rounded-lg "
                                    key={i}
                                  >
                                    <div className="flex items-center gap-2 ">
                                      <Image
                                        src={`/assets/images/${doctor.imagePath}`}
                                        alt="a doctor's image"
                                        width={30}
                                        height={30}
                                        unoptimized
                                        className="rounded-full"
                                      />
                                      <p className="font-semibold">
                                        {doctor.name}
                                      </p>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-[2em]">
                      <div className="md:flex gap-2">
                        <FormField
                          control={form.control}
                          name="insuranceProvider"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Insurance Provider
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:BlueCross"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="insurancePolicyNumber"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Insurance Policy Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:ABC123456"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="md:flex gap-2">
                        <FormField
                          control={form.control}
                          name="allergies"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Allergies (if any)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:Peanuts, Penicillin, Pollen"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="currentMedication"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Current Medication
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:Ibuprofen 200mg, Levothyroxine 50mcg"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="md:flex gap-2">
                        <FormField
                          control={form.control}
                          name="familyMedHistory"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Family Medical History(if relevant)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:Mother had breast cancer"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="pastMedicalHistory"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Past Medical History
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:Asthma diagnosis in childhood"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/*Medical Information */}
                  <div>
                    <p className="font-semibold text-[1.6em]">
                      Identification and Verification
                    </p>{" "}
                    {/*Identification and verification */}
                    <div>
                      <div className="mt-[2em]">
                        <FormField
                          control={form.control}
                          name="identification"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-dark-600">
                                Identification Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={"Birth Certificate"}
                              >
                                <FormControl className="bg-dark-400 border border-dark-500 h-[50px]">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Birth Certificate" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-dark-400 border border-dark-500 text-white ">
                                  <SelectItem
                                    value="Birth Certificate"
                                    className="rounded-md"
                                  >
                                    <p className="font-semibold">
                                      Birth Certificate
                                    </p>
                                  </SelectItem>

                                  <SelectItem
                                    value="Driving Licence"
                                    className="rounded-md"
                                  >
                                    <p className="font-semibold">
                                      Driving Licence
                                    </p>
                                  </SelectItem>

                                  <SelectItem
                                    value="Passport or id"
                                    className="rounded-md"
                                  >
                                    <p className="font-semibold">
                                      Passport or id
                                    </p>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-[2em]">
                        <FormField
                          control={form.control}
                          name="idNumber"
                          render={({ field }) => (
                            <FormItem className="mb-[2em] md:w-[50%]">
                              <FormLabel className="text-dark-600">
                                Identification Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ex:1234567"
                                  {...field}
                                  className="input-border-style"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/*Identification and verification */}
                  <Button
                    type="submit"
                    className="bg-green-500 w-full my-[3em] h-[40px]"
                  >
                    Submit and continue
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[20%]">
          <Image
            src={"/assets/images/register-img.png"}
            alt="side image"
            height={50}
            width={50}
            className="w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
