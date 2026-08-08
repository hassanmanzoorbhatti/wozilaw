import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitEnquiry, enquirySchema, type EnquiryInput } from "@/lib/enquiries.functions";
import { Eyebrow } from "./SiteUi";
import { Reveal } from "@/components/motion/Reveal";

const SERVICE_OPTIONS = [
  "Cross-Border Disputes",
  "Property Law",
  "Criminal Defence",
  "Bilingual Legal Advisory",
  "Financial Claims & Debt Recovery",
  "Business & Legal Disputes",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full border border-clause-border bg-clause-surface px-4 py-3.5 font-grotesk text-[15px] text-clause-cream placeholder:text-clause-muted/70 outline-none transition-colors focus:border-clause-pink";

const labelBase =
  "font-grotesk text-[12px] font-semibold uppercase tracking-[0.14em] text-clause-muted";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="font-grotesk text-[13px] leading-[1.5] text-clause-pink">
      {message}
    </p>
  );
}

export function ConsultationForm() {
  const submit = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = enquirySchema.safeParse(raw);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("error");
      setErrorMsg("Please check the highlighted fields and try again.");
      return;
    }

    const payload: EnquiryInput = parsed.data;

    setFieldErrors({});
    setStatus("submitting");
    setErrorMsg("");
    try {
      await submit({ data: payload });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly.",
      );
    }
  }


  if (status === "success") {
    return (
      <Reveal>
        <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-16 text-center">
          <div
            className="flex h-16 w-16 items-center justify-center border border-clause-border bg-clause-surface"
            style={{ borderRadius: "1px" }}
          >
            <Check className="h-7 w-7 text-clause-sage" strokeWidth={1.5} />
          </div>
          <h3 className="mt-7 font-serif-display text-[26px] leading-[1.2] text-clause-heading md:text-[30px]">
            Thank you — your enquiry is on its way.
          </h3>
          <p className="mt-4 max-w-[420px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
            Our team will review your message and be in touch shortly to guide you through the next
            step. For anything urgent, please call our London office.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 inline-flex min-h-[48px] items-center gap-3 border border-clause-line px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-cream transition-colors duration-300 hover:bg-clause-pink/[0.06]"
            style={{ borderRadius: "1px" }}
          >
            Send another enquiry
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col">
        <Eyebrow>Request a Consultation</Eyebrow>
        <p className="mt-4 max-w-[420px] font-grotesk text-[15px] leading-[1.7] text-clause-muted md:text-[16px]">
          Tell us briefly how we can help and our team will guide you through the next step.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={labelBase}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputBase}
              style={{ borderRadius: "1px" }}
              disabled={status === "submitting"}
            />
            <FieldError message={fieldErrors["name"]} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelBase}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputBase}
                style={{ borderRadius: "1px" }}
                disabled={status === "submitting"}
              />
              <FieldError message={fieldErrors["email"]} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelBase}>
                Phone <span className="text-clause-muted/60 normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="020 8343 6000"
                className={inputBase}
                style={{ borderRadius: "1px" }}
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="service" className={labelBase}>
              Area of law <span className="text-clause-muted/60 normal-case tracking-normal">(optional)</span>
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              className={`${inputBase} cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
              style={{
                borderRadius: "1px",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%235c6459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              }}
              disabled={status === "submitting"}
            >
              <option value="" className="text-clause-muted">
                Select an area…
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={labelBase}>
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="A short summary of your matter…"
              className={`${inputBase} resize-y`}
              style={{ borderRadius: "1px" }}
              disabled={status === "submitting"}
            />
            <FieldError message={fieldErrors["message"]} />
          </div>
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="mt-6 border border-clause-pink/40 bg-clause-pink/[0.04] px-4 py-3 font-grotesk text-[14px] leading-[1.5] text-clause-pink"
            style={{ borderRadius: "1px" }}
          >
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group mt-9 inline-flex min-h-[52px] w-full items-center justify-center gap-3 border border-clause-border bg-clause-pink px-6 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-clause-onaccent transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          style={{ borderRadius: "1px" }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </>
          )}
        </button>

        <p className="mt-5 max-w-[420px] font-grotesk text-[13px] leading-[1.6] text-clause-muted">
          Your details are used only to respond to your enquiry. We won't share your information with
          third parties.
        </p>
      </form>
    </Reveal>
  );
}
