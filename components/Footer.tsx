import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">MIRAIS</h3>
            <p className="text-gray-400">
              地域社会のデジタル化支援を通じて、
              より良い未来を創造するNPO法人です。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/activities" className="text-gray-400 hover:text-primary-400">
                  活動内容
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400">
                  団体情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <address className="text-gray-400 not-italic">
              <p>〒100-0001</p>
              <p>東京都千代田区1-1-1</p>
              <p>メール: info@mirais.org</p>
              <p>電話: 03-1234-5678</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">SNS</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NPO法人MIRAIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}