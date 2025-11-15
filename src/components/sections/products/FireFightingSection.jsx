import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import  Card  from "../../ui/Card";
import { fireFighting } from "../../../data/products/fireFighting";

const FireFightingSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="fire-fighting">
      <Container>
        <SectionTitle
          title="Fire Fighting Equipment"
          subtitle="Complete range of firefighting and safety systems"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {fireFighting.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FireFightingSection;
