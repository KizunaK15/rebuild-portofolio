import type { ProjectSummary } from "@/lib/types";

export const PROJECTS: ProjectSummary[] = [
  // ── Award-winning ──────────────────────────────────────────────
  {
    slug: "post-stroke-smart-hand",
    title: "Post Stroke Smart Hand",
    problemStatement:
      "Stroke patients lacked affordable, connected rehabilitation tools that track therapy progress and report to their therapists in real time.",
    primaryHardware: "ESP32-S3",
    resultHighlight: "Won Silver Medal at IIIEX 2025 international invention exhibition.",
    badgeLabel: "Silver Medal \u00b7 IIIEX 2025",
    imageUrl: "/images/smart-hand.jpeg",
  },

  // ── Control Systems ────────────────────────────────────────────
  {
    slug: "water-level-pid-control",
    title: "Water Level PID Control",
    problemStatement:
      "Water tanks required precise level control with minimal overshoot and fast settling time using low-cost embedded hardware.",
    primaryHardware: "Arduino Uno",
    resultHighlight: "Achieved steady-state error under 2.5 mm and overshoot below 2%.",
    imageUrl: "/images/water-level.jpeg",
  },
  {
    slug: "ac-servo-mrj2s",
    title: "AC Servo Position Control (MR-J2S)",
    problemStatement:
      "Industrial servo drives required a precise position control interface to enable repeatable motion for automated manufacturing fixtures.",
    primaryHardware: "Mitsubishi MR-J2S",
    resultHighlight: "Implemented closed-loop position control with sub-millimeter repeatability.",
    imageUrl: "/images/ac-servo-mrj2s.jpeg",
  },

  // ── Robotics ───────────────────────────────────────────────────
  {
    slug: "krtmi-2024",
    title: "KRTMI 2024 \u2014 Thematic Robot",
    problemStatement:
      "The Indonesian Robot Contest (KRTMI) required a fully autonomous thematic robot capable of completing structured tasks in a competition arena.",
    primaryHardware: "ESP32 / Arduino",
    resultHighlight: "Competed at KRTMI 2024 as part of POLIREVO robotics team.",
    imageUrl: "/images/krtmi.jpeg",
  },
  {
    slug: "transporter-robot",
    title: "Omni-Wheel Transporter Robot",
    problemStatement:
      "Campus logistics required a holonomic mobile platform capable of omnidirectional movement for payload transport in confined spaces.",
    primaryHardware: "ESP32",
    resultHighlight: "Achieved smooth omnidirectional navigation with zero turning radius.",
    imageUrl: "/images/transporter-robot.jpeg",
  },
  {
    slug: "line-follower-transporter-robot",
    title: "Line Follower Transporter Robot",
    problemStatement:
      "Autonomous material transport required a low-cost robot that follows a fixed path and delivers payloads without operator intervention.",
    primaryHardware: "ESP32",
    resultHighlight: "Completed autonomous payload delivery across a 5-meter track without line deviation.",
    imageUrl: "/images/line-follower-transporter-robot.jpeg",
  },
];
