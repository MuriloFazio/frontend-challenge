import { FilterType } from "@/app/contexts/filterContext"

export const getCategoryByType = (type: FilterType) => {
  console.log("filter type: ", type)
  console.log("FilterType.MUG: ", FilterType.MUG)
  console.log("FilterType.MUG: ", FilterType.SHIRT)
  if(type === FilterType.MUG) return "mugs"
  if(type === FilterType.SHIRT) return "t-shirts"
  return FilterType.ALL;
};

