import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import  Card from "../../ui/Card";
import { hardware } from "../../../data/products/hardware";

const HardwareSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="hardware">
      <Container>
        <SectionTitle
          title="Hardware Items"
          subtitle="Bolts, nuts, fasteners, hinges, and other essential fittings"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {hardware.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HardwareSection;
