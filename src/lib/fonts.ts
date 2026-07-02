import { Fraunces, Instrument_Sans } from "next/font/google";

/**
 * Fraunces: serifada de display com eixo óptico — personalidade editorial.
 * Usada com contenção: títulos e momentos de destaque, nunca em texto corrido.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

/**
 * Instrument Sans: corpo neutro e contemporâneo que não disputa
 * atenção com a display. Legibilidade primeiro.
 */
export const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
