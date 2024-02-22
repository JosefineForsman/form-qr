"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormValues } from "../types";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormControl, FormHelperText } from "@mui/material";
import ThankYouComponent from "./ThankYouComponent";

const schema: ZodType<FormValues> = z.object({
  name: z.string().min(2).max(30),
  company: z.string().min(2).max(30),
  email: z
    .string()
    .email()
    .refine((value) => !/(hotmail|gmail)\.(com|se)$/.test(value), {
      message: "Need to be a company email",
    }),
  gdpr: z.boolean().refine((value) => value === true, {
    message: "You must agree to the GDPR terms to continue",
  }),
});

const submitUser = async (data: FormValues) => {
  try {
    // Is there a better way than a for loop?
    const formData = new FormData();
    for (const key in data) {
      formData.append("Name", data.name);
      formData.append("Company", data.company);
      formData.append("Email", data.email);
    }

    const response = await fetch(
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL as string,
      {
        method: "POST",
        body: formData,
      }
    );
    const responseData = await response.text();
    console.log("Response data:", responseData);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Form data submitted successfully");
    return responseData;
  } catch (error) {
    console.error("There was an error submitting the form data:", error);
    return null;
  }
};

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseData, setResponseData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    console.log("Form data:", data);
    const response = await submitUser(data);
    if (response) {
      setIsSubmitted(true);
      setResponseData(response);
    }
    setIsLoading(false);
  };

  if (isSubmitted) {
    return <ThankYouComponent />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="Name"
        label="Name:"
        variant="outlined"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        id="Company"
        label="Company:"
        variant="outlined"
        {...register("company")}
        error={!!errors.company}
        helperText={errors.company?.message}
      />
      <TextField
        id="Email"
        label="Email:"
        variant="outlined"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          bgcolor: "blue !important",
          color: "white !important",
        }}
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
      <FormControl error={!!errors.gdpr}>
        <FormHelperText>{errors.gdpr?.message}</FormHelperText>
        <FormControlLabel
          control={<Checkbox {...register("gdpr")} />}
          label="By checking this box, I consent to my information being shared with Sitecore and SQLI & consent to receive communications about Sitecore’s and SQLI’s business in accordance with Sitecore’s Privacy Policy and SQLI's privacy policy. I understand that I can opt-out at any time."
          sx={{ ".MuiFormControlLabel-label": { fontSize: "0.8rem" } }}
        />
      </FormControl>
    </Box>
  );
};

export default ContactForm;
