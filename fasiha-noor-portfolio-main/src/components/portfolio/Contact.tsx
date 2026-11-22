import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact-form";
import { contact, links } from "@/lib/portfolio-data";

import { ExternalAction } from "./ExternalAction";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

const channels = [
  { icon: Mail, label: "Email", value: links.email ?? "Coming soon", href: links.email ? `mailto:${links.email}` : null, pending: "Email address" },
  { icon: Linkedin, label: "LinkedIn", value: links.linkedin ? "View profile" : "Coming soon", href: links.linkedin, pending: "LinkedIn profile" },
  { icon: Github, label: "GitHub", value: links.github ? "github.com/Fasiha-Noor" : "Coming soon", href: links.github, pending: "GitHub profile" },
];

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});

  const update = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    if (!links.email) {
      toast("Thanks for reaching out!", {
        description: "The contact email is being set up — please connect via GitHub in the meantime.",
      });
      return;
    }
    window.location.href = buildMailto(links.email, parsed.data);
    toast.success("Opening your email app…", { description: "Your message is ready to send." });
    setValues(empty);
  };

  const field = (key: keyof ContactInput) => ({
    id: `contact-${key}`,
    name: key,
    value: values[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
    className:
      "h-12 rounded-xl border-input bg-soft-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-teal aria-invalid:border-destructive",
  });

  const errorText = (key: keyof ContactInput) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="mt-1.5 text-xs font-medium text-destructive">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-on-dark sm:py-32">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-teal/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading tone="dark" eyebrow="Contact" title={contact.heading} description={contact.supporting} />
          <ul className="mt-10 space-y-3">
            {channels.map((c, i) => (
              <Reveal as="li" key={c.label} delay={100 + i * 80}>
                <ExternalAction
                  href={c.href}
                  pendingLabel={c.pending}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-on-dark/10 bg-on-dark/[0.04] p-4 text-left transition-all duration-300 hover:border-teal/60 hover:bg-on-dark/[0.07]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal text-on-dark transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-on-dark-muted">{c.label}</span>
                    <span className="block font-semibold">{c.value}</span>
                  </span>
                </ExternalAction>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] bg-card p-6 text-card-foreground shadow-lift sm:p-10"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-navy">Name</Label>
                <Input {...field("name")} placeholder="Your name" autoComplete="name" maxLength={100} />
                {errorText("name")}
              </div>
              <div>
                <Label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-navy">Email</Label>
                <Input {...field("email")} type="email" placeholder="you@example.com" autoComplete="email" maxLength={255} />
                {errorText("email")}
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-navy">Subject</Label>
              <Input {...field("subject")} placeholder="Internship, collaboration, project…" maxLength={150} />
              {errorText("subject")}
            </div>
            <div className="mt-5">
              <Label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-navy">Message</Label>
              <Textarea
                {...field("message")}
                rows={6}
                maxLength={2000}
                placeholder="Tell me a little about what you have in mind…"
                className="min-h-36 rounded-xl border-input bg-soft-white px-4 py-3 text-[15px] text-navy placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-teal aria-invalid:border-destructive"
              />
              {errorText("message")}
            </div>
            <Button type="submit" variant="teal" size="xl" className="mt-7 w-full sm:w-auto">
              Send Message <Send />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
