import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlackKanban – Turn Slack Threads into Visual Project Boards',
  description: 'Automatically convert Slack threads into Kanban boards with drag-drop task management and real-time progress tracking. Built for small teams and project managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6103b89f-1154-4e33-bea5-062f01a5bb4a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
