export type Category = {
  id: string;
  slug: string;
  name_en: string;
  name_fa: string;
  name_ar: string;
  sort_order: number;
};

export type Product = {
  id: string;
  slug: string;
  category_id: string | null;
  name_en: string;
  name_fa: string;
  name_ar: string;
  description_en: string | null;
  description_fa: string | null;
  description_ar: string | null;
  specs: Record<string, string>;
  images: string[];
  featured: boolean;
  published: boolean;
  sort_order: number;
  categories?: Category | null;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  locale: string;
  read: boolean;
  created_at: string;
};
