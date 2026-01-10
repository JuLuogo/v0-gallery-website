"use client"

import { SiteHeader } from "@/components/site-header"

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">自选分类</h1>
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p>这里是自选图片展示区域</p>
            <p className="text-sm mt-2">（内容待添加）</p>
        </div>
      </main>
    </div>
  )
}
