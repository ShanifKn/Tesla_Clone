import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          description="Order online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Order online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model 3"
          description="Order online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model X"
          description="Order online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="learn more"
        />
        <Section
          title="Soloar for New Roofs"
          description="Solar Roof Coast less than new "
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Accessories"
          description="Order online for Touchless Delivery"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now "
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
