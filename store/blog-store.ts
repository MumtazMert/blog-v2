import { create } from "zustand"
import type { Post } from "@/types/post"

interface BlogState {
  allPosts: Post[]
  activePostId: string | null
  setAllPosts: (posts: Post[]) => void
  setActivePost: (postId: string | null) => void
  addPost: (post: Post) => void
  publishToLinkedIn: (postId: string) => Promise<boolean>
}

export const useBlogStore = create<BlogState>((set, get) => ({
  allPosts: [],
  activePostId: null,
  setAllPosts: (posts) => set({ allPosts: posts }),
  setActivePost: (postId) => set({ activePostId: postId }),
  addPost: async (post) => {
    set((state) => ({
      allPosts: [post, ...state.allPosts],
    }))

    // Automatically share to LinkedIn whenever a post is added
    try {
      const response = await fetch("/api/share-to-linkedin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          text: post.excerpt,
          articleUrl: `${window.location.origin}/posts/${post.id}`,
        }),
      })

      if (!response.ok) {
        console.error("Failed to share to LinkedIn automatically")
      } else {
        console.log("Successfully shared to LinkedIn")
      }
    } catch (error) {
      console.error("Error sharing to LinkedIn:", error)
    }
  },
  publishToLinkedIn: async (postId) => {
    const { allPosts } = get()
    const post = allPosts.find((p) => p.id === postId)

    if (!post) return false

    try {
      const response = await fetch("/api/share-to-linkedin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          text: post.excerpt,
          articleUrl: `${window.location.origin}/posts/${post.id}`,
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Error publishing to LinkedIn:", error)
      return false
    }
  },
}))
