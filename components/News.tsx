"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    date: "2024.03.15",
    category: "イベント",
    title: "地域DXセミナーを開催します",
    description: "地域企業向けのデジタル化支援セミナーを開催します。参加費無料、オンライン配信あり。",
  },
  {
    date: "2024.03.10",
    category: "プロジェクト",
    title: "新規プロジェクト始動",
    description: "地域の伝統工芸職人のデジタルショーケース制作プロジェクトが始動しました。",
  },
  {
    date: "2024.03.01",
    category: "お知らせ",
    title: "新規会員募集開始",
    description: "MIRAISの活動に参加いただける新規会員を募集しています。",
  },
];

export default function News() {
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
            お知らせ・<span className="gradient-text">最新情報</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MIRAISの最新の活動情報やお知らせをご覧いただけます。
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}