import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-gradient-sky mt-20">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-10 h-10 rounded-full bg-foreground border-2 border-foreground flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-background" />
            </span>
            <span className="font-display text-xl">Limitless Knowledge</span>
          </div>
          <p className="text-sm max-w-xs">
            A summer camp where curiosity meets creativity. Run by students, for students.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Explore</h4>
          <ul className="space-y-1 text-sm font-medium">
            <li><Link to="/about" className="hover:underline">About the Camp</Link></li>
            <li><Link to="/curriculum" className="hover:underline">Curriculum</Link></li>
            <li><Link to="/schedule" className="hover:underline">Schedule</Link></li>
            <li><Link to="/counselors" className="hover:underline">Meet the Counselors</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base mb-3">Get Involved</h4>
          <ul className="space-y-1 text-sm font-medium">
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
            <li><Link to="/supplies" className="hover:underline">Supply List</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-foreground py-4 text-center text-xs font-semibold flex items-center justify-center gap-1">
        Made with <Heart className="w-3 h-3 fill-primary text-primary" /> by the Limitless Knowledge team
      </div>
    </footer>
  );
}
