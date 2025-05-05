"use client"

import { useBlogStore } from "@/store/blog-store"
import type { Post } from "@/types/post"

interface BlogPostProps {
  post: Post
  isFullPost: boolean
}

export function BlogPost({ post, isFullPost }: BlogPostProps) {
  const { setActivePost } = useBlogStore()

  return (
    <article className="blog-post bg-[#1a1a20] rounded-lg overflow-hidden shadow-lg border border-gray-800/30">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-xs text-[rgb(var(--accent-color))]">{post.date}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-xs text-gray-400">{post.readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[rgb(var(--heading-color))]">{post.title}</h3>

        {isFullPost ? (
          <div className="mt-4 text-gray-300 space-y-4">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <button
              onClick={() => setActivePost(post.id)}
              className="text-[rgb(var(--accent-color))] hover:text-[rgba(var(--accent-color),0.8)] font-medium transition-colors"
            >
              Read More →
            </button>
          </>
        )}
      </div>
    </article>
  )
}
