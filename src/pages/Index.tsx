
import { motion } from "framer-motion";
import { Brain, GraduationCap, Users, IndianRupee, School, FileBarChart, TrendingUp, Building, Bell, NewspaperIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

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

  const newsItems = [{
    title: "Annual Science Fair 2024",
    date: "March 15, 2024",
    description: "Join us for an exciting showcase of student innovation and scientific discovery.",
    tag: "Event"
  }, {
    title: "New AI Learning Program",
    date: "March 10, 2024",
    description: "Introducing advanced AI-powered learning tools across all grade levels.",
    tag: "Academic"
  }, {
    title: "Sports Day Registration Open",
    date: "March 8, 2024",
    description: "Register now for the upcoming inter-school sports competition.",
    tag: "Sports"
  }];

  const notices = [{
    title: "Parent-Teacher Meeting",
    date: "March 20, 2024",
    description: "Schedule for Term 1 parent-teacher meetings now available.",
    priority: "High"
  }, {
    title: "School Bus Route Update",
    date: "March 12, 2024",
    description: "New routes added to accommodate increased student enrollment.",
    priority: "Medium"
  }, {
    title: "Library Hours Extended",
    date: "March 5, 2024",
    description: "Library will now remain open until 6 PM on weekdays.",
    priority: "Low"
  }];

  const resourceItems = [
    {
      title: "Best Practices for Digital Learning in K-12 Education",
      type: "GUIDE",
      description: "Essential strategies for implementing effective digital learning programs in schools",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      link: "/resources/digital-learning"
    },
    {
      title: "Building a Strong School Community: A Principal's Handbook",
      type: "EBOOK",
      description: "Comprehensive guide for school leaders to foster engagement and collaboration",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      link: "/resources/community-building"
    },
    {
      title: "Student Assessment Strategies for the Modern Classroom",
      type: "WEBINAR",
      description: "Learn innovative approaches to student evaluation and progress tracking",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
      link: "/resources/assessment"
    },
    {
      title: "STEM Education: Bridging Theory and Practice",
      type: "RESEARCH",
      description: "Latest research findings on effective STEM education implementation",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      link: "/resources/stem-education"
    },
    {
      title: "Inclusive Education: Creating Supportive Learning Environments",
      type: "TOOLKIT",
      description: "Practical tools and strategies for implementing inclusive education practices",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      link: "/resources/inclusive-education"
    }
  ];

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
    console.log(data);
  };

  return (
    <div className="w-full">
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-12 overflow-hidden rounded-2xl bg-violet-400 hover:bg-violet-300">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Carousel - Left side with larger size */}
              <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative w-full max-w-3xl mx-auto lg:mx-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
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
                      </CarouselItem>
                    ))}
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
                }} className="inline-block px-6 py-2 rounded-full bg-[#1A1F2C] mb-8 text-4xl text-gray-50 font-extrabold">
                  SamarthX
                </motion.span>
                <motion.h1 initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.3
                }} className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-gray-900">
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
                }} className="text-2xl mb-12 leading-relaxed text-slate-700 font-medium">
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
                  <button className="px-8 py-4 rounded-xl text-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/25 bg-[#1A1F2C] hover:bg-[#2A2F3C]">
                    Get Started Today
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* School Performance Dashboard Section */}
        <section className="py-20 px-6 md:px-8 lg:px-12 bg-white">
          <div className="container max-w-7xl mx-auto">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Educational Impact Dashboard</h2>
              <p className="text-neutral-600">Track and analyze educational progress across India</p>
            </motion.div>

            {/* Filters */}
            <Select>
              <SelectTrigger className="w-[180px] mb-8">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                {/* Add more states as needed */}
              </SelectContent>
            </Select>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Total Schools</h3>
                </div>
                <p className="text-4xl font-bold text-primary mb-2">4,500+</p>
                <p className="text-neutral-600 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>15% increase from last year</span>
                </p>
              </motion.div>

              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Total Students</h3>
                </div>
                <p className="text-4xl font-bold text-primary mb-2">1M+</p>
                <p className="text-neutral-600 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>25% increase from last year</span>
                </p>
              </motion.div>

              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2
              }} className="glass p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileBarChart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Avg Performance</h3>
                </div>
                <p className="text-4xl font-bold text-primary mb-2">84.2%</p>
                <p className="text-neutral-600 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>5% increase from last year</span>
                </p>
              </motion.div>
            </div>

            {/* Dashboard Image */}
            <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} className="rounded-xl overflow-hidden shadow-xl">
              <img src="/lovable-uploads/dc6761db-f908-44c9-8d7c-3b4c7faa6444.png" alt="School Performance Dashboard" className="w-full h-auto" />
            </motion.div>
          </div>
        </section>

        {/* News and Notices Section */}
        <section className="py-20 px-6 md:px-8 lg:px-12 bg-neutral-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* News Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-2 mb-6">
                  <NewspaperIcon className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Latest News</h2>
                </div>
                <div className="space-y-4">
                  {newsItems.map((news, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{news.title}</CardTitle>
                            <CardDescription>{news.date}</CardDescription>
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {news.tag}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600">{news.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Notices Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Important Notices</h2>
                </div>
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{notice.title}</CardTitle>
                            <CardDescription>{notice.date}</CardDescription>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            notice.priority === "High" ? "bg-red-100 text-red-600" :
                            notice.priority === "Medium" ? "bg-yellow-100 text-yellow-600" :
                            "bg-green-100 text-green-600"
                          }`}>
                            {notice.priority} Priority
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600">{notice.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                Streamline your school operations with our comprehensive suite of
                tools and features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{
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
                <motion.div key={index} initial={{
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-6 md:px-8 lg:px-12 bg-cream-50">
          <div className="container mx-auto">
            <div className="flex justify-center mb-12">
              <Button 
                className="text-lg px-12 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 transition-all shadow-sm"
                variant="outline"
              >
                View More Resources
              </Button>
            </div>

            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {resourceItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                      onClick={() => window.location.href = item.link}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm font-semibold text-primary mb-2">{item.type}</p>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-neutral-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
            </Carousel>
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
                Join hundreds of schools already benefiting from our AI-powered ERP
                platform
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all">
                Schedule a Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative bg-[#003B73] text-white overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,32L1440,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-2xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect!</h2>
                <p className="text-gray-200 mb-8 text-center">
                  Fill out the form below to connect with our sales team to discuss how SamarthX can help with your specific school or district needs.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", { required: true })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", { required: true })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone", { required: true })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Job Title"
                        {...register("jobTitle", { required: true })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="School/District"
                        {...register("school", { required: true })}
                        className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                      />
                    </div>
                  </div>

                  <select
                    {...register("country", { required: true })}
                    className="w-full px-4 py-2 bg-white/10 border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-white rounded-md"
                  >
                    <option value="" className="text-gray-800">Select Country</option>
                    <option value="india" className="text-gray-800">India</option>
                    <option value="usa" className="text-gray-800">United States</option>
                    <option value="uk" className="text-gray-800">United Kingdom</option>
                  </select>

                  <textarea
                    placeholder="How can we help you?"
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white resize-none"
                  ></textarea>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      className="px-8 py-3 bg-[#ea384c] text-white rounded-full hover:bg-[#d62f41] transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">SamarthX</h3>
                <p className="text-gray-400">
                  Empowering educational institutions with cutting-edge technology solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span className="text-gray-400">+91 123 456 7890</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span className="text-gray-400">support@samarthx.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span className="text-gray-400">Bangalore, India</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">© 2024 SamarthX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
