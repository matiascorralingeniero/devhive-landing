export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  slug?: string;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  name: string;
  href: string;
}
