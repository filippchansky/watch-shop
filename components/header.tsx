'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/store/AuthStore';
import UserDropdown from './UserDropdown';
import { Skeleton } from './ui/skeleton';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(0);
  const { isLoading, isAuth } = useAuthStore();
  console.log(isLoading, isAuth);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-semibold">TimeZone</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              href="/catalog"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden sm:flex"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* User Menu */}
            {isAuth ? (
              <UserDropdown />
            ) : (
              <>
                {isLoading ? (
                  <Skeleton className="h-[36px] w-[85px]" />
                ) : (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth">
                      <User className="h-4 w-4" />
                      <span className="ml-1 hidden sm:inline">Войти</span>
                    </Link>
                  </Button>
                )}
              </>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  <Link href="/" className="text-lg font-medium">
                    Главная
                  </Link>
                  <Link href="/catalog" className="text-lg font-medium">
                    Каталог
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    О нас
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Контакты
                  </Link>
                  <div className="pt-4 border-t">
                    <Input
                      type="search"
                      placeholder="Поиск часов..."
                      className="w-full"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Поиск часов..."
                className="w-full pr-10"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
