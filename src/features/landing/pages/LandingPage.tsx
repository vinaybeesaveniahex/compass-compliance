import { Footer } from "react-day-picker";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import {
  ManageSection,
  AdvisorySection,
  WorkflowSection,
  StakeholdersSection,
  WebinarsSection,
  AnswerBaseSection,
  PartnershipBanner,
  FinalCta,
} from "../components/Sections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ManageSection />
        <AdvisorySection />
        <WorkflowSection />
        <StakeholdersSection />
        <WebinarsSection />
        <AnswerBaseSection />

        <PartnershipBanner />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
