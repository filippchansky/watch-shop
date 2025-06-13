import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={`group block ${className}`}>
      <div className="space-y-3">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-black text-white">
              Новинка
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Badge variant="secondary">Нет в наличии</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm text-gray-900 group-hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-xs text-gray-500">{product.brand}</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString('ru-RU')} ₽
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}