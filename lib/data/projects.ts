import type { ProjectSummary } from "@/lib/types";

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "post-stroke-smart-hand",
    title: "Post-Stroke Smart Hand Gloves",
    problemStatement: "Stroke patients lacked connected rehabilitation tools to track therapy progress in real time.",
    primaryHardware: "ESP32-S3",
    resultHighlight: "Won Silver Medal at IIIEX 2025.",
    badgeLabel: "Silver Medal IIIEX 2025",
  },
  {
    slug: "ac-servo-trainer-kit",
    title: "AC Servo Trainer Kit Reconditioning",
    problemStatement: "Engineering laboratories required an updated industrial AC servo trainer kit for practical sessions.",
    primaryHardware: "Mitsubishi MR-J2S-10A",
    resultHighlight: "Restored full functionality for laboratory experiments.",
  },
  {
    slug: "water-level-pid-control",
    title: "Water Level Control System Using PID",
    problemStatement: "Water tanks required precise level control with minimal overshoot and fast settling time.",
    primaryHardware: "Arduino Uno",
    resultHighlight: "Achieved precise stability and control.",
  },
  {
    slug: "transporter-robot",
    title: "Transporter Robot",
    problemStatement: "Operators needed a reliable remote-controlled robot to move payloads between zones accurately.",
    primaryHardware: "ESP32 and PS3 Controller",
    resultHighlight: "Successfully transported payloads using a PS3 controller.",
  },
  {
    slug: "rfid-smart-gate",
    title: "RFID Smart Gate System",
    problemStatement: "Facilities lacked an automated access control system to manage entry securely.",
    primaryHardware: "RFID Module and Servo",
    resultHighlight: "Deployed a responsive card-based gate system.",
  },
  {
    slug: "airones-tx",
    title: "KRTMI Robot 2024",
    problemStatement: "The robotics competition required an autonomous robot capable of precise navigation and real-time object classification.",
    primaryHardware: "Raspberry Pi 4 and Arduino Due",
    resultHighlight: "Successfully detected objects via classification.",
  }
];