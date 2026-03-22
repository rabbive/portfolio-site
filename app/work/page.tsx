import type { Metadata } from "next";
import { experiences } from "@/lib/site-data";
import { ExperienceCard } from "@/components/experience-card";

export const metadata: Metadata = {
  title: "Work Experience - Ashwanth Kumaravel",
  description: "My work experiences across different companies and roles.",
};

export default function WorkPage() {
  return (
    <div className="space-y-9 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          My work experiences across different companies and roles.
        </p>
      </div>
      <div className="space-y-7">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} showDetails />
        ))}
      </div>
    </div>
  );
}
