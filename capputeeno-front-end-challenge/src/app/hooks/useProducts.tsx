import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { useFilter } from "./useFilter";
import { FilterType } from "../contexts/filterContext";
import { getCategoryByType } from "../utils/filters/graphql-filters";


const API_URL = 'http://127.0.0.1:3333/';

const fetchProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query: query });
};

export const useProducts = () => {
  const { type } = useFilter();
  const query = mountQueryByType(type);
  const { data } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ['products', type],
  });
  return {
    data: data?.data?.data?.allProducts
  }
};

const mountQueryByType = (type: FilterType) => {
  if (type === FilterType.ALL) return `query {
    allProducts {
      id
      name
      price_in_cents
      image_url
      category
    }
  }`;

  return `query {
    allProducts(
      filter: { 
          category: "${getCategoryByType(type)}"
        }){
        id
        name
        price_in_cents
        image_url
        category
      }
  }`;

};
