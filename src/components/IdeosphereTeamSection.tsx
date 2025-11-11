"use client";

import React from "react";
import { TeamSection } from "@/components/ui/team-section";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function IdeosphereTeamSection() {
  const teamMembers = [
    {
      name: "Rei Jarram",
      designation: "Co-founder & Head Of Technology",
      imageSrc: "/team-headshot-rei.jpg",
      socialLinks: [
        { icon: Twitter, href: "https://x.com/0xmetalogica" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/rjarram/" },
      ],
    },
    {
      name: "Mariana Oka",
      designation: "Co-founder & Head Of Product",
      imageSrc: "/team-headshot-mariana.jpg",
      socialLinks: [
        { icon: Twitter, href: "https://x.com/Mariana0ka" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/mariana-oka/" },
      ],
    },
  ];

  const mainSocialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <TeamSection
      title="Our Team"
      description="We're a diverse team of scientists, engineers, and market designers united by the mission to revolutionize how breakthrough research gets funded. Our expertise spans prediction markets, blockchain technology, and scientific validation."
      members={teamMembers}
      socialLinksMain={mainSocialLinks}
    />
  );
}

export { IdeosphereTeamSection };
