"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function HowItWorksCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        How It Works
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const StepContent = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={imgSrc}
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Step 1",
    title: "Describe Your Vision",
    src: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <StepContent
        title="Describe Your Vision"
        description="Simply tell our AI what kind of form you need. From contact forms to complex surveys, describe your requirements in natural language."
        imgSrc="https://images.unsplash.com/photo-1581093588401-22c4f1f0a3d6?q=80&w=1000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Step 2",
    title: "Customize & Perfect",
    src: "/form.png",
    content: (
      <StepContent
        title="Customize & Perfect"
        description="Fine-tune your form with our intuitive editor. Adjust fields, styling, logic, and validation rules to match your exact needs."
        imgSrc="/form.png"
      />
    ),
  },
  {
    category: "Step 3",
    title: "Share & Analyze",
    src: "/share.png",
    content: (
      <StepContent
        title="Share & Analyze"
        description="Deploy your form instantly and start collecting responses. Get real-time analytics, insights, and detailed reports automatically."
        imgSrc="/share.png"
      />
    ),
  },
];
