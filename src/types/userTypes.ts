
// Типы для пользователей
export interface UserProps {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'banned';
  subscription: 'free' | 'basic' | 'premium';
  joined: string;
  lastActive: string;
}

// Демо-данные пользователей
export const mockUsers: UserProps[] = [
  {
    id: '1',
    name: 'Иванов Иван',
    email: 'ivan@example.com',
    status: 'active',
    subscription: 'premium',
    joined: '12 мая 2023',
    lastActive: '2 часа назад'
  },
  {
    id: '2',
    name: 'Петрова Мария',
    email: 'maria@example.com',
    status: 'active',
    subscription: 'basic',
    joined: '3 июня 2023',
    lastActive: '5 часов назад'
  },
  {
    id: '3',
    name: 'Сидоров Алексей',
    email: 'alexey@example.com',
    status: 'inactive',
    subscription: 'free',
    joined: '15 августа 2023',
    lastActive: '3 дня назад'
  },
  {
    id: '4',
    name: 'Смирнова Ольга',
    email: 'olga@example.com',
    status: 'banned',
    subscription: 'basic',
    joined: '27 марта 2023',
    lastActive: '2 недели назад'
  },
  {
    id: '5',
    name: 'Козлов Дмитрий',
    email: 'dmitry@example.com',
    status: 'active',
    subscription: 'premium',
    joined: '5 апреля 2023',
    lastActive: '1 день назад'
  },
];
