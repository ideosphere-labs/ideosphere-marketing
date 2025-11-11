"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Define interfaces for props
interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

// TeamSection Component
export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-slate-950 py-24",
          className
        )}
        {...props}
      >
        <div className="container mx-auto grid items-center justify-center gap-12 px-4 text-center md:px-6 max-w-7xl">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="team-grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-cyan-400"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#team-grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-8">
            <div className="grid gap-6 text-center">
              <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300 mx-auto">
                <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                {title}
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Who We Are
              </h2>
              <p className="max-w-[700px] mx-auto text-lg text-slate-400">
                {description}
              </p>
            </div>

            {registerLink && (
              <a
                href={registerLink}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Join Our Team
              </a>
            )}
          </div>

          {/* Main Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-6 py-4">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto flex flex-wrap justify-center w-full max-w-5xl gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-8 text-center transition-all duration-500 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 w-full sm:w-80"
              >
                {/* Background gradient wave */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-cyan-500/5 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Image with animated border */}
                <div
                  className="relative z-10 h-40 w-40 overflow-hidden rounded-full border-4 border-slate-800/50 bg-slate-800/20 transition-all duration-500 ease-out group-hover:border-cyan-400/50 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="relative z-10 text-sm text-cyan-400 mt-1 uppercase tracking-wider">
                  {member.designation}
                </p>

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-4 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/50 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
