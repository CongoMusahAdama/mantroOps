import { FadeIn } from "@/components/motion/FadeIn";

export function Closing() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-papaya">
              On the way
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-foggy sm:text-4xl">
              MantroOps is coming
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-foggy">
              Built for Ghanaian engineering firms. Simple. Field-ready. We will
              be here when it is time.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
