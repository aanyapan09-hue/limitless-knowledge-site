import PageShell from "@/components/PageShell";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch shortly. 🎉");
  };

  return (
    <PageShell>
      <section className="container py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="chip bg-sun mb-4">Enroll for Summer 2026</span>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
            Save your camper's spot.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Spots are limited. Fill out the form and we'll follow up with payment, dates,
            and a welcome packet.
          </p>
          <ul className="space-y-3">
            {[
              "9 days of camp + 4 special event days",
              "Grades 4–6 welcome (sibling discount available)",
              "All materials included (except shirt for tie-dye day)",
              "Pizza party + custom camp shirt",
            ].map((b) => (
              <li key={b} className="flex gap-3 font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="pop-card p-6 md:p-8 bg-card">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gradient-lilac border-2 border-foreground shadow-pop mx-auto flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl mb-3">You're on the list!</h2>
              <p className="font-medium">
                We'll email you within 48 hours with next steps and payment info.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display text-3xl mb-4">Registration form</h2>

              <Field label="Parent / Guardian Name" required>
                <input required className="input-pop" name="parent" />
              </Field>
              <Field label="Email" required>
                <input required type="email" className="input-pop" name="email" />
              </Field>
              <Field label="Phone">
                <input className="input-pop" name="phone" type="tel" />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Camper Name" required>
                  <input required className="input-pop" name="camper" />
                </Field>
                <Field label="Grade (Fall 2026)" required>
                  <select required className="input-pop" name="grade" defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>3rd</option>
                    <option>4th</option>
                    <option>5th</option>
                    <option>6th</option>
                  </select>
                </Field>
              </div>

              <Field label="Allergies or notes">
                <textarea className="input-pop min-h-[88px]" name="notes" />
              </Field>

              <Field label="How did you hear about us?">
                <select className="input-pop" name="source" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Word of mouth</option>
                  <option>Social media</option>
                  <option>Flyer</option>
                  <option>School / teacher</option>
                  <option>Other</option>
                </select>
              </Field>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 hover:-translate-x-1 transition-transform"
              >
                Submit Registration
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Submitting just sends us your interest — no payment required yet.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-bold mb-1.5 block">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
