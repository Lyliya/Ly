import { PropType } from "vue";

export enum Variant {
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export const availableVariant = ["success", "danger", "warning"] as const;
export type VariantType = (typeof availableVariant)[number];

export const useVariants = <T extends VariantType = VariantType>() => ({
  variant: {
    type: String as unknown as PropType<T>,
    required: false,
    default: "success",
  },
});
