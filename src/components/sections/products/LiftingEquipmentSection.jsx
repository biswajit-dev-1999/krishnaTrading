import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";
import { liftingEquipment } from "../../../data/products/liftingEquipment";

const LiftingEquipmentSection = () => {
  return (
    <section className="py-16 bg-white" id="lifting">
      <Container>
        <SectionTitle
          title="Lifting Tackles"
          subtitle="Chains, slings, pulleys, and lifting tackles for heavy operations"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {liftingEquipment.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LiftingEquipmentSection;
