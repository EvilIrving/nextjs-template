type Product = {
  name: string;
  type: string;
  typeName: string;
  desc: string;
  smallImg: string;
  images: string;
  features: string;
  parameter: string;
};

type ProductConfig = {
  type: string;
  title: string;
  products: Product[];
};

type Service = {
  name: string;
  desc?: string;
  src: string;
};

export type { Product, ProductConfig, Service };
