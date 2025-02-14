import { motion } from "framer-motion";
import { Brain, GraduationCap, Users, IndianRupee, School } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Index = () => {
  const features = [{
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Insights",
    description: "Advanced analytics and personalized recommendations for better decision making"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-Tenant Architecture",
    description: "Secure and scalable platform supporting multiple schools simultaneously"
  }, {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Cost-Effective",
    description: "Affordable solutions tailored for Indian educational institutions"
  }, {
    icon: <School className="w-6 h-6" />,
    title: "Comprehensive Management",
    description: "Complete school management solution from admissions to alumni"
  }];
  const stats = [{
    number: "500+",
    label: "Schools"
  }, {
    number: "1M+",
    label: "Students"
  }, {
    number: "98%",
    label: "Satisfaction"
  }, {
    number: "24/7",
    label: "Support"
  }];
  const carouselImages = [{
    url: "https://images.unsplash.com/photo-1613898239254-8c8f384c2336",
    caption: "Modern Digital Classrooms",
    description: "Experience next-generation learning environments powered by AI and cutting-edge technology"
  }, {
    url: "https://images.unsplash.com/photo-1627556704302-624286467c65",
    caption: "Interactive Learning Experience",
    description: "Enable engaging and interactive learning experiences with our comprehensive digital tools"
  }, {
    url: "https://images.unsplash.com/photo-1617529497471-9218633199c0",
    caption: "Smart Education Solutions",
    description: "Implement smart solutions that transform traditional education into modern learning experiences"
  }, {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    caption: "Empowering Education",
    description: "Empower educators with tools that make teaching more effective and learning more engaging"
  }];
  const floatingAnimation = {
    initial: {
      y: 0
    },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-12 overflow-hidden rounded-2xl bg-zinc-400 hover:bg-zinc-300">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel - Left side with larger size */}
            <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative w-full max-w-3xl mx-auto lg:mx-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselImages.map((image, index) => <CarouselItem key={index}>
                      <motion.div initial={{
                    opacity: 0,
                    scale: 0.95
                  }} animate={{
                    opacity: 1,
                    scale: 1
                  }} transition={{
                    delay: index * 0.1
                  }} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                        <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="text-white text-2xl font-bold mb-3">
                              {image.caption}
                            </h3>
                            <p className="text-white/90 text-lg">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 hover:bg-white/20 text-white border-none" />
                <CarouselNext className="hidden md:flex -right-4 bg-white/10 hover:bg-white/20 text-white border-none" />
              </Carousel>
            </motion.div>

            {/* Text Content - Right side */}
            <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="text-left lg:pl-12" style={{
            animationDelay: "0.3s"
          }}>
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="inline-block px-6 py-2 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] text-lg font-medium mb-8">
                Transform Your School Management
              </motion.span>
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Revolutionize Education Management
              </motion.h1>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-2xl text-white/70 mb-12 leading-relaxed">
                The complete school management solution designed specifically for Indian educational institutions, powered by cutting-edge AI technology.
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }}>
                <button className="bg-[#9b87f5] hover:bg-[#8b77e5] px-8 py-4 rounded-xl text-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/25">
                  Get Started Today
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </motion.h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Streamline your school operations with our comprehensive suite of tools and features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass p-6 rounded-xl card-hover">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto">
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
    </div>;
};
export default Index;