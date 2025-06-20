'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Package, Heart, Settings } from 'lucide-react';

export default function ProfilePage() {
  const [user] = useState({
    name: 'Иван Петров',
    email: 'ivan@example.com',
    avatar: '',
    joinDate: 'Январь 2024',
  });

  const [orders] = useState([
    {
      id: '#12345',
      date: '15.01.2024',
      status: 'delivered',
      total: 299,
      items: ['Classic Minimalist'],
    },
    {
      id: '#12344',
      date: '10.01.2024',
      status: 'processing',
      total: 899,
      items: ['Gold Heritage'],
    },
  ]);

  const [favorites] = useState([
    { id: '1', name: 'Classic Minimalist', price: 299 },
    { id: '3', name: 'Sport Pro', price: 199 },
  ]);

  const getStatusBadge = (status: string) => {
    const statusMap = {
      delivered: { label: 'Доставлен', variant: 'default' as const },
      processing: { label: 'Обрабатывается', variant: 'secondary' as const },
      shipped: { label: 'Отправлен', variant: 'outline' as const },
      pending: { label: 'Ожидает', variant: 'secondary' as const },
    };

    return (
      statusMap[status as keyof typeof statusMap] || {
        label: status,
        variant: 'secondary' as const,
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-lg">
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Клиент с {user.joinDate}</p>
          </div>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <Badge {...getStatusBadge(order.status)}>
                          {getStatusBadge(order.status).label}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        {order.items.map((item, index) => (
                          <p key={index} className="text-sm text-gray-700">
                            {item}
                          </p>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t">
                        <span className="font-semibold">
                          Итого: {order.total.toLocaleString('ru-RU')} ₽
                        </span>
                        <Button variant="outline" size="sm">
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favorites.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          {item.price.toLocaleString('ru-RU')} ₽
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">В корзину</Button>
                        <Button variant="outline" size="sm">
                          Удалить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес</Label>
                    <Input id="address" placeholder="Введите ваш адрес" />
                  </div>
                  <Button>Сохранить изменения</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аккаунта</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Уведомления</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">
                        Email уведомления о заказах
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">Новости и акции</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-sm">SMS уведомления</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Безопасность</h3>
                  <div className="space-y-3">
                    <Button variant="outline">Изменить пароль</Button>
                    <Button variant="outline">
                      Настроить двухфакторную аутентификацию
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button variant="destructive">Удалить аккаунт</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
