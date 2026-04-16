import PageShell from "@/components/PageShell";

const days = [
  {
    day: "Day 1",
    title: "Opening Ceremony",
    badge: "Special",
    items: [
      "Intro to camp + parent welcome",
      "Meet the staff and mission",
      "Get to know the kids (stickers!)",
      "Science: Cloud in the Bottle ⚠️ DANGER ⚠️",
    ],
  },
  {
    day: "Day 2",
    title: "Foundations",
    items: [
      "English: Grammar fundamentals",
      "Art: Shapes — drawing figures, small tutorials",
      "Math: Integers and number line",
    ],
  },
  {
    day: "Day 3",
    title: "Reading & Weather",
    items: [
      "English: Annotations",
      "Science: Weather systems",
      "Art: Construction paper crafts",
    ],
  },
  {
    day: "Day 4",
    title: "Fractions & Cells",
    items: [
      "Math: Simple fraction addition (pies & pizzas)",
      "Science: Cell Biology Puzzle Pieces",
      "English: Story writing",
    ],
  },
  {
    day: "Day 5",
    title: "Anatomy & Story",
    items: [
      "Prep + hang out time",
      "Science: Organ Puzzle Pieces",
      "Math: Like denominators / multiplying",
    ],
  },
  {
    day: "Day 6",
    title: "Tie-Dye Day",
    badge: "Special",
    items: [
      "Math: Graphing points",
      "Art: Tie-Dye shirts (the camp shirt!)",
      "Backup activity if needed",
    ],
  },
  {
    day: "Day 7",
    title: "Spy Kids Day",
    badge: "Special",
    items: [
      "Forensic science & fingerprinting",
      "Observation skills",
      "Science: Corn Germination Seed Necklaces",
    ],
  },
  {
    day: "Day 8",
    title: "Character Day",
    badge: "Special",
    items: [
      "Dress as your favorite character",
      "Public speaking + creative writing",
      "English: Parts of speech",
      "Math: Simple algebra",
      "Art rotation: beads, pipe cleaners, origami",
    ],
  },
  {
    day: "Day 9",
    title: "Pizza Party & Closing",
    badge: "Special",
    items: [
      "Banner painting (everyone signs)",
      "Pizza party 🍕",
      "Closing ceremony + camp reflections",
      "Student farewell",
    ],
  },
];

export default function Schedule() {
  return (
    <PageShell>
      <section className="container py-16 md:py-24">
        <span className="chip bg-sun mb-4">9 days. 4 special events.</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
          The full camp schedule.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Day by day, here's what your camper will be up to. Each day mixes academics,
          art, and a hands-on twist.
        </p>
      </section>

      <section className="container pb-24">
        <div className="relative space-y-6">
          {days.map((d, i) => (
            <div key={d.day} className="grid md:grid-cols-[140px_1fr] gap-4 items-start">
              <div className="pop-card-sm bg-foreground text-background p-4 text-center md:sticky md:top-24">
                <div className="font-display text-2xl">{d.day}</div>
                {d.badge && (
                  <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-sun text-foreground font-bold">
                    ★ {d.badge}
                  </span>
                )}
              </div>
              <div
                className={`pop-card p-6 ${
                  d.badge ? "bg-accent" : "bg-card"
                }`}
                style={{ transform: `rotate(${(i % 2 === 0 ? -0.4 : 0.4)}deg)` }}
              >
                <h3 className="font-display text-2xl md:text-3xl mb-3">{d.title}</h3>
                <ul className="space-y-1.5">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-2 font-medium text-sm">
                      <span className="text-primary font-bold">▸</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
