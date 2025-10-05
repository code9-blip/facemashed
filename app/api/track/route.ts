import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { event, data } = await request.json()

    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL

    if (!webhookUrl) {
      console.log("[v0] No webhook URL configured")
      return NextResponse.json({ success: false, error: "No webhook configured" })
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    })

    let message = ""
    switch (event) {
      case "site_opened":
        message = `💝 She opened the birthday website!\n⏰ Time: ${timestamp}`
        break
      case "password_entered":
        message = `🔓 She entered the password successfully!\n⏰ Time: ${timestamp}`
        break
      case "section_viewed":
        message = `👀 She's viewing: ${data.section}\n⏰ Time: ${timestamp}`
        break
      case "song_played":
        message = `🎵 She's playing: ${data.song}\n⏰ Time: ${timestamp}`
        break
      case "memory_picked":
        message = `💭 She picked a memory from the jar!\n⏰ Time: ${timestamp}`
        break
      case "love_slider_moved":
        message = `💕 She moved the love slider to: ${data.value}%\n⏰ Time: ${timestamp}`
        break
      case "letter_revealed":
        message = `💌 She revealed the love letter!\n⏰ Time: ${timestamp}`
        break
      default:
        message = `📊 Event: ${event}\n⏰ Time: ${timestamp}`
    }

    const isTelegram = webhookUrl.includes("api.telegram.org")

    if (isTelegram) {
      // Telegram format
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: message,
        }),
      })
    } else {
      // Discord/Slack format
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: message,
          username: "Birthday Site Tracker",
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Tracking error:", error)
    return NextResponse.json({ success: false, error: "Failed to track event" })
  }
}
