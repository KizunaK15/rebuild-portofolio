import type { ProjectSummary } from "@/lib/types";

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "post-stroke-smart-hand",
    title: "Post Stroke Smart Hand",
    problemStatement:
      "Stroke patients lacked affordable, connected rehabilitation tools that track therapy progress and report to their therapists in real time.",
    primaryHardware: "ESP32-S3",
    resultHighlight: "Won Silver Medal at IIIEX 2025 international invention exhibition.",
    badgeLabel: "Silver Medal \u00b7 IIIEX 2025",
    imageUrl: "/images/post-stroke.jpg",
  },
  {
    slug: "water-level-pid-control",
    title: "Water Level PID Control",
    problemStatement:
      "Industrial water tanks required precise level control with minimal overshoot and fast settling time using low-cost hardware.",
    primaryHardware: "Arduino Uno",
    resultHighlight: "Achieved steady-state error under 2.5 mm and overshoot below 2%.",
  },
  {
    slug: "poultry-climate-controller",
    title: "Poultry Climate Controller",
    problemStatement:
      "Small poultry farms needed automated climate monitoring to reduce manual checks and improve livestock survival rates.",
    primaryHardware: "ESP32",
    resultHighlight: "Enabled remote temperature and humidity control via MQTT dashboard.",
  },
  {
    slug: "rfid-smart-gate",
    title: "RFID Smart Gate System",
    problemStatement:
      "Campus buildings lacked an automated access control system that logs entry events and restricts unauthorized personnel.",
    primaryHardware: "STM32",
    resultHighlight: "Deployed a card-based gate system with real-time entry logging.",
  },
  {
    slug: "mushroom-iot-monitor",
    title: "Mushroom IoT Monitor",
    problemStatement:
      "Mushroom cultivators needed precise humidity and CO\u2082 monitoring to maximize yield without continuous manual supervision.",
    primaryHardware: "ESP32",
    resultHighlight: "Increased yield consistency by automating environmental feedback control.",
  },
  {
    slug: "stair-climbing-robot",
    title: "Stair Climbing Robot",
    problemStatement:
      "Delivery and inspection robots required a reliable mechanical system to navigate staircase transitions autonomously.",
    primaryHardware: "Arduino Mega",
    resultHighlight: "Successfully navigated a 15 cm step height at controlled velocity.",
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
