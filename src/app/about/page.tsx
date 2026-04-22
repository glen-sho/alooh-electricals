import Link from "next/link";
import React from "react";

export default function About() {
   const points = [
      {
         id: 1,
         title: "The New Horizon",
         description:
            "At New Orient, we’ve embraced change as a catalyst for growth. We take immense pride in being the pioneers—the first company in Ghana to manufacture conduit boxes. This milestone showcases our visionary CEO’s commitment to innovation and leadership. Our aim is clear: to produce all electrical goods here in Ghana and lead the charge in developing a self-sustaining industry.",
      },
      {
         id: 2,
         title: "Building a Community",
         description:
            "We don’t just make products; we build relationships and communities. New Orient’s mission extends beyond manufacturing. We are passionate about creating opportunities and jobs right here in Ghana. By prioritizing local production, we contribute to the nation’s economic growth and help shape a better future for our fellow Ghanaians.",
      },
      {
         id: 3,
         title: "Educating the Industry",
         description:
            "Knowledge is power, and we believe in sharing it. New Orient is dedicated to educating the electrical industry, providing insights, and promoting best practices. Our journey is not just about making products; it’s about elevating the entire industry, ensuring safety, sustainability, and excellence in every project.",
      },
   ];

   return (
      <div className="mt-20">
         <div className="h-[60vh] relative bg-[url(/about.jpg)] bg-cover bg-no-repeat parallex">
            <h1 className="text-8xl text-white absolute -bottom-5 uppercase font-bold">About us</h1>
         </div>
         <div className="bg-[#67494a]">
            <div className="max-w-7xl mx-auto py-20 space-y-12">
               <div className="text-neutral-300 space-y-4">
                  <p className="text-2xl">
                     Welcome to New Orient, where a rich history in the electrical goods industry meets a vision for a
                     brighter future. Founded in 2016 by the industry veteran, Alfred Kofi Gyan, New Orient is more than
                     just a company – it’s a commitment to quality, innovation, and community building.
                  </p>
               </div>
               <div className="text-neutral-300 space-y-4">
                  <h1 className="text-5xl font-bold">Our Founder’s Legacy</h1>
                  <p className="text-2xl">
                     Alfred Kofi Gyan, a luminary in the wholesale and retail electrical goods sector with over three
                     decades of experience, embarked on a journey to redefine the landscape. His expertise, garnered
                     over the years, is the cornerstone upon which New Orient was built. His vision was clear: to
                     transition from a wholesaler and usher in a new era of manufacturing excellence right here in
                     Ghana.
                  </p>
               </div>
            </div>
         </div>
         <div className="">
            <div className="max-w-7xl mx-auto py-20 space-y-12">
               <div className="grid grid-cols-3 gap-4">
                  {points.map((item) => (
                     <article key={item.id} className="space-y-2">
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                        <p className="text-xl">{item.description}</p>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
