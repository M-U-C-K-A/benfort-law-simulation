"use client"
import { InputForm } from "@/components/InputForm";
import { Data } from "@/components/Data";
import { Graph } from "@/components/Graph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="tracking-tighter text-5xl">Benfort Law</h1>
      <div className="flex flex-1 items-start lg:gap-10 mt-8">
        <aside>
          <InputForm />
        </aside>
        <section>
          <Data />
        </section>
        <section>
          <Graph />
        </section>
      </div>
    </main>
  );
}
