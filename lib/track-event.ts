export async function trackEvent(event: string, data?: Record<string, any>) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, data }),
    })
  } catch (error) {
    console.error("[v0] Failed to track event:", error)
  }
}
