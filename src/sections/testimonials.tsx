import Card from "@/components/card";
import ScrollingReviews from "@/components/scrollingReviews";

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-6" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="px-6 mt-8">
        <h2 className="text-3xl font-bold">家长见证</h2>
      </div>

      <ScrollingReviews />

      {/* image on the left, title then description on the right */}
      <div className="px-6 flex flex-row items-center md:items-start gap-6">
        <div
          className="flex-shrink-0 overflow-hidden max-w-[30%]"
          style={{
            width: '150px',
            height: '150px',
          }}
        >
          <img
            src="globe.svg"
            alt="Ran Laoshi"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">考试成绩进步案例</h3>
          <p className="text-md">
            Brief introduction about Ran Laoshi, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="px-6 mb-8 flex flex-row items-center md:items-start gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">考试成绩进步案例</h3>
          <p className="text-md">
            Brief introduction about Ran Laoshi, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          className="flex-shrink-0 overflow-hidden max-w-[30%]"
          style={{
            width: '150px',
            height: '150px',
          }}
        >
          <img
            src="globe.svg"
            alt="Ran Laoshi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}