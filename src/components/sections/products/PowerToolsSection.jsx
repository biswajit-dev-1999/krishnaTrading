import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import  Card  from "../../ui/Card";
import { powerTools } from "../../../data/products/powerTools";

const PowerToolsSection = () => {
  return (
    <section className="py-16 bg-white" id="power-tools">
      <Container>
        <SectionTitle
          title="Power Tools"
          subtitle="High-performance electric and cordless tools for every project"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {powerTools.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PowerToolsSection;
