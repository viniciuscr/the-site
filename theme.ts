"use client";

import { createTheme, rem } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

/**
 * Color theme generated from https://coolors.co/26547c-492c1d-bb6b00-a1c181-7ea8be
 */

export const theme = createTheme({
  primaryColor: "greenblue",

  fontSizes: {
    xs: rem(13),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
  },

  colors: {
    greenblue: generateColors("2364AA"),
    pictonblue: generateColors("3DA5D9"),
    verdigris: generateColors("73BFB8"),
    pumpkin: generateColors("EA7317"),
  },
});
