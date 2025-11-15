import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import  Card from "../../ui/Card";
import { industrialMaterial } from "../../../data/products/industrialMaterial";

const IndustrialMaterialSection = () => {
  return (
    <section className="py-16 bg-white" id="industrial-material">
      <Container>
        <SectionTitle
          title="Industrial & Project Materials"
          subtitle="Pipes, sheets, fittings, and other general project supplies"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {industrialMaterial.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustrialMaterialSection;
