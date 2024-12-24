import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  type: z.enum(["customer", "partner", "investor"]),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive communications",
  }),
});

export type FormValues = z.infer<typeof formSchema>;