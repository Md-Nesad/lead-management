import CTA from "../features/landingPage/components/CTA";
import DashboardPreview from "../features/landingPage/components/DashboardPreview";
import Features from "../features/landingPage/components/Features";
import Footer from "../features/landingPage/components/Footer";
import Hero from "../features/landingPage/components/Hero";
import Navbar from "../features/landingPage/components/Navbar";
import ProblemSolution from "../features/landingPage/components/ProblemSolution";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <DashboardPreview />
      <CTA />
      <Footer />
    </main>
  );
}
