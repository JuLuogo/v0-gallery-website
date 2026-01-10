"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ImageGallery } from "@/components/image-gallery"
import { SiteHeader } from "@/components/site-header"

function HomeContent() {
  const searchParams = useSearchParams()
  const [galleryType, setGalleryType] = useState<"horizontal" | "vertical">("horizontal")

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "vertical") {
      setGalleryType("vertical")
    } else if (type === "horizontal") {
      setGalleryType("horizontal")
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SiteHeader galleryType={galleryType} setGalleryType={setGalleryType} />

      <main className="container mx-auto px-4 py-8">
        <ImageGallery key={galleryType} type={galleryType} />
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}
