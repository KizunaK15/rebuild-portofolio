import type { TimelineEntry } from "@/lib/types";

/**
 * EXPERIENCE — sorted by dateRange descending.
 * Only uses the four valid TimelineEntryType values:
 * Education | Competition | Project | Certification
 */
export const EXPERIENCE: TimelineEntry[] = [
  {
    type: "Education",
    title: "Politeknik Negeri Semarang",
    subtitle: "D4 Electronics Engineering Technology",
    dateRange: "2023–Present",
    icon: "GraduationCap",
  },
  {
    type: "Competition",
    title: "IIIEX 2025",
    subtitle: "Silver Medal · Post Stroke Smart Hand",
    dateRange: "2025",
    description:
      "Awarded Silver Medal at the International Invention, Innovation and Exposition for an IoT-assisted stroke rehabilitation glove.",
    icon: "Trophy",
  },
  {
    type: "Competition",
    title: "Polines Elektro Expo 2024",
    subtitle: "3rd Place · Post Stroke Smart Hand",
    dateRange: "2024",
    description: "Secured 3rd Place in the IoT category at the annual student innovation exhibition.",
    icon: "Trophy",
  },
  {
    type: "Project",
    title: "Post Stroke Smart Hand",
    subtitle: "ESP32-S3 · LVGL · Firebase",
    dateRange: "2024–2025",
    description:
      "Built a wearable rehabilitation glove that syncs therapy data to the cloud and sends session summaries via WhatsApp API.",
    icon: "Cpu",
  },
  {
    type: "Project",
    title: "POLIREVO — KRTMI Division",
    subtitle: "Head of Division & Programmer",
    dateRange: "2024–Present",
    description:
      "Led the KRTMI robotics division and programmed autonomous systems for national competitions.",
    icon: "Activity",
  },
  {
    type: "Project",
    title: "Transporter Robot",
    subtitle: "ESP32 · PS3 Controller",
    dateRange: "2024",
    description:
      "Developed a holonomic transporter robot controlled via Bluetooth for payload delivery.",
    icon: "Activity",
  },
  {
    type: "Certification",
    title: "Google Cloud Skills Boost",
    subtitle: "AI Study Jam Season 12",
    dateRange: "2025",
    description:
      "Completed hands-on labs on cloud computing, API integration, and generative AI tools.",
    icon: "Award",
  },
];
