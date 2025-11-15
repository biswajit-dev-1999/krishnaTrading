import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Card  from "../../ui/Card";
import { electrical } from "../../../data/products/electrical";

const ElectricalSection = () => {
  return (
    <section className="py-16 bg-white" id="electrical">
      <Container>
        <SectionTitle
          title="Electrical Supplies"
          subtitle="Cables, plugs, switches, and industrial electrical items"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {electrical.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ElectricalSection;
