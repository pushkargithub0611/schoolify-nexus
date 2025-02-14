
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ResourceItem {
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
}

interface ResourcesProps {
  resourceItems: ResourceItem[];
}

export const Resources = ({ resourceItems }: ResourcesProps) => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-cream-50">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <Button className="text-lg px-12 py-3 rounded-full bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 transition-all shadow-sm" variant="outline">
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
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">
                      {item.type}
                    </p>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {item.description}
                    </p>
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
  );
};
