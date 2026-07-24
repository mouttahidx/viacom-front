type RecaptchaVerifyResult = {
  success: boolean;
  error?: string;
};

export async function verifyRecaptchaToken(
  token: string | undefined | null,
  remoteIp?: string | null
): Promise<RecaptchaVerifyResult> {
  if (!token) {
    return { success: false, error: "missing-token" };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    return { success: false, error: "missing-secret" };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });
    const data = (await res.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };
    if (!data.success) {
      return {
        success: false,
        error: data["error-codes"]?.[0] || "verify-failed",
      };
    }
    return { success: true };
  } catch (err) {
    console.error("reCAPTCHA verify failed", err);
    return { success: false, error: "verify-request-failed" };
  }
}

export function getRecaptchaSiteKey() {
  return (
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ||
    "6LfpNLgpAAAAAMJxMDeW89ER3_TdDwSf6ZqDTSP1"
  );
}
