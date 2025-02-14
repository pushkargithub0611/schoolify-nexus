import { motion } from "framer-motion";
import { Bell, NewspaperIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface NewsItem {
  title: string;
  date: string;
  description: string;
  tag: string;
}

interface Notice {
  title: string;
  date: string;
  description: string;
  priority: "High" | "Medium" | "Low";
}

interface NewsAndNoticesProps {
  newsItems: NewsItem[];
  notices: Notice[];
}

export const NewsAndNotices = ({ newsItems, notices }: NewsAndNoticesProps) => {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12 bg-neutral-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }}>
                <div className="flex items-center gap-2 mb-6">
                  <NewspaperIcon className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">
                    Latest News
                  </h2>
                </div>
                <div className="space-y-4">
                  {newsItems.map((news, index) =>
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
                        <p className="text-neutral-600">
                          {news.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </motion.div>
              <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }}>
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">
                    Important Notices
                  </h2>
                </div>
                <div className="space-y-4">
                  {notices.map((notice, index) =>
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{notice.title}</CardTitle>
                            <CardDescription>{notice.date}</CardDescription>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${notice.priority === "High" ? "bg-red-100 text-red-600" : notice.priority === "Medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}>
                            {notice.priority}
                            Priority
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600">
                          {notice.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </motion.div>
        </div>
      </div>
    </section>
  );
};
