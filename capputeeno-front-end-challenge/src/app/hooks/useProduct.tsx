import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/products-response";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://127.0.0.1:3333/';

const fetchProduct = (id: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, { query: `query {
    Product(id: "${id}"){
      id
      category
      name
      price_in_cents
      description
      image_url
    }
  }` });
};

export const useProduct = (id: string) => {
  const { data } = useQuery({
    queryFn: () => fetchProduct(id),
    queryKey: ['product'],
    enabled: !!id,
  });

  const productData = data?.data?.data?.Product;

  return {
    data: productData
  }
};
