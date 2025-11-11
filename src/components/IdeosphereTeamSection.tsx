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
    { icon: Twitter, href: "https://x.com/_ideosphere" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/theideosphere/posts/?feedView=all",
    },
    // { icon: Github, href: "#" },
  ];

  return (
    <TeamSection
      title="Team"
      description="We're a small and fiery team working at the intersection of prediction markets, forecasting and crowdfunding to dream up new ways of funding science and innovation"
      members={teamMembers}
      socialLinksMain={mainSocialLinks}
    />
  );
}

export { IdeosphereTeamSection };
