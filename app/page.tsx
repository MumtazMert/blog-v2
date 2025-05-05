import { BlogHeader } from "@/components/blog-header"
import { BlogList } from "@/components/blog-list"
import { BlogFooter } from "@/components/blog-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background-start-rgb))] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <BlogHeader />
        <main className="py-8">
          <BlogList />
        </main>
        <BlogFooter />
      </div>
    </div>
  )
}
