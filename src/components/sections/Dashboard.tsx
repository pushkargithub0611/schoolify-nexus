import { motion } from "framer-motion";
import { Building, Users, FileBarChart, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Dashboard = () => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-white">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Educational Impact Dashboard
          </h2>
          <p className="text-neutral-600">
            Track and analyze educational progress across India
          </p>
        </motion.div>
        <Select>
          <SelectTrigger className="w-[180px] mb-8">
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="karnataka">Karnataka</SelectItem>
            <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
          </SelectContent>
        </Select>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                Total Schools
              </h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-2">
              4,500+
            </p>
            <p className="text-neutral-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>
                15% increase from last year
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                Total Students
              </h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-2">
              1M+
            </p>
            <p className="text-neutral-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>
                25% increase from last year
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileBarChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                Avg Performance
              </h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-2">
              84.2%
            </p>
            <p className="text-neutral-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>
                5% increase from last year
              </span>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img src="/lovable-uploads/dc6761db-f908-44c9-8d7c-3b4c7faa6444.png" alt="School Performance Dashboard" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};
