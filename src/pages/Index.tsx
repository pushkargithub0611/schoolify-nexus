import * as React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Dashboard } from "@/components/sections/Dashboard";
import { NewsAndNotices } from "@/components/sections/NewsAndNotices";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Resources } from "@/components/sections/Resources";
import { Cta } from "@/components/sections/Cta";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Brain, Users, IndianRupee, School, FileBarChart, TrendingUp, Building, Bell, NewspaperIcon, Mail, Twitter, Linkedin, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const carouselImages = [{
    url: "/lovable-uploads/4fce841a-0b68-4e32-9bfc-206a104935fc.png",
    caption: "Transform Your School",
    description: "Join the digital education revolution with SamarthX"
  }, {
    url: "/lovable-uploads/348f864a-091f-4612-90cc-0ff0ac317410.png",
    caption: "Modern Digital Classrooms",
    description: "Experience next-generation learning environments powered by AI and cutting-edge technology"
  }];

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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

  return (
    <div className="w-full">
      <Header />
      <main className="min-h-screen">
        <Hero carouselImages={carouselImages} floatingAnimation={floatingAnimation} />
        <Dashboard />
        <NewsAndNotices newsItems={newsItems} notices={notices} />
        <Features features={features} />
        <Stats stats={stats} />
        <Resources resourceItems={resourceItems} />
        <Cta />
        <Contact onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} errors={errors} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
