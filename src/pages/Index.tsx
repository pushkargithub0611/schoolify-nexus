
import { motion } from "framer-motion";
import { Brain, GraduationCap, Users, IndianRupee, School } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced analytics and personalized recommendations for better decision making"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Tenant Architecture",
      description: "Secure and scalable platform supporting multiple schools simultaneously"
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      title: "Cost-Effective",
      description: "Affordable solutions tailored for Indian educational institutions"
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "Comprehensive Management",
      description: "Complete school management solution from admissions to alumni"
    }
  ];

  const stats = [
    { number: "500+", label: "Schools" },
    { number: "1M+", label: "Students" },
    { number: "98%", label: "Satisfaction" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center justify-center section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-6">
              Transform Your School Management
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Education Management with AI-Powered ERP
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              The complete school management solution designed specifically for Indian educational institutions
            </p>
            <button className="glass px-8 py-4 rounded-lg text-white font-medium hover:bg-white/30 transition-all">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose Our Platform?
            </motion.h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Streamline your school operations with our comprehensive suite of tools and features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl card-hover"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-50">
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
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
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
    </div>
  );
};

export default Index;
