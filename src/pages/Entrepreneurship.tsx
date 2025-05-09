
import { Target, ArrowRight, Check, ChevronDown, Rocket, Brain, Code } from "lucide-react";
import { Link } from "react-router-dom";
import SkillPageLayout from "@/components/SkillPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "Business Fundamentals",
    description: "Learn core business concepts and market analysis",
    teaser: "Decode market opportunities and build a business mindset that lasts",
    icon: <Brain className="h-5 w-5" />
  },
  {
    title: "Startup Strategy",
    description: "Develop your business model and go-to-market strategy",
    teaser: "Turn your idea into a scalable business model that investors love",
    icon: <Rocket className="h-5 w-5" />
  },
  {
    title: "Product Development",
    description: "Build and validate your minimum viable product",
    teaser: "Launch your MVP fast and get real users, not just theory",
    icon: <Code className="h-5 w-5" />
  }
];

const deliverables = [
  "Professional Pitch Deck",
  "Working MVP/Prototype",
  "Go-to-Market Strategy",
  "Financial Model",
  "Customer Personas",
  "Competitor Analysis"
];

const idealStudent = [
  "You have a business idea but don't know where to start",
  "You want to learn by building, not just theory",
  "You're ready to commit 10-15 hours/week",
  "You dream of starting up but fear failing",
  "You want to meet other teen founders"
];

const Entrepreneurship = () => {
  return (
    <SkillPageLayout
      title="Founder Lab"
      icon={<Target className="h-10 w-10 text-white" />}
      iconBgColor="bg-maximally-blue"
      tagline="Build something real."
      skillName="Founders"
      communityType="discord"
      communityLink="https://discord.gg/maximally-founders"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-press-start text-4xl md:text-5xl gradient-text-blue-red">
            Turn Your Idea Into a Real Startup
          </h1>
          <p className="font-jetbrains text-xl text-maximally-black/80 max-w-2xl mx-auto">
            India's first intensive bootcamp where teens don't just learn about startups—they <span className="text-[#4D89FF] font-bold">build</span> one.
          </p>
          <Link to="/bootcamps">
            <Button className="bg-[#FF5F5F] hover:bg-[#FF5F5F]/90 text-white px-8 py-6 text-lg font-jetbrains group shadow-lg transform hover:scale-105 transition-all">
              Join Next Cohort
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Modules Section */}
        <div className="grid gap-6 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-[#4D89FF]/10 hover:border-[#4D89FF]">
              <div className="flex items-start gap-4">
                <div className="bg-[#4D89FF]/10 p-3 rounded-lg">
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-press-start text-lg mb-2 text-[#FF5F5F]">{module.title}</h3>
                  <p className="font-jetbrains text-maximally-black/60 mb-2">{module.description}</p>
                  <p className="font-jetbrains text-[#4D89FF]">{module.teaser}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* What You'll Build Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-center text-[#FF5F5F]">What You'll Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-2 border-[#4D89FF]/10 text-center font-jetbrains hover:border-[#4D89FF] hover:shadow-lg transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-center text-[#FF5F5F]">Who This Is For</h2>
          <div className="space-y-3">
            {idealStudent.map((item, index) => (
              <div key={index} className="flex items-center gap-3 font-jetbrains bg-white p-4 rounded-lg border-2 border-[#4D89FF]/10 hover:border-[#4D89FF] hover:shadow-lg transition-all">
                <Check className="h-5 w-5 text-[#4D89FF] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-press-start text-2xl mb-6 text-center text-[#FF5F5F]">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border-2 border-[#4D89FF]/10 rounded-lg">
              <AccordionTrigger className="font-jetbrains px-4">Do I need coding skills?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                No! We teach you to use no-code tools to build your MVP fast. Focus on your business, not technical complexity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 border-[#4D89FF]/10 rounded-lg">
              <AccordionTrigger className="font-jetbrains px-4">What if I don't have an idea yet?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We help you find and validate startup ideas in Week 1. Many successful founders started our program without an idea!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-2 border-[#4D89FF]/10 rounded-lg">
              <AccordionTrigger className="font-jetbrains px-4">How much time do I need?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Plan for 10-15 hours per week including live sessions, building time, and community interactions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/bootcamps" className="inline-flex items-center px-8 py-4 bg-[#4D89FF] text-white font-press-start rounded-lg hover:bg-[#4D89FF]/90 transition-all shadow-lg transform hover:scale-105 group">
            View Full Curriculum
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </SkillPageLayout>
  );
};

export default Entrepreneurship;
