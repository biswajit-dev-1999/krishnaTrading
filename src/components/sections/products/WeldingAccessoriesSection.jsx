import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card  from "../../ui/Card";
import { weldingAccessories } from "../../../data/products/weldingAccessories";

const WeldingAccessoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="welding">
      <Container>
        <SectionTitle
          title="Welding Accessories"
          subtitle="Reliable and durable welding consumables and equipment"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {weldingAccessories.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WeldingAccessoriesSection;
