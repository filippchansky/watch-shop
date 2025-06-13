import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Minimalist',
    brand: 'Nordic Time',
    price: 299,
    originalPrice: 399,
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Элегантные часы в минималистичном стиле для современного городского образа жизни.',
    specifications: {
      'Механизм': 'Кварцевый',
      'Материал корпуса': 'Нержавеющая сталь',
      'Стекло': 'Сапфировое',
      'Водозащита': '50м',
      'Диаметр': '40мм'
    },
    category: 'minimalist',
    inStock: true,
    isNew: true
  },
  {
    id: '2',
    name: 'Gold Heritage',
    brand: 'Luxury Co',
    price: 899,
    images: [
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Роскошные золотые часы для особых случаев.',
    specifications: {
      'Механизм': 'Автоматический',
      'Материал корпуса': 'Золото 18к',
      'Стекло': 'Сапфировое',
      'Водозащита': '100м',
      'Диаметр': '42мм'
    },
    category: 'luxury',
    inStock: true
  },
  {
    id: '3',
    name: 'Sport Pro',
    brand: 'Active Gear',
    price: 199,
    images: [
      'https://images.pexels.com/photos/1034596/pexels-photo-1034596.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Спортивные часы для активного образа жизни.',
    specifications: {
      'Механизм': 'Кварцевый',
      'Материал корпуса': 'Титан',
      'Стекло': 'Минеральное',
      'Водозащита': '200м',
      'Диаметр': '44мм'
    },
    category: 'sport',
    inStock: true
  },
  {
    id: '4',
    name: 'Vintage Classic',
    brand: 'Heritage',
    price: 459,
    images: [
      'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/364906/pexels-photo-364906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Винтажные часы в классическом стиле.',
    specifications: {
      'Механизм': 'Механический',
      'Материал корпуса': 'Нержавеющая сталь',
      'Стекло': 'Сапфировое',
      'Водозащита': '30м',
      'Диаметр': '38мм'
    },
    category: 'vintage',
    inStock: true
  },
  {
    id: '5',
    name: 'Modern Steel',
    brand: 'Contemporary',
    price: 349,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Современные стальные часы для делового стиля.',
    specifications: {
      'Механизм': 'Кварцевый',
      'Материал корпуса': 'Нержавеющая сталь',
      'Стекло': 'Сапфировое',
      'Водозащита': '100м',
      'Диаметр': '41мм'
    },
    category: 'modern',
    inStock: true
  },
  {
    id: '6',
    name: 'Elegant Rose Gold',
    brand: 'Luxury Co',
    price: 699,
    images: [
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Элегантные часы из розового золота.',
    specifications: {
      'Механизм': 'Автоматический',
      'Материал корпуса': 'Розовое золото',
      'Стекло': 'Сапфировое',
      'Водозащита': '50м',
      'Диаметр': '39мм'
    },
    category: 'luxury',
    inStock: false
  }
];

export const categories = [
  { id: 'all', name: 'Все часы', count: products.length },
  { id: 'minimalist', name: 'Минималистичные', count: products.filter(p => p.category === 'minimalist').length },
  { id: 'luxury', name: 'Люкс', count: products.filter(p => p.category === 'luxury').length },
  { id: 'sport', name: 'Спортивные', count: products.filter(p => p.category === 'sport').length },
  { id: 'vintage', name: 'Винтажные', count: products.filter(p => p.category === 'vintage').length },
  { id: 'modern', name: 'Современные', count: products.filter(p => p.category === 'modern').length }
];