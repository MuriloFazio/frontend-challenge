import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";
import { mountQueryByType } from "../utils/filters/graphql-filters";


const API_URL = 'http://127.0.0.1:3333/';

const fetchProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query: query });
};

export const useProducts = () => {
  const { type, priority, search } = useFilter();
  const deferredSearch = useDeferredValue(search);
  const query = mountQueryByType(type, priority);
  const { data } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ['products', type, priority],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter(product => product.name.toLocaleLowerCase().includes(deferredSearch.toLocaleLowerCase()));

  return {
    data: filteredProducts
  }
};
