'use client';
import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from '@/api/user/signIn';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const SignInForm: React.FC = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      signIn(data.email, data.password),
    onSuccess: async (data) => {
      Cookies.set('authToken', data.token);
      localStorage.setItem('authToken', data.token);
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      router.push('/');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const { email, password } = data;
    e.preventDefault();
    // Simulate API call
    mutate({ email, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isLoading ? 'Входим...' : 'Войти'}
        </Button>
      </form>

      <div className="text-center text-sm">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Забыли пароль?
        </a>
      </div>
    </>
  );
};
export default SignInForm;
