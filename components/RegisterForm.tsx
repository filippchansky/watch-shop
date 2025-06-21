'use client';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/AuthStore';

const RegisterForm: React.FC = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {registration, isLoading} = useAuthStore()
  const [showPassword, setShowPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [error, setError] = useState('')
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const { mutate, error } = useMutation({
  //   mutationFn: (data: { email: string; password: string }) =>
  //     signUp(data.email, data.password),
  //   onSuccess: (data) => {
  //     console.log('✅ Зарегистрирован:', data);
  //     Cookies.set('authToken', data.token);
  //     localStorage.setItem('authToken', data.token);
  //     queryClient.invalidateQueries({ queryKey: ['auth'] });
  //     router.push('/');
  //   },
  // });

  // console.log(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const { confirmPassword, email, password } = data;
    if (email && password && confirmPassword === password && !isLoading) {
      setIsDisable(false);
    } else setIsDisable(true);
  }, [data, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      await registration(email, password)
      router.push('/')
    } catch (err) {
      console.log( err)
      setError('123')
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-register">Email</Label>
          <Input
            id="email-register"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password-register">Пароль</Label>
          <div className="relative">
            <Input
              id="password-register"
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

        <div className="space-y-2">
          <Label htmlFor="password-confirm">Подтвердите пароль</Label>
          <Input
            id="password-confirm"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="••••••••"
            required
            autoComplete="password-confirm"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="w-full" disabled={isDisable}>
          {isLoading ? 'Регистрируемся...' : 'Зарегистрироваться'}
        </Button>
      </form>
    </>
  );
};
export default RegisterForm;
