import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card"; // ✅ fixed line
import { safetyEquipment } from "../../../data/products/safetyEquipment";

const SafetyEquipmentSection = () => {
  return (
    <section className="py-16 bg-white" id="safety">
      <Container>
        <SectionTitle
          title="Safety Goods"
          subtitle="High-quality personal protective equipment (PPE) for industrial use"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {safetyEquipment.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SafetyEquipmentSection;
