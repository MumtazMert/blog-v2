import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function BlogHeader() {
  return (
    <header className="py-6 border-b border-gray-800/30">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link
          href="/public"
          className="text-3xl font-bold text-[rgb(var(--accent-color))] hover:text-[rgba(var(--accent-color),0.8)] transition-colors"
        >
          M.MT Blog
        </Link>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://portfolio-murex-nine-31.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[rgb(var(--accent-color))] transition-colors flex items-center gap-1"
              >
                Portfolio
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
