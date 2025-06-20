import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-semibold">TimeZone</span>
            </div>
            <p className="text-sm text-gray-600">
              Премиальные часы для современных людей. Качество, стиль и точность
              в каждой детали.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Магазин</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/catalog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Все часы
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=luxury"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Люкс
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=sport"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Спортивные
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=vintage"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Винтажные
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Возврат
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Гарантия
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Карьера
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Конфиденциальность
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Условия
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 TimeZone. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
