import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Beaker, Palette, Calculator, Sparkles, Users, Calendar, Star } from "lucide-react";
import heroImg from "@/assets/hero-collage.jpg";

const Index = () => {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="container relative py-20 md:py-32 text-center">
          <span className="chip bg-sun mb-6 animate-wiggle">
            ✨ Summer 2026 enrollment open
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-6">
            Curiosity has
            <br />
            <span className="inline-block bg-gradient-lilac text-primary-foreground px-4 py-1 rounded-2xl border-2 border-foreground shadow-pop -rotate-2">
              no limits.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium mb-8">
            Limitless Knowledge is a summer camp for grades 4–6 where kids learn through
            hands-on science, story-writing, math adventures, and a whole lot of art.
            Run by students, made for students.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 hover:-translate-x-1 transition-transform"
            >
              Enroll your camper <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card font-bold border-2 border-foreground shadow-pop-sm hover:-translate-y-0.5 transition-transform"
            >
              See the curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="container -mt-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: "9", l: "Days of camp" },
          { n: "4", l: "Special event days" },
          { n: "5", l: "Student counselors" },
          { n: "4–6", l: "Grade range" },
        ].map((s) => (
          <div key={s.l} className="pop-card-sm p-4 text-center bg-card">
            <div className="font-display text-3xl md:text-4xl text-primary">{s.n}</div>
            <div className="text-xs md:text-sm font-semibold mt-1">{s.l}</div>
          </div>
        ))}
      </section>

      {/* MISSION */}
      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip bg-secondary mb-4">Our mission</span>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-[0.95]">
              We spark intellectual & innovative curiosity in kids.
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              By empowering education in fun and vibrant ways, we help kids get ahead and
              use their knowledge to discover their limitless potential.
            </p>
            <Link to="/about" className="font-bold underline underline-offset-4">
              Read our story →
            </Link>
          </div>
          <div className="relative">
            <div className="pop-card p-8 bg-accent rotate-2">
              <Sparkles className="w-8 h-8 mb-4" />
              <p className="font-display text-2xl leading-tight">
                "Run by students, for students — relatable, intriguing, and unforgettable."
              </p>
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-sun border-2 border-foreground shadow-pop-sm flex items-center justify-center font-display text-2xl -rotate-12">
              !
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECT CARDS */}
      <section className="container pb-20">
        <div className="text-center mb-12">
          <span className="chip bg-lilac mb-4">What we teach</span>
          <h2 className="font-display text-4xl md:text-5xl">Four subjects. Zero boring moments.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BookOpen, title: "English", desc: "Grammar, annotation, creative writing & character day.", bg: "bg-secondary" },
            { icon: Calculator, title: "Math", desc: "Visual learning with pies, shapes, and scavenger hunts.", bg: "bg-accent" },
            { icon: Beaker, title: "Science", desc: "Cell biology, weather systems, and Spy Kids forensics.", bg: "bg-sun" },
            { icon: Palette, title: "Art", desc: "Tie-dye, origami, pony beads & paper plate scenes.", bg: "bg-card" },
          ].map((s) => (
            <Link
              to="/curriculum"
              key={s.title}
              className={`pop-card p-6 ${s.bg} block`}
            >
              <s.icon className="w-8 h-8 mb-4" />
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-sm font-medium">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SPECIAL DAYS */}
      <section className="bg-gradient-hero border-y-2 border-foreground py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="chip bg-card mb-4">Special days</span>
            <h2 className="font-display text-4xl md:text-5xl">4 days you'll never forget</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🎭", title: "Character Day", desc: "Dress as your favorite character — practice public speaking and creative writing." },
              { emoji: "🕵️", title: "Spy Kids Day", desc: "Forensic science, fingerprinting, and observation skills." },
              { emoji: "🧮", title: "Math Adventure", desc: "A scavenger hunt where every clue is a math problem." },
              { emoji: "🍕", title: "Pizza Party", desc: "Last day celebration, banner painting, and shirt signing." },
            ].map((d, i) => (
              <div
                key={d.title}
                className="pop-card p-6 bg-card"
                style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}
              >
                <div className="text-4xl mb-3">{d.emoji}</div>
                <h3 className="font-display text-xl mb-2">{d.title}</h3>
                <p className="text-sm font-medium">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container py-20">
        <div className="pop-card p-10 md:p-16 bg-gradient-lilac text-primary-foreground text-center">
          <Star className="w-10 h-10 mx-auto mb-4 fill-sun text-sun" />
          <h2 className="font-display text-4xl md:text-6xl mb-4">Ready for the best summer yet?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Spots are limited. Reserve your camper's seat before we sell out.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-bold border-2 border-foreground shadow-pop hover:-translate-y-1 transition-transform"
          >
            Sign up now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="container pb-20 grid md:grid-cols-3 gap-5">
        {[
          { to: "/counselors", icon: Users, title: "Meet your counselors", desc: "The five students running the show." },
          { to: "/schedule", icon: Calendar, title: "See the schedule", desc: "9 days of content, day by day." },
          { to: "/supplies", icon: BookOpen, title: "Supply list", desc: "Everything your camper should bring." },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="pop-card-sm p-6 bg-card hover:-translate-y-1 transition-transform">
            <c.icon className="w-6 h-6 mb-3 text-primary" />
            <h3 className="font-display text-xl mb-1">{c.title}</h3>
            <p className="text-sm font-medium text-muted-foreground">{c.desc}</p>
          </Link>
        ))}
      </section>
    </PageShell>
  );
};

export default Index;
