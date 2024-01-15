import { PropType } from "vue";

export enum LySizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const useSizes = <T extends readonly LySizes[] = LySizes[]>(
  sizeDefault: `${LySizes}` = LySizes.MEDIUM
) => ({
  size: {
    type: String as PropType<`${T[number]}`>,
    required: false,
    default: sizeDefault,
  },
});
