"use client"

import { useEffect } from "react"
import { BlogPost } from "@/components/blog-post"
import { useBlogStore } from "@/store/blog-store"
import { posts } from "@/data/posts"

export function BlogList() {
  const { setAllPosts, allPosts, activePostId, setActivePost } = useBlogStore()

  useEffect(() => {
    setAllPosts(posts)
  }, [setAllPosts])

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold text-purple-400 mb-6">Latest Posts</h2>

      {activePostId ? (
        <div>
          <button
            onClick={() => setActivePost(null)}
            className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-200 transition-colors"
          >
            ← Back to all posts
          </button>
          {allPosts.find((post) => post.id === activePostId) && (
            <BlogPost post={allPosts.find((post) => post.id === activePostId)!} isFullPost={true} />
          )}
        </div>
      ) : (
        <div className="flex flex-col space-y-8">
          {allPosts.map((post) => (
            <BlogPost key={post.id} post={post} isFullPost={false} />
          ))}
        </div>
      )}
    </div>
  )
}
