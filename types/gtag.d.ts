// Type augmentation so TypeScript knows about window.gtag injected by Google Analytics
interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

interface Window {
  gtag: (
    command: "config" | "event" | "js" | "set",
    targetId: string | Date,
    params?: GtagEventParams | { page_path?: string; send_page_view?: boolean }
  ) => void;
  dataLayer: unknown[];
}
