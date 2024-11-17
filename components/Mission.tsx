"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";

const missions = [
  {
    icon: <Target className="h-8 w-8 text-primary-500" />,
    title: "ミッション",
    description:
      "地域社会のデジタル化を支援し、誰もが活躍できる未来社会の創造を目指します。",
  },
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: "ビジョン",
    description:
      "デジタル技術の力で、世代や地域を超えたつながりを生み出し、活気ある地域社会を実現します。",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: "バリュー",
    description:
      "革新性、共創、多様性を大切にし、持続可能な地域づくりに貢献します。",
  },
];

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            私たちの<span className="gradient-text">ミッション</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MIRAISは、デジタル技術を活用して地域社会の課題解決に取り組み、
            より良い未来を創造することを目指しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{mission.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}