export { };

declare global {
  interface Window {
    gtag: (event: string, action: string, option) => void;
  }
}