export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
  category?: 'organized' | 'supported';
  size?: 'small' | 'medium' | 'large';
};
