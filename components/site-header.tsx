"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

interface SiteHeaderProps {
  galleryType?: "horizontal" | "vertical" | "joined"
  setGalleryType?: (type: "horizontal" | "vertical" | "joined") => void
}

export function SiteHeader({ galleryType, setGalleryType }: SiteHeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-balance">
            AcoFork PicGallery
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 rounded-lg bg-muted p-1">
              <button
                onClick={() => {
                  if (isHomePage && setGalleryType) {
                    setGalleryType("horizontal")
                  } else {
                    window.location.href = "/?type=horizontal"
                  }
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isHomePage && galleryType === "horizontal"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                横屏
              </button>
              <button
                onClick={() => {
                  if (isHomePage && setGalleryType) {
                    setGalleryType("vertical")
                  } else {
                    window.location.href = "/?type=vertical"
                  }
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isHomePage && galleryType === "vertical"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                竖屏
              </button>
              <button
                onClick={() => {
                  if (isHomePage && setGalleryType) {
                    setGalleryType("joined")
                  } else {
                    window.location.href = "/?type=joined"
                  }
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isHomePage && galleryType === "joined"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                自选
              </button>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
