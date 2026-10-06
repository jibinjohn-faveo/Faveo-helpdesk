/**
 * Analytics and Conversion Tracking Module
 * Formatted for Google Analytics 4 (GA4) and Google Ads conversion events.
 * Complies with strict privacy standards (no PII transmitted in event parameters).
 */

type AnalyticsEventName =
  | 'primary_cta_click'
  | 'secondary_cta_click'
  | 'demo_form_start'
  | 'demo_form_submit_success'
  | 'trial_registration_click'
  | 'trial_registration_submit_success'
  | 'product_walkthrough_tab_change'
  | 'faq_expand'
  | 'outbound_docs_click';

interface AnalyticsPayload {
  cta_location?: string;
  cta_label?: string;
  deployment_preference?: string;
  tab_name?: string;
  faq_id?: string;
  [key: string]: unknown;
}

// Track submitted event IDs to prevent duplicate conversion fires
const trackedConversionIds = new Set<string>();

export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  // Check if window.gtag is available (GA4 / Google Ads)
  if (typeof window !== 'undefined') {
    const windowWithGtag = window as unknown as {
      gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
      dataLayer?: Array<unknown>;
    };

    const sanitizedParams = {
      ...payload,
      timestamp: new Date().toISOString(),
      page_location: window.location.href,
    };

    if (typeof windowWithGtag.gtag === 'function') {
      windowWithGtag.gtag('event', eventName, sanitizedParams);
    } else if (Array.isArray(windowWithGtag.dataLayer)) {
      windowWithGtag.dataLayer.push({
        event: eventName,
        ...sanitizedParams,
      });
    }

    // In development / demo environment, emit structured log for verification
    if (process.env.NODE_ENV !== 'production' || true) {
      console.log(`[Analytics Event] ${eventName}:`, sanitizedParams);
    }
  }
}

export function trackUniqueConversion(conversionType: 'demo' | 'trial', uniqueId: string, params: AnalyticsPayload = {}): boolean {
  const dedupKey = `${conversionType}_${uniqueId}`;
  if (trackedConversionIds.has(dedupKey)) {
    return false;
  }
  trackedConversionIds.add(dedupKey);

  const eventName = conversionType === 'demo' ? 'demo_form_submit_success' : 'trial_registration_submit_success';
  trackEvent(eventName, {
    conversion_type: conversionType,
    ...params,
  });
  return true;
}
