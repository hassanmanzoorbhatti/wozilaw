import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(120, "That name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email address")
    .max(200, "That email is too long"),
  phone: z
    .string()
    .trim()
    .max(40, "That phone number is too long")
    .optional()
    .or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us briefly how we can help (at least 10 characters)")
    .max(4000, "Your message is too long (4,000 characters maximum)"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const row = {
      name: data.name,
      email: data.email,
      phone: data.phone?.trim() || null,
      service: data.service?.trim() || null,
      message: data.message,
      status: "new" as const,
    };

    const { error } = await supabaseAdmin
      .from("enquiries")
      .insert(row)
      .select("id")
      .single();

    if (error) {
      console.error("[enquiries] insert failed:", error.message);
      throw new Error("We couldn't send your enquiry right now. Please try again or call us.");
    }

    return { ok: true as const };
  });
