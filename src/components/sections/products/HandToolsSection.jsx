import React from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import  Card  from "../../ui/Card";
import { handTools } from "../../../data/products/handTools";

const HandToolsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="hand-tools">
      <Container>
        <SectionTitle
          title="Hand Tools"
          subtitle="Precision-engineered tools for professionals and workshops"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {handTools.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HandToolsSection;
