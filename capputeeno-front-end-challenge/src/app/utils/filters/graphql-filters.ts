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