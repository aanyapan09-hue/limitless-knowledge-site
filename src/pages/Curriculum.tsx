import PageShell from "@/components/PageShell";
import { BookOpen, Calculator, Beaker, Palette } from "lucide-react";

const english = {
  overview: [
    "Parts of speech (verbs, nouns, adjectives, adverbs)",
    "Simple, compound, and complex sentence structures",
    "Declarative, interrogative, imperative, and exclamatory sentences",
    "Prefixes and suffixes",
    "Phrases and clauses",
    "Tenses",
    "Tone, mood, and roots to expand vocabulary",
  ],
  grades: [
    {
      grade: "Grade 3",
      topics: [
        "Parts of speech (nouns, verbs, adjectives, adverbs)",
        "Simple sentence structure",
        "Declarative, interrogative, imperative, exclamatory sentences",
        "Basic verb tenses (past, present, future)",
        "Introduction to prefixes & suffixes",
        "Avoiding sentence fragments",
      ],
      activities: [
        "Color-coded parts of speech",
        "Build sentences with word cards",
        "Short writing workshops",
        "Root word + prefix matching games",
      ],
    },
    {
      grade: "Grade 4",
      topics: [
        "Compound sentences (using FANBOYS)",
        "Introduction to complex sentences",
        "Phrases vs. clauses",
        "Run-on sentences",
        "Stronger vocabulary building (roots, prefixes, suffixes)",
        "Tone & mood basics",
      ],
      activities: [
        "Combine simple sentences into compound ones",
        "\"Find the run-on\" challenges",
        "Short reading passages to identify tone",
        "Vocabulary expansion journals",
        "Sentence combining competitions",
      ],
    },
    {
      grade: "Grade 5",
      topics: [
        "Complex sentence structures",
        "Independent vs dependent clauses",
        "Perfect tenses",
        "Tone vs mood distinction",
        "Figurative language basics",
        "Advanced vocabulary development",
      ],
      activities: [
        "Transform simple → compound → complex",
        "Analyze short stories for mood",
        "Editing workshops",
      ],
    },
    {
      grade: "Grade 6",
      topics: [
        "Compound-complex sentences",
        "Verb consistency",
        "Advanced tone & author's purpose",
        "Academic vocabulary development",
        "Paragraph & short essay writing",
        "Eliminating fragments & run-ons independently",
      ],
      activities: ["Thesis writing", "Peer editing", "All previous activities"],
    },
  ],
};

const math = [
  "Small intro to graphing — making cute pictures with graphs",
  "Fractions intro using pies & pizzas",
  "Like denominators: adding and subtracting (with blocks)",
  "PEMDAS — calling out how to solve a problem",
  "Easy algebra (e.g. 2x + 3 = 5) with color-by-number solves",
  "Intro to ratios using pies and pizza pieces",
  "Visual learning: shapes, area, integers, number lines",
  "Curated short math videos (only the genuinely useful ones)",
];

const science = [
  { title: "Cell Biology Puzzle Pieces", desc: "Paper, scissors, markers — build a cell." },
  { title: "The Grand Cell Tour", desc: "Introduction to what makes a cell tick." },
  { title: "Organ Paper Body Scramble", desc: "Reassemble the human body, organ by organ." },
  { title: "Weather Systems", desc: "Identify clouds and atmosphere with cotton & construction paper." },
  { title: "Corn Germination Necklaces", desc: "Corn kernels, mini baggies, string, damp paper towel." },
  { title: "Spy Kids Day", desc: "Fingerprinting, forensic science, observation skills." },
  { title: "Resources", desc: "Amoeba Sisters, National Geographic, Mystery Doug." },
];

const art = [
  { activity: "Sketching", materials: "A4 paper, pencils" },
  { activity: "Coloring & Coloring Pages", materials: "Printed sheets, A4 paper, Crayola markers and colored pencils" },
  { activity: "Tie-Dye Shirts", materials: "White t-shirts (bring from home), tie-dye, rubber bands" },
  { activity: "Origami", materials: "Construction paper, scissors" },
  { activity: "Paper Plate Crafts", materials: "Paper plates, construction paper, markers" },
  { activity: "Pony Bead Crafts", materials: "Pony beads, string" },
  { activity: "Pipe Cleaner Crafts", materials: "Pipe cleaners — little animals & flowers" },
];

