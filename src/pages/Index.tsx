import { motion } from "framer-motion";
import { Brain, GraduationCap, Users, IndianRupee, School, FileBarChart, TrendingUp, Building } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

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

  // Sample data for the visualization
  const schoolData = [{
    state: 'Maharashtra',
    schools: 1200,
    students: 150000,
    performance: 85
  }, {
    state: 'Karnataka',
    schools: 900,
    students: 120000,
    performance: 82
  }, {
    state: 'Tamil Nadu',
    schools: 1100,
    students: 140000,
    performance: 88
  }, {
    state: 'Gujarat',
    schools: 800,
    students: 100000,
    performance: 80
  }, {
    state: 'Delhi',
    schools: 500,
    students: 80000,
    performance: 86
  }];
  const chartData = [{
    name: '2019',
    students: 350000
  }, {
    name: '2020',
    students: 450000
  }, {
    name: '2021',
    students: 600000
  }, {
    name: '2022',
    students: 800000
  }, {
    name: '2023',
    students: 1000000
  }];

  // Additional data for new charts
  const performanceData = [
    { month: 'Jan', performance: 82 },
    { month: 'Feb', performance: 84 },
    { month: 'Mar', performance: 85 },
    { month: 'Apr', performance: 87 },
    { month: 'May', performance: 86 },
    { month: 'Jun', performance: 88 }
  ];

  const stateDistributionData = [
    { name: 'Maharashtra', value: 1200 },
    { name: 'Karnataka', value: 900 },
    { name: 'Tamil Nadu', value: 1100 },
    { name: 'Gujarat', value: 800 },
    { name: 'Delhi', value: 500 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-12 overflow-hidden rounded-2xl bg-violet-400 hover:bg-violet-300">
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
                <button className="px-8 py-4 rounded-xl text-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/25 bg-[#1A1F2C] hover:bg-[#2A2F3C]">
                  Get Started Today
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Visualization Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Select defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {schoolData.map(data => <SelectItem key={data.state} value={data.state.toLowerCase()}>
                    {data.state}
                  </SelectItem>)}
              </SelectContent>
            </Select>

            <Select defaultValue="yearly">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yearly">Yearly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Metrics</SelectItem>
                <SelectItem value="students">Students</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="schools">Schools</SelectItem>
              </SelectContent>
            </Select>
          </div>

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

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Growth Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6">Student Growth Trend</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Performance Trend Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* State Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6">Schools by State</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stateDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {stateDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Year-over-Year Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6">Growth Comparison</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#8884d8" name="Total Students" />
                  </BarChart>
                </ResponsiveContainer>
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
              Join hundreds of schools already benefiting from our AI-powered ERP
              platform
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
