import { ThemeProivder } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProivder>
      <Component {...pageProps} />
    </ThemeProivder>
  );
}
