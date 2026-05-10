"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import backImage from "@/public/images/warehouseImage.avif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backImage}
            alt="Contact Background"
            width={2000}
            height={1200}
            className="h-full w-full scale-105 object-cover opacity-20 animate-soft-float"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(213,173,54,0.2),rgba(2,6,23,0.05),rgba(29,78,216,0.2))] bg-[length:220%_220%] animate-bg-pan" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="mb-6 animate-fade-up text-4xl font-black text-white md:text-6xl">
            Get In Touch
          </h1>
          <p
            className="animate-fade-up text-xl font-bold uppercase tracking-widest text-secondary"
            style={{ animationDelay: "120ms" }}
          >
            We'd Love to Hear From You
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Contact Information Cards */}
            <div className="space-y-8 lg:col-span-1">
              {/* Email Card */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-blue-500/20 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Email
                  </h3>
                  <p className="text-slate-600">
                    <a
                      href="mailto:info@globitimports.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      info@globitimports.com
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-yellow-50 p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-yellow-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-secondary/20 p-3">
                    <Phone className="h-6 w-6 text-custom-green" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Phone
                  </h3>
                  <p className="text-slate-600">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-custom-green transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-purple-500/20 p-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Location
                  </h3>
                  <p className="text-slate-600">Shanghai, China</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Serving customers worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="rounded-2xl border border-slate-200 bg-white  p-8 shadow-md">
                <h2 className="mb-2 text-2xl font-bold text-slate-900">
                  Send us a Message
                </h2>
                <p className="mb-8 text-slate-600">
                  Have a question or want to discuss your project? Fill out the
                  form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Hope Nelson"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hope@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+233 123 456 789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="flex w-full min-w-0 rounded-md border border-input bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Message */}
                  {submitMessage && (
                    <div
                      className={`rounded-lg p-4 text-sm font-medium ${
                        submitMessage.includes("successfully")
                          ? "bg-green-50 text-green-800"
                          : "bg-red-50 text-red-800"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Not Ready to Send a Message?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Browse our FAQs or learn more about our services to find quick
            answers.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center sm:items-center">
            <a href="/blog" className="inline-block">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Read Our Blog
              </Button>
            </a>
            <a href="/services" className="inline-block">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
