"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Brain,
  Shield,
  Waves,
  Sparkles,
  ArrowRight,
  HeartPulse,
  Lightbulb,
  Lock,
  MessageSquareHeart,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ------------------- Types -------------------

type Emotion = { value: number; label: string; color: string };
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
};
type Step = { title: string; description: string; icon: LucideIcon };

// ------------------- Data -------------------

const emotions: Emotion[] = [
  { value: 0, label: "😔 Down", color: "from-blue-500/50" },
  { value: 25, label: "😊 Content", color: "from-green-500/50" },
  { value: 50, label: "😌 Peaceful", color: "from-purple-500/50" },
  { value: 75, label: "🤗 Happy", color: "from-yellow-500/50" },
  { value: 100, label: "✨ Excited", color: "from-pink-500/50" },
];

const features: Feature[] = [
  {
    icon: HeartPulse,
    title: "24/7 Support",
    description: "Always here to listen and support you, any time of day",
    color: "from-rose-500/20",
    delay: 0.2,
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Personalized guidance powered by emotional intelligence",
    color: "from-amber-500/20",
    delay: 0.4,
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your conversations are always confidential and encrypted",
    color: "from-emerald-500/20",
    delay: 0.6,
  },
  {
    icon: MessageSquareHeart,
    title: "Evidence-Based",
    description: "Therapeutic techniques backed by clinical research",
    color: "from-blue-500/20",
    delay: 0.8,
  },
];

const welcomeSteps: Step[] = [
  {
    title: "Welcome to Mind Mate AI 👋",
    description:
      "Your AI companion for emotional well-being. I'm here to provide a safe, judgment-free space for you to express yourself.",
    icon: Waves,
  },
  {
    title: "Personalized Support 🌱",
    description:
      "I adapt to your needs and emotional state, offering evidence-based techniques and gentle guidance when you need it most.",
    icon: Brain,
  },
  {
    title: "Your Privacy Matters 🛡️",
    description:
      "Our conversations are completely private and secure. I follow strict ethical guidelines and respect your boundaries.",
    icon: Shield,
  },
];

// ------------------- Anim Variants -------------------

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

// ------------------- Page -------------------

export default function Home() {
  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => setMounted(true), []);

  const currentEmotion =
    emotions.find((em) => Math.abs(emotion - em.value) < 15) || emotions[2];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* ------------------- Hero ------------------- */}
      <section className="relative min-h-[90vh] mt-20 flex flex-col items-center justify-center px-4">
        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-3xl top-0 -left-20 transition-all duration-700 bg-gradient-to-r ${currentEmotion.color} to-transparent opacity-60`}
          />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
        </div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          className="relative space-y-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Waves className="w-4 h-4 animate-wave text-primary" />
            <span className="text-foreground/90">
              Your AI Agent Mental Health Companion
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent hover:to-primary transition-all duration-300">
              Find Peace
            </span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-b from-foreground to-foreground/90 bg-clip-text text-transparent">
              of Mind
            </span>
          </h1>

          <p className="max-w-[600px] mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Experience a new way of emotional support. Our AI companion is here
            to listen, understand, and guide you through life's journey.
          </p>

          {/* Emotion slider */}
          <motion.div
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="w-full max-w-[600px] mx-auto space-y-6 py-8"
          >
            <div className="flex justify-between items-center px-2">
              {emotions.map((em) => (
                <button
                  key={em.value}
                  onClick={() => setEmotion(em.value)}
                  className={`transition-all duration-500 text-center ${
                    Math.abs(emotion - em.value) < 15
                      ? "opacity-100 scale-110"
                      : "opacity-50"
                  }`}
                  aria-label={`Set emotion to ${em.label}`}
                >
                  <div className="text-2xl">{em.label.split(" ")[0]}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {em.label.split(" ")[1]}
                  </div>
                </button>
              ))}
            </div>

            <div className="relative px-2">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${currentEmotion.color} to-transparent blur-2xl -z-10`}
              />
              <Slider
                value={[emotion]}
                onValueChange={(value) => setEmotion(value[0])}
                min={0}
                max={100}
                step={1}
                aria-label="Emotion slider"
                className="py-4"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              onClick={() => setShowDialog(true)}
              className="relative group h-12 px-8 rounded-full bg-gradient-to-r from-primary via-primary/90 to-secondary shadow-lg hover:shadow-xl transition-all"
            >
              <span className="flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ------------------- Features ------------------- */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              How Mind Mate AI Helps You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a new kind of emotional support, powered by empathetic
              AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={feature.delay}
              >
                <Card className="group relative border border-primary/10 hover:border-primary/20 transition-all h-[200px] backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- Welcome Dialog ------------------- */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px] backdrop-blur-lg">
          <DialogHeader>
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeUp}
              className="space-y-4"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                {React.createElement(welcomeSteps[currentStep].icon, {
                  className: "w-8 h-8 text-primary",
                })}
              </div>
              <DialogTitle className="text-2xl text-center">
                {welcomeSteps[currentStep].title}
              </DialogTitle>
              <DialogDescription className="text-center text-base leading-relaxed">
                {welcomeSteps[currentStep].description}
              </DialogDescription>
            </motion.div>
          </DialogHeader>
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {welcomeSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentStep ? "bg-primary w-4" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={() =>
                currentStep < welcomeSteps.length - 1
                  ? setCurrentStep((c) => c + 1)
                  : (setShowDialog(false), setCurrentStep(0))
              }
            >
              {currentStep === welcomeSteps.length - 1 ? (
                <>
                  Let's Begin <Sparkles className="w-4 h-4 animate-pulse" />
                </>
              ) : (
                <>
                  Next <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
