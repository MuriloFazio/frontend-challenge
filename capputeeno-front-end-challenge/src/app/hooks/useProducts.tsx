import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { useFilter } from "./useFilter";
import { FilterType, PriorityType } from "../contexts/filterContext";
import { getCategoryByType, getFieldByPriority } from "../utils/filters/graphql-filters";


const API_URL = 'http://127.0.0.1:3333/';

const fetchProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query: query });
};

export const useProducts = () => {
  const { type, priority } = useFilter();
  const query = mountQueryByType(type, priority);
  const { data } = useQuery({
    queryFn: () => fetchProducts(query),
    queryKey: ['products', type, priority],
  });
  return {
    data: data?.data?.data?.allProducts
  }
};

const mountQueryByType = (type: FilterType, priority: PriorityType) => {
  const { field, order} = getFieldByPriority(priority);
  const category = getCategoryByType(type);
  if (type === FilterType.ALL && priority === PriorityType.BEST_SELLER) return `query {
    allProducts (sortField: "sales"){
      id
      name
      price_in_cents
      image_url
      category
    }
  }`;

  return `query {
    allProducts(
      sortField: "${field}",
      sortOrder: "${order}",
      ${category ? `filter: {category: "${category}"}` : "" }
        ){
        id
        name
        price_in_cents
        image_url
        category
      }
  }`;

};

