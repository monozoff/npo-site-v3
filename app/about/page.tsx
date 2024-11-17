"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AboutPage() {
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
              <span className="gradient-text">団体情報</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NPO法人MIRAISは、デジタル技術を活用して地域社会の課題解決に取り組む
              非営利団体です。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">理念・ビジョン</h2>
                <p className="text-gray-600">
                  私たちは、デジタル技術の力で地域社会をより良くすることを目指しています。
                  誰もが活躍できる、持続可能な社会の実現に向けて、さまざまな支援活動を
                  展開しています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">組織概要</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-gray-700">団体名</dt>
                    <dd className="text-gray-600">NPO法人MIRAIS</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-700">設立</dt>
                    <dd className="text-gray-600">2020年4月1日</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-700">代表理事</dt>
                    <dd className="text-gray-600">山田 太郎</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-700">活動地域</dt>
                    <dd className="text-gray-600">東京都を中心とした首都圏</dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">アクセス・連絡先</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">所在地</h3>
                    <p className="text-gray-600">
                      〒100-0001
                      <br />
                      東京都千代田区1-1-1
                      <br />
                      ○○ビル 3階
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">電話番号</h3>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">メールアドレス</h3>
                    <p className="text-gray-600">info@mirais.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">営業時間</h3>
                    <p className="text-gray-600">
                      平日 9:00-18:00
                      <br />
                      土日祝日休み
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}