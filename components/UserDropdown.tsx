import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useAuthStore } from '@/store/AuthStore';
import { useQueryClient } from '@tanstack/react-query';

const UserDropdown: React.FC = () => {
  const { logOut } = useAuthStore();
  const queryClient = useQueryClient();

  const handleLogOut = () => {
    logOut();
    queryClient.invalidateQueries({ queryKey: ['auth'] });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <User className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/profile">Профиль</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/orders">Заказы</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogOut}>Выйти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
