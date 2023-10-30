import type { Variant /* VariantType */ } from "@/composables/useVariants";

export type LyButtonVariants = `${Exclude<Variant, Variant.WARNING>}`;
// export type LyButtonVariants = VariantType;
