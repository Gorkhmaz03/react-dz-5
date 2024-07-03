import React from "react";
import {
  PricingContainer,
  PricingHeaderSection,
  PricingTitle,
  PricingSubtitle,
  PricingSubtitle2,
  PricingCardsContainer,
  PricingCard,
  PricingHeader,
  PricingPrice,
  PricingFeatures,
  PricingButton,
  PricingDescription,
  PricingDescription2,
  Features1,
  Features2,
  Features3,
  PricingDate,
} from "./styles";

const Pricing = () => (
  <PricingContainer>
    <PricingHeaderSection>
      <PricingTitle>Practice Advice</PricingTitle>
      <PricingSubtitle>Pricing</PricingSubtitle>
      <PricingSubtitle2>
        Problems trying to resolve the conflict
      </PricingSubtitle2>
      <PricingSubtitle2>
        between the two major realms of Classical physics: Newtonian mechanics
      </PricingSubtitle2>
    </PricingHeaderSection>
    <PricingCardsContainer>
      <PricingCard>
        <PricingHeader>FREE</PricingHeader>
        <PricingDescription>Organize across all</PricingDescription>
        <PricingDescription>apps by hand</PricingDescription>
        <PricingPrice>$19</PricingPrice>
        <PricingDate>Per Month</PricingDate>
        <PricingDescription>Slate helps you see how</PricingDescription>
        <PricingDescription2>many more days you need...</PricingDescription2>
        <PricingButton>Try for free</PricingButton>
        <PricingFeatures>
          <Features1>1GB Cloud storage</Features1>
          <Features2>Email and community support</Features2>
          <Features3>Unlimited product updates</Features3>
        </PricingFeatures>
      </PricingCard>
      <PricingCard>
        <PricingHeader>FREE</PricingHeader>
        <PricingDescription>Organize across all</PricingDescription>
        <PricingDescription>apps by hand</PricingDescription>
        <PricingPrice>$19 </PricingPrice>
        <PricingDate>Per Month</PricingDate>
        <PricingDescription>Slate helps you see how</PricingDescription>
        <PricingDescription2>many more days you need...</PricingDescription2>
        <PricingButton>Try for free</PricingButton>
        <PricingFeatures>
          <Features1>Unlimited product updates</Features1>
          <Features2>Unlimited product updates</Features2>
          <Features3>Unlimited product updates</Features3>
        </PricingFeatures>
      </PricingCard>
      <PricingCard>
        <PricingHeader>FREE</PricingHeader>
        <PricingDescription>
          Organize across all apps by hand
        </PricingDescription>
        <PricingDescription>apps by hand</PricingDescription>
        <PricingPrice>$19 </PricingPrice>
        <PricingDate>Per Month</PricingDate>
        <PricingDescription>Slate helps you see how</PricingDescription>
        <PricingDescription2>many more days you need...</PricingDescription2>
        <PricingButton>Try for free</PricingButton>
        <PricingFeatures>
          <Features1>Unlimited product updates</Features1>
          <Features2>Unlimited product updates</Features2>
          <Features3>Unlimited product updates</Features3>
        </PricingFeatures>
      </PricingCard>
    </PricingCardsContainer>
  </PricingContainer>
);

export default Pricing;
