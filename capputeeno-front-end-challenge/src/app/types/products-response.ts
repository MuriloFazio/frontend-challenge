export type ProductsFetchResponse = {
  data: {
    allProducts: Products[],
  }
};

export type Products = {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
};


export type ProductFetchResponse = {
  data: {
    Product: Product,
  }
};

export type Product = {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
  description: string,
  category: string,
};