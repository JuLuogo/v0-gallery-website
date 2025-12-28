import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("[v0] Fetching random.js from pic.acofork.com...")
    const response = await fetch("https://pic.acofork.com/random.js")
    const text = await response.text()
    console.log("[v0] Received response, parsing counts...")

    const match = text.match(/var counts = ({[^}]+})/)
    if (match) {
      const countsStr = match[1]
      const counts = JSON.parse(countsStr)
      console.log("[v0] Parsed counts:", counts)

      return NextResponse.json({
        horizontal: counts.h,
        vertical: counts.v,
      })
    }

    console.error("[v0] Failed to match counts pattern in response")
    return NextResponse.json({ error: "Failed to parse counts" }, { status: 500 })
  } catch (error) {
    console.error("[v0] Failed to fetch counts:", error)
    return NextResponse.json({ error: "Failed to fetch counts" }, { status: 500 })
  }
}
