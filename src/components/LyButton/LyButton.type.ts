import { LyVariants } from "@/composables/useVariants";
import { LySizes } from "@/composables/useSizes";

export const lyButtonVariants = [
  LyVariants.PRIMARY,
  LyVariants.DANGER,
  LyVariants.SUCCESS,
  LyVariants.WARNING,
] as const;

export const lyButtonSizes = [
  LySizes.SMALL,
  LySizes.MEDIUM,
  LySizes.LARGE,
] as const;
