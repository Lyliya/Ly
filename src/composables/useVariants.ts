import { PropType } from "vue";

export enum LyVariants {
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export const useVariants = <T extends readonly LyVariants[] = LyVariants[]>(
  variantDefault: `${LyVariants}` = LyVariants.PRIMARY
) => ({
  variant: {
    type: String as PropType<`${T[number]}`>,
    required: false,
    default: variantDefault,
  },
});
