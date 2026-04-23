"use client";

import { Mailbox, X } from "lucide-react";
import { useState } from "react";

const win = (typeof window !== "undefined" ? window : {}) as Record<string, unknown>;

export default function Newsletter() {
   const [email, setEmail] = useState("");
   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
   const [message, setMessage] = useState("");

   function handleSubmit(e: { preventDefault(): void }) {
      e.preventDefault();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
      setStatus("loading");

      const callbackName = `mc_callback_${Date.now()}`;
      const url =
         `https://aloohelectricals.us5.list-manage.com/subscribe/post-json` +
         `?u=63fafc634bad5594e96494105&id=2ff6f47093&f_id=00b3bcedf0` +
         `&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;

      const script = document.createElement("script");
      script.src = url;

      win[callbackName] = (data: { result: string; msg: string }) => {
         delete win[callbackName];
         document.body.removeChild(script);

         if (data.result === "success") {
            setStatus("success");
            setEmail("");
         } else {
            setStatus("error");
            setMessage(data.msg.replace(/<[^>]+>/g, ""));
         }
      };

      script.onerror = () => {
         delete win[callbackName];
         document.body.removeChild(script);
         setStatus("error");
         setMessage("Something went wrong. Please try again.");
      };

      document.body.appendChild(script);
   }

   return (
      <div className="relative">
         <form
            onSubmit={handleSubmit}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="flex flex-col gap-4 lg:w-2/3 bg-mauve-800 p-4 rounded-md"
         >
            <div className="flex items-center gap-3">
               <Mailbox color="white" size={18} />
               <p className="text-white">Subscribe our newsletters</p>
            </div>
            <input
               type="email"
               name="EMAIL"
               id="mce-EMAIL"
               placeholder="email address"
               autoCapitalize="off"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="border border-mauve-600 rounded-lg p-2 placeholder:text-neutral-500 text-white focus:bg-mauve-700"
            />
            {/* Mailchimp bot protection — do not remove */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
               <input type="text" name="b_63fafc634bad5594e96494105_2ff6f47093" tabIndex={-1} defaultValue="" />
            </div>
            <input
               type="submit"
               name="subscribe"
               id="mc-embedded-subscribe"
               value={status === "loading" ? "Subscribing…" : "Subscribe"}
               disabled={status === "loading"}
               className="bg-white p-2 rounded-lg font-semibold hover:bg-neutral-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            />
            {status === "error" && (
               <p className="text-red-400 text-sm">{message || "Something went wrong. Please try again."}</p>
            )}
         </form>

         {status === "success" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
               <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center space-y-4">
                  <div className="flex justify-end">
                     <button
                        onClick={() => setStatus("idle")}
                        className="text-neutral-400 hover:text-neutral-600"
                        aria-label="Close"
                     >
                        <X size={20} />
                     </button>
                  </div>
                  <div className="text-4xl">🎉</div>
                  <h2 className="text-xl font-bold text-neutral-800">Successfully Subscribed!</h2>
                  <p className="text-neutral-500 text-sm">
                     Thank you for subscribing to the Alooh Electricals newsletter. We&apos;ll keep you updated.
                  </p>
                  <button
                     onClick={() => setStatus("idle")}
                     className="w-full bg-mauve-900 text-white py-2 rounded-lg font-semibold hover:bg-mauve-800"
                  >
                     Done
                  </button>
               </div>
            </div>
         )}
      </div>
   );
}
