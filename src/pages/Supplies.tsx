import PageShell from "@/components/PageShell";
import { Pencil, Highlighter, Palette, BookMarked, Eraser, Scissors, Shirt, Sparkles } from "lucide-react";

const items = [
  { icon: Pencil, name: "Pencil", note: "For all writing & math" },
  { icon: Highlighter, name: "Highlighters", note: "Annotations and color-coding" },
  { icon: Palette, name: "Color Pencils", note: "For art & worksheets" },
  { icon: BookMarked, name: "Notebook", note: "For notes and journaling" },
  { icon: Eraser, name: "Eraser", note: "Mistakes are part of learning!" },
  { icon: Sparkles, name: "Glue Stick", note: "Crafts and worksheets" },
  { icon: Shirt, name: "Old White T-Shirt", note: "For tie-dye day — wear something you love" },
  { icon: Scissors, name: "Child-Friendly Scissors", note: "Safety first ✂️" },
];

export default function Supplies() {
  return (
    <PageShell>
      <section className="container py-16 md:py-24">
        <span className="chip bg-secondary mb-4">Pack your bag</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
          What to bring to camp.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          A quick checklist so your camper shows up ready for nine days of building, drawing,
          experimenting, and writing. Everything else? We've got it covered.
        </p>
      </section>

      <section className="container pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.name}
              className="pop-card p-6 bg-card flex gap-4 items-start"
              style={{ transform: `rotate(${(i % 2 === 0 ? -0.6 : 0.6)}deg)` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent border-2 border-foreground flex items-center justify-center shrink-0">
                <it.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">{it.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{it.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pop-card p-8 mt-10 bg-gradient-sky">
          <h2 className="font-display text-3xl mb-3">A little extra ✨</h2>
          <p className="font-medium">
            Snacks, water bottle, and comfy clothes are always a good idea.
            On Character Day, dress as your favorite character from a book, movie, or show!
          </p>
        </div>
      </section>
    </PageShell>
  );
}
