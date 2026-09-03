/**
 * reCAPTCHA v3 — invisible, score-based verification.
 *
 * Mirrors careers/src/components/captcha/recaptcha.ts. Both front ends post to
 * the same Spring backend, and one secret key only validates tokens minted by
 * its own site key — so the two apps must be on the same version and the same
 * key. When Careers moved to v3, this form had to move with it or the contact
 * endpoint would start rejecting every submission.
 *
 * v2's image challenge is not configurable: Google serves it whenever its risk
 * analysis is unsure. v3 renders no widget and asks the visitor for nothing.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-v3";

export const CAPTCHA_ACTIONS = {
  CONTACT: "contact",
};

let loader = null;

function loadRecaptcha() {
  if (loader) return loader;

  loader = new Promise((resolve) => {
    if (typeof window === "undefined" || !SITE_KEY) {
      resolve(null);
      return;
    }

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => resolve(window.grecaptcha));
      return;
    }

    const existing = document.getElementById(SCRIPT_ID);
    const script = existing ?? document.createElement("script");

    if (!existing) {
      script.id = SCRIPT_ID;
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", () => {
      window.grecaptcha?.ready(() => resolve(window.grecaptcha));
    });
    // A blocked script must not leave the submit button hanging forever.
    script.addEventListener("error", () => resolve(null));
  });

  return loader;
}

/**
 * Mints a token for one action, or null when reCAPTCHA is unavailable.
 * Null means "no proof obtained", never "proceed anyway" — the backend is the
 * authority and rejects a missing, mismatched or low-scoring token.
 */
export async function executeRecaptcha(action) {
  const grecaptcha = await loadRecaptcha();
  if (!grecaptcha || !SITE_KEY) return null;

  try {
    return await grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return null;
  }
}

/** Warms the script so the first submit is not waiting on a network fetch. */
export function preloadRecaptcha() {
  void loadRecaptcha();
}
