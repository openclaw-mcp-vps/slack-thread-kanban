export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack + Kanban = Clarity
        </div>
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          Turn Slack Threads into<br />
          <span className="text-[#58a6ff]">Visual Project Boards</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop losing tasks in Slack threads. SlackKanban automatically converts your team conversations into interactive Kanban boards with drag-drop management and real-time sync.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Free Trial – $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-left">
            {["To Do", "In Progress", "Done"].map((col, i) => (
              <div key={col} className="bg-[#0d1117] rounded-lg p-3">
                <div className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-3">{col}</div>
                {[0, 1].map((j) => (
                  <div key={j} className="bg-[#161b22] border border-[#30363d] rounded p-2 mb-2 text-xs text-[#c9d1d9]">
                    <div className="w-full h-2 bg-[#30363d] rounded mb-1"></div>
                    <div className={`h-2 bg-[#30363d] rounded`} style={{width: `${60 + (i + j) * 10}%`}}></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-8">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Kanban boards",
              "Real-time Slack sync",
              "Drag-drop task management",
              "Up to 10 monitored channels",
              "Progress tracking & reports",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does SlackKanban connect to my Slack workspace?",
              a: "SlackKanban uses Slack OAuth to securely connect to your workspace. You authorize access to specific channels, and we use Slack's Events API to monitor threads in real time — no passwords stored."
            },
            {
              q: "Will it work with my existing Slack threads?",
              a: "Yes. Once connected, SlackKanban can import existing threads from your selected channels and convert them into Kanban cards. New messages in those threads automatically sync as task updates."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Absolutely. You can cancel anytime from your billing dashboard. Your boards remain accessible until the end of your billing period, and you can export your data at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} SlackKanban. All rights reserved.
      </footer>
    </main>
  )
}
