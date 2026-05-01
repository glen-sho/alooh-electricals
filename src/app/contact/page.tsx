"use client";
import Socials from "@/components/Socials";
import { ADDRESS, EMAIL, PHONE, WA_GENERAL } from "@/data/products";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState<Record<string, string>>({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      const subject = encodeURIComponent(`Website Enquiry from ${form.name}`);
      const body = encodeURIComponent(
         `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
      );
      if (typeof window !== "undefined") {
         window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      }
      toast.success("Your email client should now be open.", { description: ` If not, email us directly at ${EMAIL}` });
      setLoading(false);
   }

   return (
      <div>
         <div className="max-w-7xl mx-auto pt-10 lg:pt-12 pb-20">
            <div className="">
               <div className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-bold">Get in touch</h1>
                  <p className="text-lg">
                     {` We'd like to hear from you, whether you have a question need support , or want to learnmore
                     aboutour services.`}
                  </p>

                  <div className="grid grid-cols-2 items-center gap-12">
                     <div className="my-4">
                        <h2 className="text-xl font-medium mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                           {[
                              {
                                 label: "Name",
                                 name: "name",
                                 type: "text",
                                 required: true,
                                 placeholder: "Your full name",
                              },
                              {
                                 label: "Email",
                                 name: "email",
                                 type: "email",
                                 required: true,
                                 placeholder: "your@email.com",
                              },
                              {
                                 label: "Phone Number",
                                 name: "phone",
                                 type: "tel",
                                 required: false,
                                 placeholder: "+233 ...",
                              },
                           ].map((f) => (
                              <div key={f.name}>
                                 <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide">
                                    {f.label} {f.required && "*"}
                                 </label>
                                 <input
                                    type={f.type}
                                    name={f.name}
                                    required={f.required}
                                    value={form[f.name]}
                                    onChange={handleChange}
                                    placeholder={f.placeholder}
                                    className="w-full border border-gray-200 rounded-[7px] px-3.5 py-2.5 text-sm outline-none focus:bg-stone-100"
                                 />
                              </div>
                           ))}
                           <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                                 Message *
                              </label>
                              <textarea
                                 name="message"
                                 required
                                 rows={5}
                                 value={form.message}
                                 onChange={handleChange}
                                 placeholder="How can we help you?"
                                 className="w-full border border-gray-200 rounded-[7px] px-3.5 py-2.5 text-sm text-gray-900 outline-none resize-none placeholder-gray-300"
                                 style={{ backgroundColor: "#fafafa" }}
                              />
                           </div>
                           <p className="text-gray-400 text-sm text-left">
                              * Opens your email client addressed to {EMAIL}
                           </p>
                           <button
                              type="submit"
                              className="w-fit text-white py-3 rounded-[7px] cursor-pointer text-sm font-medium hover:opacity-90 transition-opacity bg-primary px-6"
                           >
                              {loading ? <p className="animate-pulse"> Sending...</p> : "Send Message"}
                           </button>
                        </form>
                     </div>
                     <div className="space-y-4">
                        <div className="border border-gray-200 p-5 flex gap-4">
                           <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-mist-100">
                              <MessageCircle size={17} className="text-mist-500" />
                           </div>
                           <div>
                              <p className="font-bold uppercase tracking-widest mb-1.5">Phone / WhatsApp</p>
                              <a
                                 href={WA_GENERAL}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="block font-medium"
                              >
                                 {PHONE}
                              </a>
                              <p className="text-sm">Mon&ndash;Fri 8am&ndash;6pm</p>
                              <a
                                 href={WA_GENERAL}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-block mt-2.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-white hover:opacity-90 transition-opacity bg-whatsapp"
                              >
                                 WhatsApp Us
                              </a>
                           </div>
                        </div>

                        <div className="border border-gray-200 p-5 flex gap-4">
                           <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 bg-mist-100">
                              <MapPin size={17} className="text-mist-500" />
                           </div>
                           <div>
                              <p className="font-bold uppercase tracking-widest mb-1.5">Visit Us</p>
                              <p className="text-gray-700 leading-relaxed">{ADDRESS}</p>
                           </div>
                        </div>

                        <div className="border border-gray-200 p-5 flex gap-4">
                           <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0">
                              <Mail size={17} />
                           </div>
                           <div>
                              <p className="text-sm font-bold uppercase tracking-widest mb-1.5">Email Us</p>
                              <a href={`mailto:${EMAIL}`} className="hover:underline font-bold">
                                 {EMAIL}
                              </a>
                              <p className="mt-0.5">We reply the same day</p>
                           </div>
                        </div>
                        <Socials />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3690720711948!2d-0.033391725014080643!3d5.659643294321745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf80dbbabcbe97%3A0xe95c36e7759e5323!2sSparrow%20Cl%2C%20Ghana!5e0!3m2!1sen!2sng!4v1776867254342!5m2!1sen!2sng"
            width="100%"
            height="650"
            loading="lazy"
         ></iframe>
      </div>
   );
}
