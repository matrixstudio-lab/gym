"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";
type Errors = Partial<Record<"name" | "email" | "phone" | "goal", string>>;

const GOALS = ["Build Strength", "Lose Fat", "Compete", "General Fitness"];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [goal, setGoal] = useState(GOALS[0]);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (phone && !/^[+()\-\s\d]{7,}$/.test(phone))
      next.phone = "Enter a valid phone number.";

    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    window.setTimeout(() => {
      setState("success");
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <SectionHeading
            eyebrow="Free Day Pass"
            title="Come Lift"
            accent="With Us"
          />
          <p className="mt-6 max-w-md text-bone/70 leading-relaxed">
            One free training day, on us. Fill out the form and a coach will
            reach out within one business day to lock in your session and
            match you with the right class.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-sm text-bone/70">
              <MapPin size={18} className="text-beast shrink-0" />
              Sector 1, Salt Lake City, Kolkata 700064
            </div>
            <div className="flex items-center gap-3 text-sm text-bone/70">
              <Phone size={18} className="text-beast shrink-0" />
              +91 98300 12891
            </div>
            <div className="flex items-center gap-3 text-sm text-bone/70">
              <Mail size={18} className="text-beast shrink-0" />
              coach@barbellbeast.studio
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl border border-charcoal-2 bg-charcoal p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <CheckCircle2 size={52} className="text-beast" />
                <h3 className="font-display text-2xl uppercase">
                  Pass Requested
                </h3>
                <p className="text-bone/60 max-w-sm">
                  We&apos;ve got your info. A coach will call or email you within
                  one business day to schedule your free training day.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setState("idle");
                    setErrors({});
                  }}
                >
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                noValidate
                className="grid sm:grid-cols-2 gap-6"
              >
                <Field
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  error={errors.name}
                  placeholder="Arjun Sen"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={errors.email}
                  placeholder="arjun@email.com"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  error={errors.phone}
                  placeholder="+91 98300 12345"
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="goal"
                    className="font-mono text-xs uppercase tracking-wide text-bone/60"
                  >
                    Primary Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="h-12 min-h-11 rounded-lg bg-ink border border-charcoal-2 px-3 text-sm text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beast"
                  >
                    {GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-wide text-bone/60"
                  >
                    Anything we should know? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Injuries, experience level, schedule preferences…"
                    className="rounded-lg bg-ink border border-charcoal-2 px-3 py-2.5 text-sm text-bone placeholder:text-bone/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beast resize-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={state === "submitting"}
                    className="w-full"
                  >
                    {state === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Booking Your Session…
                      </>
                    ) : (
                      "Claim My Free Day Pass"
                    )}
                  </Button>
                  <p className="mt-3 text-xs text-bone/40 text-center">
                    No payment info required. One pass per new lifter.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-wide text-bone/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "h-12 min-h-11 rounded-lg bg-ink border px-3 text-sm text-bone placeholder:text-bone/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beast",
          error ? "border-red-500/60" : "border-charcoal-2"
        )}
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
