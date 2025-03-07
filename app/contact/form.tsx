"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LucideLoader2 } from "lucide-react";
import { useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { SaveSubmission } from "@/lib/actions/contact";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name is required" }).max(50),
  lastName: z.string(),
  emailAddress: z.string().optional().or(z.string().email()),
  phoneNumber: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be exactly 10 digits.",
  }),
  message: z.string().min(1).max(1000),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function SaveFormData() {
    await form.trigger();

    if (form.formState.isValid) {
      const success = await SaveSubmission(form.getValues());
      if (success) {
        setSubmitted(true);
        toast.success(
          "We've received your enquiry! Someone from our team will reach out shortly."
        );
      }
    }
  }

  const [_, formAction, pending] = useActionState(SaveFormData, null);

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="w-full grow space-y-2 border bg-gray-100 p-4 md:max-w-xl md:space-y-4 md:p-10 font-montesserat"
      >
        <div className="flex flex-col gap-3 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormLabel>
                  First Name<span className="text-xs"> *</span>
                </FormLabel>
                <FormControl>
                  <Input className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="md:w-1/2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input className="bg-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number<span className="text-xs"> *</span>
              </FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message<span className="text-xs"> *</span>
              </FormLabel>
              <FormControl>
                <Textarea className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          aria-disabled={pending}
          disabled={pending || submitted}
          className="w-full grow bg-iorange"
        >
          {pending ? (
            <LucideLoader2 className="h-8 animate-spin" />
          ) : submitted ? (
            <Check />
          ) : (
            <p>Submit</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
