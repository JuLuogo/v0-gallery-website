"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/image-gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-balance">Gallery</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="horizontal" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="horizontal" className="text-base">
              横屏
            </TabsTrigger>
            <TabsTrigger value="vertical" className="text-base">
              竖屏
            </TabsTrigger>
          </TabsList>

          <TabsContent value="horizontal" className="mt-0">
            <ImageGallery type="horizontal" />
          </TabsContent>

          <TabsContent value="vertical" className="mt-0">
            <ImageGallery type="vertical" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
