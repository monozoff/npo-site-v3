"use client";

import { motion } from "framer-motion";
import { Code, Palette, BookOpen, Users2, Globe2, Lightbulb, Baby, School } from "lucide-react";

const activities = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "地域DX支援",
    description: "地域企業・団体のデジタル化をサポートし、業務効率化を実現します。",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "アーティスト支援",
    description: "デジタルツールを活用したアーティストの活動支援と発信を行います。",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "オンラインスクール",
    description: "デジタルスキルを学べるオンライン教育プログラムを提供します。",
  },
  {
    icon: <Users2 className="h-8 w-8" />,
    title: "起業家支援",
    description: "地域の起業家に向けたデジタルマーケティング支援を行います。",
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "国際交流",
    description: "オンラインを活用した国際交流プログラムを実施します。",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "子ども食堂",
    description: "地域の子ども食堂のデジタル化と運営支援を行います。",
  },
];

export default function Activities() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            主な<span className="gradient-text">活動内容</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MIRAISは、さまざまな分野でデジタル技術を活用した
            地域支援活動を展開しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary-500">{activity.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}