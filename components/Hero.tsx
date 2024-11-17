"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">デジタルの力で</span>
          <br />
          地域社会をつなぐ
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          NPO法人MIRAISは、地域社会のデジタル化支援を通じて、
          <br />
          誰もが活躍できる未来を創造します
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
        >
          お問い合わせ
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}