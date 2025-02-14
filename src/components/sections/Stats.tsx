
import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-neutral-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-neutral-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
