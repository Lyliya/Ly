import { PropType } from "vue";

export enum Variant {
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export const availableVariant = [
  "primary",
  "success",
  "danger",
  "warning",
] as const;
export type VariantType = (typeof availableVariant)[number];

export const useVariants = <T extends VariantType = VariantType>() => ({
  variant: {
    type: String as unknown as PropType<T>,
    required: false,
    default: "success",
  },
});
