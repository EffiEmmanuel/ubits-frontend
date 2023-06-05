import HeadingAndSubtitle from "../HeadingAndSubtitle";
import FAQs from "./FAQs";

function FAQSection() {
  return (
    <section className="w-full mt-32 text-center mb-60 px-10 lg:px-0">
      <div className="px-10 lg:px-0 text-white">
        <HeadingAndSubtitle
          heading="FAQs"
          subtitle="Get Answers to Your Burning Questions: Dive into Our Comprehensive FAQs Section for In-depth Insights and Clarifications."
        />
      </div>

      {/* FAQs */}
      <FAQs />
    </section>
  );
}

export default FAQSection;
