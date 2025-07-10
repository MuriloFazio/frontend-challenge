import { FilterType, PriorityType } from "@/app/contexts/filterContext"

export const getCategoryByType = (type: FilterType) => {
  if(type === FilterType.MUG) return "mugs";
  if(type === FilterType.SHIRT) return "t-shirts";
  return "";
};

export const getFieldByPriority = (priority: PriorityType) => {
  if(priority === PriorityType.NEWS) return {
    field: "created_at",
    order: "ASC"
  };
  if(priority === PriorityType.BIGGEST_PRICE) return {
    field: "price_in_cents",
    order: "ASC"
  };
  if(priority === PriorityType.LOWEST_PRICE) return {
    field: "price_in_cents",
    order: "DESC"
  };
  return {
    field: "sales",
    order: "ASC"
  };
};

export const mountQueryByType = (type: FilterType, priority: PriorityType) => {
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
