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
