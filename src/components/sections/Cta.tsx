
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-neutral-600 mb-8">
            Join hundreds of schools already benefiting from our AI-powered ERP platform
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};
