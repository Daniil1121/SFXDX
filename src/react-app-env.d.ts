/// <reference types="react-scripts" />
import { MetaMaskInpageProvider } from "@metamask/providers";

declare module "*.jpg";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
