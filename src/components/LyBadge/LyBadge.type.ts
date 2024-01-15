import { LyVariants } from "@/composables/useVariants";
import { LySizes } from "@/composables/useSizes";

export const lyBadgeVariants = [
  LyVariants.PRIMARY,
  LyVariants.DANGER,
  LyVariants.SUCCESS,
  LyVariants.WARNING,
] as const;

export const lyBadgeSizes = [
  LySizes.SMALL,
  LySizes.MEDIUM,
  LySizes.LARGE,
] as const;
