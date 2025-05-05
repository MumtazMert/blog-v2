import { create } from "zustand"
import type { Post } from "@/types/post"

interface BlogState {
  allPosts: Post[]
  activePostId: string | null
  setAllPosts: (posts: Post[]) => void
  setActivePost: (postId: string | null) => void
}

export const useBlogStore = create<BlogState>((set) => ({
  allPosts: [],
  activePostId: null,
  setAllPosts: (posts) => set({ allPosts: posts }),
  setActivePost: (postId) => set({ activePostId: postId }),
}))
