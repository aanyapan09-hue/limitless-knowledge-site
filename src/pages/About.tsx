import PageShell from "@/components/PageShell";
import { Target, Heart, Lightbulb, Award } from "lucide-react";

export default function About() {
  return (
    <PageShell>
      <section className="container py-16 md:py-24">
        <span className="chip bg-secondary mb-4">About the camp</span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[0.95]">
          A summer camp built by students, for students.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          Limitless Knowledge is a 9-day summer camp for grades 4–6. We blend academics with
          adventure — turning grammar lessons into character days, fractions into pizza parties,
          and science into Spy Kids investigations.
        </p>
      </section>

      <section className="container pb-20 grid md:grid-cols-2 gap-6">
        <div className="pop-card p-8 bg-accent">
          <Target className="w-8 h-8 mb-4" />
          <h2 className="font-display text-3xl mb-3">Our mission</h2>
          <p className="font-medium leading-relaxed">
            We spark intellectual and innovative curiosity in kids through our summer camp.
            By empowering education in fun and vibrant ways, we help kids get ahead and use
            their knowledge to discover their limitless potential.
          </p>
        </div>
        <div className="pop-card p-8 bg-secondary">
          <Heart className="w-8 h-8 mb-4" />
          <h2 className="font-display text-3xl mb-3">Why we exist</h2>
          <p className="font-medium leading-relaxed">
            Summer learning shouldn't feel like more school. We give kids hands-on, creative
            experiences that make academics feel exciting and relevant to their actual lives.
          </p>
        </div>
      </section>

      <section className="bg-gradient-hero border-y-2 border-foreground py-20">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Lightbulb, title: "Curiosity over compliance", desc: "Kids learn best when they ask 'why?' — we build lessons that invite questions, not silence them." },
              { icon: Heart, title: "Relatable role models", desc: "Being taught by older students, not adults, makes learning feel cooler and more achievable." },
              { icon: Award, title: "Confidence through doing", desc: "Every kid leaves with finished projects, new skills, and stories they can't wait to tell." },
            ].map((v) => (
              <div key={v.title} className="pop-card-sm p-6 bg-card">
                <v.icon className="w-7 h-7 mb-3 text-primary" />
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="chip bg-sun mb-4">Our goals</span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Bigger than a camp.</h2>
            <p className="text-lg leading-relaxed">
              We're building teamwork, planning, and management skills while making a real
              impact in our community. We want every camper to leave with sharper academic
              confidence — and a story they'll keep telling.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Build teamwork, leadership, and communication for staff and campers",
              "Strengthen academic confidence in our local youth",
              "Partner with local businesses through outreach",
              "Deepen our own knowledge through teaching",
            ].map((g) => (
              <li key={g} className="pop-card-sm p-4 bg-card flex gap-3">
                <span className="font-display text-primary">★</span>
                <span className="font-medium">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
