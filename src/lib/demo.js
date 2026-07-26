const configuredPlatformApi =
  (import.meta.env.VITE_PLATFORM_API || import.meta.env.VITE_PLATFORM_URL || "").trim();
const PLATFORM_API = configuredPlatformApi.replace(/\/$/, "");

function getNetworkErrorMessage(error) {
  if (error instanceof TypeError) {
    const label = import.meta.env.DEV
      ? `Cannot reach demo API at ${PLATFORM_API}.`
      : "Demo service is temporarily unavailable.";
    return `${label} Check that VITE_PLATFORM_API is reachable and points to a running platform instance.`;
  }
  if (
    error instanceof Error &&
    error.message.includes("supabase_client_init_failed")
  ) {
    return (
      "Demo API is configured incorrectly on the platform side. " +
      "Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in enigma-platform/.env.local and restart."
    );
  }
  return error instanceof Error ? error.message : "Unable to launch demo.";
}

export async function launchDemo() {
  if (!PLATFORM_API) {
    throw new Error(
      "Demo API URL is not configured. Set VITE_PLATFORM_API (or VITE_PLATFORM_URL) in the landing env."
    );
  }

  const res = await fetch(`${PLATFORM_API}/api/audits/demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const detail = data?.detail ? `: ${data.detail}` : "";
    const message = data?.message || data?.error || "Unable to launch demo.";
    throw new Error(`${message}${detail}`);
  }

  if (!data.handoff_url) {
    throw new Error("Demo service returned no handoff link.");
  }

  const opened = window.open(data.handoff_url, "_blank");
  if (!opened) {
    window.location.href = data.handoff_url;
    return;
  }
  try {
    opened.opener = null;
  } catch {
    // Some browsers restrict access to the opened window; the demo still opens.
  }
}

export { getNetworkErrorMessage };
