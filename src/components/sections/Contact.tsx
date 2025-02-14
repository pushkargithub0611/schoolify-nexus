import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { Mail, Twitter, Linkedin, Facebook, Instagram, Phone, MapPin } from "lucide-react";

interface ContactProps {
  onSubmit: (data: any) => void;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  errors: Record<string, any>;
}

export const Contact = ({ onSubmit, register, handleSubmit, errors }: ContactProps) => {
  return (
    <section className="relative bg-[#0EA5E9] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,32L1440,320L0,320Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect!</h2>
            <p className="text-gray-200 mb-8">
              Fill out the form below to connect with our sales team to discuss how SamarthX can help with your specific school or district needs.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-100">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  {...register("phone")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/356d96ee-1c50-486b-acd9-e989df32791b.png" 
                alt="Students using computers" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
