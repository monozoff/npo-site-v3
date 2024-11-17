"use client";

import { motion } from "framer-motion";
import { Code, Palette, BookOpen, Users2, Globe2, Baby } from "lucide-react";

const activities = [
  {
    icon: <Code className="h-12 w-12" />,
    title: "地域DX支援",
    description: "地域企業・団体のデジタル化をサポートし、業務効率化を実現します。",
    details: [
      "デジタルツール導入支援",
      "業務プロセス改善コンサルティング",
      "従業員向けデジタルスキル研修",
      "オンラインビジネス展開支援"
    ]
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "アーティスト支援",
    description: "デジタルツールを活用したアーティストの活動支援と発信を行います。",
    details: [
      "オンラインギャラリーの構築",
      "デジタルポートフォリオ作成支援",
      "SNSマーケティング支援",
      "オンライン展示会の開催"
    ]
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "オンラインスクール",
    description: "デジタルスキルを学べるオンライン教育プログラムを提供します。",
    details: [
      "プログラミング基礎講座",
      "デジタルマーケティング講座",
      "ウェブデザイン講座",
      "動画編集・制作講座"
    ]
  },
  {
    icon: <Users2 className="h-12 w-12" />,
    title: "起業家支援",
    description: "地域の起業家に向けたデジタルマーケティング支援を行います。",
    details: [
      "ビジネスプラン策定支援",
      "オンラインマーケティング戦略立案",
      "ウェブサイト構築支援",
      "デジタル広告運用サポート"
    ]
  },
  {
    icon: <Globe2 className="h-12 w-12" />,
    title: "国際交流",
    description: "オンラインを活用した国際交流プログラムを実施します。",
    details: [
      "オンライン文化交流イベント",
      "国際協働プロジェクト",
      "語学学習プログラム",
      "グローバルネットワーキング"
    ]
  },
  {
    icon: <Baby className="h-12 w-12" />,
    title: "子ども食堂",
    description: "地域の子ども食堂のデジタル化と運営支援を行います。",
    details: [
      "予約システムの導入",
      "食材管理システムの提供",
      "情報発信プラットフォーム構築",
      "ボランティア管理システム導入"
    ]
  }
];

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">活動内容</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MIRAISは、デジタル技術を活用してさまざまな地域課題の解決に取り組んでいます。
              私たちの活動を通じて、より良い地域社会の実現を目指しています。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="text-primary-500 mb-4">{activity.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                </div>
                <ul className="space-y-2">
                  {activity.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}