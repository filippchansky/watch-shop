import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import { products } from '@/lib/data';
import { ArrowRight, Award, Truck, Shield, Clock } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Время — это
                  <br />
                  <span className="text-gray-600">роскошь</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Откройте для себя коллекцию премиальных часов, где каждая
                  деталь создана с особым вниманием к качеству и стилю.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/catalog">
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">О нас</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-full overflow-hidden bg-white shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Премиальные часы"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                NEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-semibold">Премиум качество</h3>
            <p className="text-sm text-gray-600">
              Только проверенные бренды и материалы высочайшего качества
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-semibold">Быстрая доставка</h3>
            <p className="text-sm text-gray-600">
              Доставим ваш заказ в течение 1-3 рабочих дней
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-semibold">Гарантия 2 года</h3>
            <p className="text-sm text-gray-600">
              Официальная гарантия на все часы сроком 24 месяца
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="font-semibold">Сервис 24/7</h3>
            <p className="text-sm text-gray-600">
              Круглосуточная поддержка клиентов и консультации
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Популярные модели
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши самые востребованные часы, которые выбирают ценители качества и
            стиля
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/catalog">
              Смотреть все часы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="bg-gray-50">
          <div className="container mx-auto px-4 py-16 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Новинки</h2>
              <p className="text-gray-600">
                Последние поступления в нашей коллекции
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-16 text-center space-y-6">
          <h2 className="text-3xl font-bold">Подпишитесь на новости</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Будьте первыми в курсе новых поступлений, скидок и эксклюзивных
            предложений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg bg-white text-black"
            />
            <Button variant="secondary">Подписаться</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
