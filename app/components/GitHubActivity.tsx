import { Suspense } from "react";
import Container from "./Container";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import RepoGrid from "./github/RepoGrid";

export default function GitHubActivity() {
  return (
    <section id="github-activity" className="text-white pb-24">
      <Container>
        <Card
          classes={{
            card: "relative grid grid-rows-1 bg-gray-800/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl hover:translate-none",
          }}
        >
          <div className="space-y-8 z-20">
            <SectionHeading className="text-center mb-16">
              My Latest <span className="text-primary">GitHub</span> Activity
            </SectionHeading>

            <Suspense
              fallback={
                <p className="text-lg text-gray-200 text-center">
                  Crafting the perfect grid of code...
                </p>
              }
            >
              <RepoGrid />
            </Suspense>
          </div>
        </Card>
      </Container>
    </section>
  );
}
