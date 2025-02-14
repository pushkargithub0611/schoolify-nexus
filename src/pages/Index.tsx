import * as React from 'react';
import { motion } from "framer-motion";
import { Brain, Users, IndianRupee, School, FileBarChart, TrendingUp, Building, Bell, NewspaperIcon, Mail, Twitter, Linkedin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
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
  const resourceItems = [{
    title: "Best Practices for Digital Learning in K-12 Education",
    type: "GUIDE",
    description: "Essential strategies for implementing effective digital learning programs in schools",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    link: "/resources/digital-learning"
  }, {
    title: "Building a Strong School Community: A Principal's Handbook",
    type: "EBOOK",
    description: "Comprehensive guide for school leaders to foster engagement and collaboration",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    link: "/resources/community-building"
  }, {
    title: "Student Assessment Strategies for the Modern Classroom",
    type: "WEBINAR",
    description: "Learn innovative approaches to student evaluation and progress tracking",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    link: "/resources/assessment"
  }, {
    title: "STEM Education: Bridging Theory and Practice",
    type: "RESEARCH",
    description: "Latest research findings on effective STEM education implementation",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    link: "/resources/stem-education"
  }, {
    title: "Inclusive Education: Creating Supportive Learning Environments",
    type: "TOOLKIT",
    description: "Practical tools and strategies for implementing inclusive education practices",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    link: "/resources/inclusive-education"
  }];
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon."
    });
    console.log(data);
  };

  return React.createElement(
    'div',
    { className: "w-full" },
    React.createElement(Header, null),
    React.createElement(
      'main',
      { className: "min-h-screen" },
      React.createElement(
        'section',
        { className: "min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-12 overflow-hidden rounded-2xl bg-violet-400 hover:bg-violet-300" },
        React.createElement(
          'div',
          { className: "container max-w-7xl mx-auto px-4 md:px-6 lg:px-8" },
          React.createElement(
            'div',
            { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
            React.createElement(
              motion.div,
              { variants: floatingAnimation, initial: "initial", animate: "animate", className: "relative w-full max-w-3xl mx-auto lg:mx-0" },
              React.createElement(
                Carousel,
                { className: "w-full" },
                React.createElement(
                  CarouselContent,
                  null,
                  carouselImages.map((image, index) =>
                    React.createElement(
                      CarouselItem,
                      { key: index },
                      React.createElement(
                        motion.div,
                        { initial: {
                            opacity: 0,
                            scale: 0.95
                          }, animate: {
                            opacity: 1,
                            scale: 1
                          }, transition: {
                            delay: index * 0.1
                          }, className: "relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl" },
                        React.createElement('img', { src: image.url, alt: image.caption, className: "w-full h-full object-cover" }),
                        React.createElement(
                          'div',
                          { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" },
                          React.createElement(
                            'div',
                            { className: "absolute bottom-0 left-0 right-0 p-8" },
                            React.createElement(
                              'h3',
                              { className: "text-white text-2xl font-bold mb-3" },
                              image.caption
                            ),
                            React.createElement(
                              'p',
                              { className: "text-white/90 text-lg" },
                              image.description
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                React.createElement(CarouselPrevious, { className: "hidden md:flex -left-4 bg-white/10 hover:bg-white/20 text-white border-none" }),
                React.createElement(CarouselNext, { className: "hidden md:flex -right-4 bg-white/10 hover:bg-white/20 text-white border-none" })
              )
            ),
            React.createElement(
              motion.div,
              { variants: floatingAnimation, initial: "initial", animate: "animate", className: "text-left lg:pl-12", style: {
                  animationDelay: "0.3s"
                } },
              React.createElement(
                motion.span,
                { initial: {
                    opacity: 0,
                    y: 20
                  }, animate: {
                    opacity: 1,
                    y: 0
                  }, transition: {
                    delay: 0.2
                  }, className: "inline-block px-6 py-2 rounded-full bg-[#1A1F2C] mb-8 text-4xl text-gray-50 font-extrabold" },
                "Samarth",
                React.createElement(
                  'span',
                  { className: "text-[#FF9933]" },
                  "X"
                )
              ),
              React.createElement(
                motion.h1,
                { initial: {
                    opacity: 0,
                    y: 20
                  }, animate: {
                    opacity: 1,
                    y: 0
                  }, transition: {
                    delay: 0.3
                  }, className: "text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-gray-900" },
                "Revolutionize Education Management"
              ),
              React.createElement(
                motion.p,
                { initial: {
                    opacity: 0,
                    y: 20
                  }, animate: {
                    opacity: 1,
                    y: 0
                  }, transition: {
                    delay: 0.4
                  }, className: "text-2xl mb-12 leading-relaxed text-slate-700 font-medium" },
                "The complete school management solution designed specifically for Indian educational institutions, powered by cutting-edge AI technology."
              ),
              React.createElement(
                motion.div,
                { initial: {
                    opacity: 0,
                    y: 20
                  }, animate: {
                    opacity: 1,
                    y: 0
                  }, transition: {
                    delay: 0.5
                  } },
                React.createElement(
                  'button',
                  { className: "px-8 py-4 rounded-xl text-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/25 bg-[#1A1F2C] hover:bg-[#2A2F3C]" },
                  "Get Started Today"
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-white" },
        React.createElement(
          'div',
          { className: "container max-w-7xl mx-auto" },
          React.createElement(
            motion.div,
            { initial: {
                opacity: 0,
                y: 20
              }, whileInView: {
                opacity: 1,
                y: 0
              }, viewport: {
                once: true
              }, className: "text-center mb-12" },
            React.createElement(
              'h2',
              { className: "text-4xl font-bold mb-4" },
              "Educational Impact Dashboard"
            ),
            React.createElement(
              'p',
              { className: "text-neutral-600" },
              "Track and analyze educational progress across India"
            )
          ),
          React.createElement(
            Select,
            null,
            React.createElement(SelectTrigger, { className: "w-[180px] mb-8" }, React.createElement(SelectValue, { placeholder: "Select a state" })),
            React.createElement(
              SelectContent,
              null,
              React.createElement(SelectItem, { value: "maharashtra" }, "Maharashtra"),
              React.createElement(SelectItem, { value: "karnataka" }, "Karnataka"),
              React.createElement(SelectItem, { value: "tamilnadu" }, "Tamil Nadu")
            )
          ),
          React.createElement(
            'div',
            { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" },
            React.createElement(
              motion.div,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                }, className: "glass p-6 rounded-xl" },
              React.createElement(
                'div',
                { className: "flex items-center gap-4 mb-4" },
                React.createElement(
                  'div',
                  { className: "p-3 bg-primary/10 rounded-lg" },
                  React.createElement(Building, { className: "w-6 h-6 text-primary" })
                ),
                React.createElement(
                  'h3',
                  { className: "text-xl font-semibold" },
                  "Total Schools"
                )
              ),
              React.createElement(
                'p',
                { className: "text-4xl font-bold text-primary mb-2" },
                "4,500+"
              ),
              React.createElement(
                'p',
                { className: "text-neutral-600 flex items-center gap-2" },
                React.createElement(TrendingUp, { className: "w-4 h-4 text-green-500" }),
                React.createElement(
                  'span',
                  null,
                  "15% increase from last year"
                )
              )
            ),
            React.createElement(
              motion.div,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                }, transition: {
                  delay: 0.1
                }, className: "glass p-6 rounded-xl" },
              React.createElement(
                'div',
                { className: "flex items-center gap-4 mb-4" },
                React.createElement(
                  'div',
                  { className: "p-3 bg-primary/10 rounded-lg" },
                  React.createElement(Users, { className: "w-6 h-6 text-primary" })
                ),
                React.createElement(
                  'h3',
                  { className: "text-xl font-semibold" },
                  "Total Students"
                )
              ),
              React.createElement(
                'p',
                { className: "text-4xl font-bold text-primary mb-2" },
                "1M+"
              ),
              React.createElement(
                'p',
                { className: "text-neutral-600 flex items-center gap-2" },
                React.createElement(TrendingUp, { className: "w-4 h-4 text-green-500" }),
                React.createElement(
                  'span',
                  null,
                  "25% increase from last year"
                )
              )
            ),
            React.createElement(
              motion.div,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                }, transition: {
                  delay: 0.2
                }, className: "glass p-6 rounded-xl" },
              React.createElement(
                'div',
                { className: "flex items-center gap-4 mb-4" },
                React.createElement(
                  'div',
                  { className: "p-3 bg-primary/10 rounded-lg" },
                  React.createElement(FileBarChart, { className: "w-6 h-6 text-primary" })
                ),
                React.createElement(
                  'h3',
                  { className: "text-xl font-semibold" },
                  "Avg Performance"
                )
              ),
              React.createElement(
                'p',
                { className: "text-4xl font-bold text-primary mb-2" },
                "84.2%"
              ),
              React.createElement(
                'p',
                { className: "text-neutral-600 flex items-center gap-2" },
                React.createElement(TrendingUp, { className: "w-4 h-4 text-green-500" }),
                React.createElement(
                  'span',
                  null,
                  "5% increase from last year"
                )
              )
            )
          ),
          React.createElement(
            motion.div,
            { initial: {
                opacity: 0,
                scale: 0.95
              }, whileInView: {
                opacity: 1,
                scale: 1
              }, viewport: {
                once: true
              }, className: "rounded-xl overflow-hidden shadow-xl" },
            React.createElement('img', { src: "/lovable-uploads/dc6761db-f908-44c9-8d7c-3b4c7faa6444.png", alt: "School Performance Dashboard", className: "w-full h-auto" })
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-neutral-50" },
        React.createElement(
          'div',
          { className: "container mx-auto" },
          React.createElement(
            'div',
            { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" },
            React.createElement(
              motion.div,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                } },
              React.createElement(
                'div',
                { className: "flex items-center gap-2 mb-6" },
                React.createElement(NewspaperIcon, { className: "w-6 h-6 text-primary" }),
                React.createElement(
                  'h2',
                  { className: "text-2xl font-bold" },
                  "Latest News"
                )
              ),
              React.createElement(
                'div',
                { className: "space-y-4" },
                newsItems.map((news, index) =>
                  React.createElement(
                    Card,
                    { key: index, className: "hover:shadow-lg transition-shadow" },
                    React.createElement(
                      CardHeader,
                      null,
                      React.createElement(
                        'div',
                        { className: "flex justify-between items-start" },
                        React.createElement(
                          'div',
                          null,
                          React.createElement(CardTitle, null, news.title),
                          React.createElement(CardDescription, null, news.date)
                        ),
                        React.createElement(
                          'span',
                          { className: "px-3 py-1 bg-primary/10 text-primary rounded-full text-sm" },
                          news.tag
                        )
                      )
                    ),
                    React.createElement(
                      CardContent,
                      null,
                      React.createElement(
                        'p',
                        { className: "text-neutral-600" },
                        news.description
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              motion.div,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                } },
              React.createElement(
                'div',
                { className: "flex items-center gap-2 mb-6" },
                React.createElement(Bell, { className: "w-6 h-6 text-primary" }),
                React.createElement(
                  'h2',
                  { className: "text-2xl font-bold" },
                  "Important Notices"
                )
              ),
              React.createElement(
                'div',
                { className: "space-y-4" },
                notices.map((notice, index) =>
                  React.createElement(
                    Card,
                    { key: index, className: "hover:shadow-lg transition-shadow" },
                    React.createElement(
                      CardHeader,
                      null,
                      React.createElement(
                        'div',
                        { className: "flex justify-between items-start" },
                        React.createElement(
                          'div',
                          null,
                          React.createElement(CardTitle, null, notice.title),
                          React.createElement(CardDescription, null, notice.date)
                        ),
                        React.createElement(
                          'span',
                          { className: `px-3 py-1 rounded-full text-sm ${notice.priority === "High" ? "bg-red-100 text-red-600" : notice.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}` },
                          notice.priority,
                          " Priority"
                        )
                      )
                    ),
                    React.createElement(
                      CardContent,
                      null,
                      React.createElement(
                        'p',
                        { className: "text-neutral-600" },
                        notice.description
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-white" },
        React.createElement(
          'div',
          { className: "container mx-auto" },
          React.createElement(
            'div',
            { className: "text-center mb-16" },
            React.createElement(
              motion.h2,
              { initial: {
                  opacity: 0,
                  y: 20
                }, whileInView: {
                  opacity: 1,
                  y: 0
                }, viewport: {
                  once: true
                }, className: "text-3xl md:text-4xl font-bold mb-4" },
              "Why Choose Our Platform?"
            ),
            React.createElement(
              'p',
              { className: "text-neutral-600 max-w-2xl mx-auto" },
              "Streamline your school operations with our comprehensive suite of\n                tools and features"
            )
          ),
          React.createElement(
            'div',
            { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
            features.map((feature, index) =>
              React.createElement(
                motion.div,
                { key: index, initial: {
                    opacity: 0,
                    y: 20
                  }, whileInView: {
                    opacity: 1,
                    y: 0
                  }, viewport: {
                    once: true
                  }, transition: {
                    delay: index * 0.1
                  }, className: "glass p-6 rounded-xl card-hover" },
                React.createElement(
                  'div',
                  { className: "bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary" },
                  feature.icon
                ),
                React.createElement(
                  'h3',
                  { className: "text-xl font-semibold mb-2" },
                  feature.title
                ),
                React.createElement(
                  'p',
                  { className: "text-neutral-600" },
                  feature.description
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-neutral-50" },
        React.createElement(
          'div',
          { className: "container mx-auto" },
          React.createElement(
            'div',
            { className: "grid grid-cols-2 md:grid-cols-4 gap-8" },
            stats.map((stat, index) =>
              React.createElement(
                motion.div,
                { key: index, initial: {
                    opacity: 0,
                    scale: 0.9
                  }, whileInView: {
                    opacity: 1,
                    scale: 1
                  }, viewport: {
                    once: true
                  }, transition: {
                    delay: index * 0.1
                  }, className: "text-center" },
                React.createElement(
                  'h3',
                  { className: "text-4xl md:text-5xl font-bold text-primary mb-2" },
                  stat.number
                ),
                React.createElement(
                  'p',
                  { className: "text-neutral-600" },
                  stat.label
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-cream-50" },
        React.createElement(
          'div',
          { className: "container mx-auto" },
          React.createElement(
            'div',
            { className: "flex justify-center mb-12" },
            React.createElement(
              Button,
              { className: "text-lg px-12 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 transition-all shadow-sm", variant: "outline" },
              "View More Resources"
            )
          ),
          React.createElement(
            Carousel,
            { className: "w-full" },
            React.createElement(
              CarouselContent,
              { className: "-ml-2 md:-ml-4" },
              resourceItems.map((item, index) =>
                React.createElement(
                  CarouselItem,
                  { key: index, className: "pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3" },
                  React.createElement(
                    motion.div,
                    { initial: {
                        opacity: 0,
                        y: 20
                      }, whileInView: {
                        opacity: 1,
                        y: 0
                      }, viewport: {
                        once: true
                      }, transition: {
                        delay: index * 0.1
                      }, className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group", onClick: () => window.location.href = item.link },
                    React.createElement(
                      'div',
                      { className: "aspect-[4/3] overflow-hidden" },
                      React.createElement('img', { src: item.image, alt: item.title, className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" })
                    ),
                    React.createElement(
                      'div',
                      { className: "p-6" },
                      React.createElement(
                        'p',
                        { className: "text-sm font-semibold text-primary mb-2" },
                        item.type
                      ),
                      React.createElement(
                        'h3',
                        { className: "text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors" },
                        item.title
                      ),
                      React.createElement(
                        'p',
                        { className: "text-neutral-600 text-sm" },
                        item.description
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(CarouselPrevious, { className: "hidden md:flex -left-4" }),
            React.createElement(CarouselNext, { className: "hidden md:flex -right-4" })
          )
        )
      ),
      React.createElement(
        'section',
        { className: "py-20 px-6 md:px-8 lg:px-12 bg-white" },
        React.createElement(
          'div',
          { className: "container mx-auto text-center" },
          React.createElement(
            motion.div,
            { initial: {
                opacity: 0,
                y: 20
              }, whileInView: {
                opacity: 1,
                y: 0
              }, viewport: {
                once: true
              }, className: "max-w-3xl mx-auto" },
            React.createElement(
              'h2',
              { className: "text-3xl md:text-4xl font-bold mb-6" },
              "Ready to Transform Your School Management?"
            ),
            React.createElement(
              'p',
              { className: "text-neutral-600 mb-8" },
              "Join hundreds of schools already benefiting from our AI-powered ERP platform"
            ),
            React.createElement(
              'button',
              { className: "bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all" },
              "Schedule a Demo"
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: "relative bg-[#0EA5E9] overflow-hidden" },
        React.createElement(
          'div',
          { className: "absolute bottom-0 left-0 right-0" },
          React.createElement(
            'svg',
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "w-full" },
            React.createElement('path', { fill: "#ffffff", fillOpacity: "1", d: "M0,96L1440,32L1440,320L0,320Z" })
          )
        ),
        React.createElement(
          'div',
          { className: "container mx-auto px-4 py-16 relative z-10" },
          React.createElement(
            'div',
            { className: "grid grid-cols-1 lg:grid-cols-2 gap-12" },
            React.createElement(
              motion.div,
              { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } },
              React.createElement(
                'h2',
                { className: "text-4xl font-bold mb-4 text-white" },
                "Let's Connect!"
              ),
              React.createElement(
                'p',
                { className: "text-gray-200 mb-8" },
                "Fill out the form below to connect with our sales team to discuss how SamarthX can help with your specific school or district needs."
              ),
              React.createElement(
                'form',
                { onSubmit: handleSubmit(onSubmit), className: "space-y-4" },
                React.createElement(
                  'div',
                  { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                  React.createElement(
                    'div',
                    null,
                    React.createElement('input', {
                      type: "text",
                      placeholder: "First Name",
                      ...register("firstName", { required: true }),
                      className: "w-full px-4 py-2 bg-white border-b border-gray-300 text-black placeholder-gray-600 focus:outline-none focus
