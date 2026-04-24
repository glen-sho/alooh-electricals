import Socials from "@/components/Socials";
import { Briefcase, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
   return (
      <div>
         <div className="max-w-7xl mx-auto pt-10 lg:pt-40 pb-20 px-4">
            <div className="grid lg:grid-cols-[1.3fr_2fr] gap-4">
               <div className="">
                  <h1 className="text-4xl lg:text-7xl font-bold">Get in touch</h1>
                  <p className="text-lg">
                     {` We'd like to hear from you, whether you have a question need support , or want to learnmore
                     aboutour services.`}
                  </p>
                  <Socials />
               </div>
               <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
                  <div className="space-y-1">
                     <Phone className="bg-neutral-200/50 p-1 rounded-sm text-neutral-500" size={32} />
                     <h1 className="font-bold text-xl">Get in Touch</h1>
                     <p className="text-lg">Telephone: +233 24 408 1474</p>
                     <p className="text-lg">Landline: +233 30 338 9976</p>
                     <p className="font-bold text-blue-600 text-lg">hello@neworientafrica.com</p>
                  </div>
                  <div className="space-y-1">
                     <MapPin className="bg-neutral-200/50 p-1 rounded-sm text-neutral-500" size={32} />
                     <h1 className="font-bold text-xl">Visit Us</h1>
                     <p className="text-lg">4870 Sparrow Close Tema, Ghana</p>
                     <p className="text-lg"> Monday to Friday: 9am to 6pm</p>
                  </div>
                  <div className="space-y-1">
                     <Briefcase className="bg-neutral-200/50 p-1 rounded-sm text-neutral-500" size={32} />
                     <h1 className="font-bold text-xl">Work with Us?</h1>
                     <p className="text-lg">Together, we’ll shape a brighter future for Ghana’s electrical industry.</p>
                     <p className="font-bold text-blue-600 text-lg">glen@neworientafrica.com</p>
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
