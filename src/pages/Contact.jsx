import { useState } from "react";
import PageHero from "../components/PageHero";

const CONTACT_EMAIL = "[your email address]";
const CONTACT_PHONE = "[your phone number]";
const CONTACT_ADDRESS = "[your office address]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        index="09"
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Reach out to discuss geospatial, environmental, or AI/ML solutions tailored to your needs."
      />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal">Email</h2>
            <p className="mt-2 text-lg text-grey-dark">{CONTACT_EMAIL}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal">Phone</h2>
            <p className="mt-2 text-lg text-grey-dark">{CONTACT_PHONE}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal">Office</h2>
            <p className="mt-2 text-lg text-grey-dark">{CONTACT_ADDRESS}</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-2xl border border-azure/30 bg-grey-light p-8 text-center">
              <h3 className="font-heading text-xl font-semibold text-navy">Thank you!</h3>
              <p className="mt-2 text-grey-dark/70">
                Your message has been received. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-grey-dark/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-grey-dark/20 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-azure/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-grey-dark/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-grey-dark/20 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-azure/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium text-grey-dark/80">
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-grey-dark/20 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-azure/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-grey-dark/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-grey-dark/20 px-4 py-2.5 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-azure/30"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
