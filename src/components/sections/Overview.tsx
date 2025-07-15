import { Overview } from "@/types/page";

interface OverviewProps {
  data: Overview;
}

export default function OverviewSection({ data }: OverviewProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome!</h2>
          <p className="mt-4 text-lg text-gray-600">This is the start of the next section.</p>
        </div>
      </div>
    </section>
  );
}
