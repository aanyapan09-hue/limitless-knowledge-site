import PageShell from "@/components/PageShell";

const counselors = [
  { name: "Aanya", role: "Web & Brand Lead", color: "bg-accent", emoji: "💻" },
  { name: "Counselor 2", role: "Curriculum Lead", color: "bg-secondary", emoji: "📚" },
  { name: "Counselor 3", role: "Science Lead", color: "bg-sun", emoji: "🔬" },
  { name: "Counselor 4", role: "Art Lead", color: "bg-lilac", emoji: "🎨" },
  { name: "Counselor 5", role: "Operations Lead", color: "bg-card", emoji: "✨" },
];

export default function Counselors() {
  return (
    <PageShell>
      <section className="container py-16 md:py-24">
        <span className="chip bg-lilac mb-4">Meet the team</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
          The five students behind Limitless Knowledge.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          We're high schoolers who love teaching, building, and making summer
          unforgettable for younger kids. Here's who you'll meet at camp.
        </p>
      </section>

      <section className="container pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {counselors.map((c, i) => (
            <div
              key={c.name}
              className={`pop-card p-8 ${c.color}`}
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.2}deg)` }}
            >
              <div className="w-20 h-20 rounded-full bg-card border-2 border-foreground shadow-pop-sm flex items-center justify-center text-4xl mb-4">
                {c.emoji}
              </div>
              <h3 className="font-display text-3xl mb-1">{c.name}</h3>
              <p className="text-sm font-bold uppercase tracking-wide mb-3">{c.role}</p>
              <p className="text-sm font-medium">
                Bio coming soon — tell us about your favorite subject, what you bring to camp,
                and what you're most excited to teach!
              </p>
            </div>
          ))}
        </div>

        <div className="pop-card-sm bg-card p-6 mt-10 text-center">
          <p className="font-medium">
            Want to share your bio? Send your name, role, and a few sentences about
            yourself to the team and we'll add it here.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