export default function Curriculum() {
  return (
    <PageShell>
      <section className="container py-16 md:py-24">
        <span className="chip bg-accent mb-4">Official curriculum</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
          Everything your camper will learn.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Four subjects, designed by students, built around hands-on activities. We seamlessly
          blend fun with knowledge so camp never feels like school.
        </p>
      </section>

      {/* ENGLISH */}
      <section className="container pb-16">
        <div className="pop-card p-8 md:p-12 bg-secondary">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8" />
            <h2 className="font-display text-4xl md:text-5xl">English</h2>
          </div>
          <h3 className="font-display text-xl mb-3">Topics overview</h3>
          <ul className="grid md:grid-cols-2 gap-2 mb-8">
            {english.overview.map((t) => (
              <li key={t} className="flex gap-2 font-medium text-sm">
                <span className="text-primary font-bold">▸</span> {t}
              </li>
            ))}
          </ul>

          <h3 className="font-display text-xl mb-4">By grade</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {english.grades.map((g) => (
              <div key={g.grade} className="pop-card-sm bg-card p-5">
                <h4 className="font-display text-2xl mb-3">{g.grade}</h4>
                <p className="text-xs uppercase font-bold tracking-wider mb-1 text-muted-foreground">Topics</p>
                <ul className="text-sm font-medium mb-3 space-y-1">
                  {g.topics.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
                <p className="text-xs uppercase font-bold tracking-wider mb-1 text-muted-foreground">Activities</p>
                <ul className="text-sm font-medium space-y-1">
                  {g.activities.map((a) => (
                    <li key={a}>• {a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATH */}
      <section className="container pb-16">
        <div className="pop-card p-8 md:p-12 bg-accent">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8" />
            <h2 className="font-display text-4xl md:text-5xl">Math</h2>
          </div>
          <p className="font-medium mb-6 max-w-2xl">
            Visual learning is the core: pie charts for fractions, blocks for area, scavenger
            hunts for problem-solving, and stand-up board lessons.
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {math.map((m) => (
              <li key={m} className="pop-card-sm bg-card p-4 text-sm font-medium flex gap-2">
                <span className="text-primary font-bold">▸</span> {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="container pb-16">
        <div className="pop-card p-8 md:p-12 bg-sun">
          <div className="flex items-center gap-3 mb-6">
            <Beaker className="w-8 h-8" />
            <h2 className="font-display text-4xl md:text-5xl">Science</h2>
          </div>
          <p className="font-medium mb-6 max-w-2xl">
            Campers analyze data and use evidence to explain phenomena — from plant and animal
            structures to Earth's weather systems and human anatomy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {science.map((s) => (
              <div key={s.title} className="pop-card-sm bg-card p-5">
                <h4 className="font-display text-lg mb-1">{s.title}</h4>
                <p className="text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ART */}
      <section className="container pb-24">
        <div className="pop-card p-8 md:p-12 bg-lilac">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-8 h-8" />
            <h2 className="font-display text-4xl md:text-5xl">Art</h2>
          </div>
          <p className="font-medium mb-6 max-w-2xl">
            Basic forms, sketching, finger painting, origami, tie-dye, paper plate scenes,
            pony bead bracelets, and pipe cleaner critters.
          </p>
          <div className="overflow-hidden rounded-2xl border-2 border-foreground bg-card">
            <table className="w-full text-left">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="p-4 font-display">Activity</th>
                  <th className="p-4 font-display">Materials</th>
                </tr>
              </thead>
              <tbody>
                {art.map((row, i) => (
                  <tr key={row.activity} className={i % 2 ? "bg-muted" : ""}>
                    <td className="p-4 font-bold">{row.activity}</td>
                    <td className="p-4 font-medium text-sm">{row.materials}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
