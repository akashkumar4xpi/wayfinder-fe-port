"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// ─── Custom event helper — call anywhere in the app ──────────────────────────
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

// ─── Pre-defined Wayfinder custom events ──────────────────────────────────────
export const WayfinderEvents = {
  /** Fire when contact/demo form is submitted successfully */
  leadFormSubmitted: (source: string) =>
    trackEvent("lead_form_submitted", { event_category: "engagement", event_label: source }),

  /** Fire when user clicks "Book Demo" button */
  demoViewed: (page: string) =>
    trackEvent("wayfinder_demo_viewed", { event_category: "engagement", event_label: page }),

  /** Fire when user clicks a solution page CTA */
  solutionCTAClicked: (industry: string) =>
    trackEvent("solution_cta_clicked", { event_category: "conversion", event_label: industry }),

  /** Fire when pricing page CTA is clicked */
  pricingCTAClicked: (plan: string) =>
    trackEvent("pricing_cta_clicked", { event_category: "conversion", event_label: plan }),

  /** Fire when a page is scrolled 50%+ depth */
  pageEngaged: (page: string) =>
    trackEvent("page_engaged", { event_category: "engagement", event_label: page }),
};

// ─── Inner component that uses useSearchParams (must be wrapped in Suspense) ──
function AnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Fire a page_view event on every route change (SPA navigation)
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    if (window.gtag) {
      window.gtag("config", gaId, { page_path: url });
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

// ─── Main GoogleAnalytics component ──────────────────────────────────────────
export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      {/* Load GA4 script asynchronously — does not block rendering */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
      {/* Track SPA route changes */}
      <Suspense fallback={null}>
        <AnalyticsTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
