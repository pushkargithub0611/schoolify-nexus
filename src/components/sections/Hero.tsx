
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HeroProps {
  carouselImages: Array<{
    url: string;
    caption: string;
    description: string;
  }>;
  floatingAnimation: any;
}

export const Hero = ({ carouselImages, floatingAnimation }: HeroProps) => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 px-4 md:px-8 lg:px-12 overflow-hidden rounded-2xl bg-violet-400 hover:bg-violet-300">
      <div className="container max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative w-full max-w-4xl mx-auto lg:mx-0">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl"
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                            {image.caption}
                          </h3>
                          <p className="text-white/90 text-lg md:text-xl">
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
          
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="text-left lg:pl-12" style={{ animationDelay: "0.3s" }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-[#1A1F2C] mb-8 text-4xl text-gray-50 font-extrabold"
            >
              Samarth<span className="text-[#FF9933]">X</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-gray-900"
            >
              Revolutionize Education Management
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-12 leading-relaxed text-slate-700 font-medium"
            >
              The complete school management solution designed specifically for Indian educational institutions, powered by cutting-edge AI technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="px-8 py-4 rounded-xl text-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b87f5]/25 bg-[#1A1F2C] hover:bg-[#2A2F3C]">
                Get Started Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
