/// <reference types="next" />
/// <reference types="next/types/global" />

type Product = {
  description?: string;
  handle: string;
  id: string;
  images?: [Image];
  productType?: string;
  title: string;
  variants: [ProductVariant];
  vendor?: string;
};

type ProductVariant = {
  id: string;
  image?: Image;
  price: string;
  sku?: string;
  title: string;
};

type Image = {
  altText?: string;
  id: string;
  src: string;
};
