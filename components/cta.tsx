"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, message });
    // Reset form fields
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Card className="glassmorphism container mx-auto px-4 py-16 card-gradient border-border/50 relative overflow-hidden">
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Smarter <span className="text-blue-400">Maritime Deals</span>. Less Work, More Results.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Vessel Match transforms the way you manage shipping data,
            automate workflows, and uncover new opportunities.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white glow"
            >
              Meet Your AI Agent
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              Get AI-Powered Insights
            </Button>
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Inquiry</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your Email"
                className="glassmorphism"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="glassmorphism rounded-md p-2 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-blue-500/5 blur-[100px] rounded-full" />
      </Card>
    </section>
  );
}
