import { describe, expect, it } from "vitest";

import * as data from "@/lib/portfolio-data";

const allContent = JSON.stringify(data);

describe("Portfolio content rules", () => {
  it("never shows CGPA or SGPA", () => {
    expect(allContent).not.toMatch(/cgpa/i);
    expect(allContent).not.toMatch(/sgpa/i);
    expect(allContent).not.toMatch(/\bgpa\b/i);
  });

  it("never shows the old semester GPA figures", () => {
    expect(allContent).not.toMatch(/2\.80/);
    expect(allContent).not.toMatch(/3\.84/);
  });

  it("never mentions ServiLink", () => {
    expect(allContent).not.toMatch(/servilink/i);
  });

  it("lists UMT with expected graduation 2027", () => {
    expect(data.education.university).toBe("University of Management and Technology (UMT)");
    expect(data.education.expectedGraduation).toBe("2027");
  });

  it("only links GitHub on the bike rental project, with the real repo URL", () => {
    const withGithub = data.projects.filter((p) => p.github);
    expect(withGithub.map((p) => p.github)).toEqual([
      "https://github.com/Fasiha-Noor/bike-rental-demand-prediction",
    ]);
  });

  it("links a real CV file instead of a dead placeholder", () => {
    expect(data.links.resume).toMatch(/^\/__l5e\/assets-v1\/.+\.pdf$/);
  });

  it("shows real workflow screenshots on the two AI projects", () => {
    const cv = data.projects.find((p) => p.id === "ai-cv-builder");
    const rag = data.projects.find((p) => p.id === "rag-chatbot");
    expect(cv?.screenshot).toMatch(/^\/__l5e\/assets-v1\/.+\.png$/);
    expect(rag?.screenshot).toMatch(/^\/__l5e\/assets-v1\/.+\.png$/);
    expect(data.projects.some((p) => p.screenshotPending)).toBe(false);
  });
});
