import React from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Banner */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url("/30.jpeg")` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-blue-700/40"></div>
        <Container className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Krishna Trading Company
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Dealer & Stockist of Safety Goods, welding accessories, lifting
            equipment, firefighting, power & hand tools, electrical, hardware
            and general project materials.
          </p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Our Story"
            subtitle="Humble Beginnings, Strong Foundations"
            theme="light"
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/3.png"
              alt="Knitted industrial service"
              className="rounded-2xl shadow-lg object-cover w-full "
            />
            <div className="space-y-6 text-gray-700">
              <p>
                Krishna Trading Company was founded with a vision to redefine
                reliability in industrial supply. What began as a small,
                customer-driven enterprise soon evolved into one of the most
                respected names in the industrial and Safety Goods sector.
                Our roots are built on integrity, hard work, and an unwavering
                focus on customer satisfaction.
              </p>
              <p>
                In the early years, we focused on understanding the practical
                challenges faced by industrial buyers and workers. Rather than
                simply selling materials, we committed ourselves to becoming a
                partner in productivity — delivering not just tools and
                equipment, but solutions that improve safety, efficiency, and
                operational continuity.
              </p>
              <p>
                Over the decades, Krishna Trading Company has expanded its
                footprint across Odisha and Eastern India, serving
                infrastructure, construction, manufacturing, and public-sector
                clients. From safety helmets to advanced electrical tools, every
                product we supply reflects our commitment to quality and our
                dedication to building long-term relationships grounded in
                trust, value, and professionalism.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            title="Vision & Mission"
            subtitle="What Drives Us Forward"
            theme="light"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700">
                Our vision is to become the most trusted and innovative partner
                in the field of industrial supplies and safety solutions. We aim
                to empower industries with world-class materials and
                technologies that enhance performance, promote worker safety,
                and contribute to sustainable growth. By continuously adapting
                to emerging industrial trends and investing in knowledge, we
                strive to set new benchmarks in reliability, transparency, and
                service excellence. Krishna Trading Company envisions a future
                where every workplace across India is safer, more productive,
                and better equipped — because of the solutions we deliver.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700">
                Our mission is to consistently provide superior-quality
                industrial products through ethical business practices,
                efficient logistics, and personalized customer service. We aim
                to bridge the gap between demand and supply with speed,
                precision, and dependability. Every interaction at Krishna
                Trading Company is guided by honesty, commitment, and care —
                ensuring that clients receive not just materials, but confidence
                in every transaction. We are on a continuous journey to empower
                businesses, enable safer workplaces, and nurture partnerships
                that stand the test of time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Our Core Values"
            subtitle="Guiding Principles We Uphold"
            theme="light"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "Integrity",
                desc: "We believe integrity is the foundation of every lasting relationship. We maintain transparency and fairness in every interaction with clients, vendors, and employees — because honesty is not just our policy, it is our identity.",
              },
              {
                title: "Quality",
                desc: "We supply only products that meet or exceed international quality standards. Our strict quality checks, reliable sourcing, and brand partnerships ensure our clients get dependable products every time.",
              },
              {
                title: "Safety First",
                desc: "We are dedicated to ensuring workplace safety. Our solutions are designed to protect workers, minimize risks, and uphold compliance with national and international safety standards.",
              },
              {
                title: "Customer Focus",
                desc: "Our clients are at the heart of everything we do. We listen, understand, and adapt to their needs — ensuring timely delivery, consistent quality, and reliable after-sales support that goes beyond expectation.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  {v.title}
                </h4>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trusted By / Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <Container>
          <SectionTitle
            title="Trusted by Industries"
            subtitle="Delivering value across sectors"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center mt-10">
            {[
              { label: "Years in Business", value: "25+" },
              { label: "Satisfied Clients", value: "500+" },
              { label: "Product Lines", value: "1000+" },
              { label: "Locations Covered", value: "Odisha & Eastern India" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-bold">{item.value}</h3>
                <p className="text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-r from-blue-900 to-blue-700 text-white text-center">
        <Container>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to explore how we can support your industrial
            supplies and safety requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 rounded-full px-6 py-3 text-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </div>
  );
};

export default About;
