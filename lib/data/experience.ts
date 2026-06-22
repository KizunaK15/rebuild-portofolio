import type { TimelineEntry } from "@/lib/types";

/**
 * EXPERIENCE — all timeline entries sorted by dateRange descending.
 * Covers Education, Competition, Project, and Certification types.
 */
export const EXPERIENCE: TimelineEntry[] = [
  // ── Education ────────────────────────────────────────────────────
  {
    type: "Education",
    title: "Politeknik Negeri Semarang",
    subtitle: "D4 Electronics Engineering Technology",
    dateRange: "2021–2025",
    icon: "GraduationCap",
  },

  // ── Competitions ─────────────────────────────────────────────────
  {
    type: "Competition",
    title: "IIIEX 2025",
    subtitle: "Silver Medal · Post Stroke Smart Hand",
    dateRange: "2025",
    description:
      "Awarded Silver Medal at the International Invention, Innovation and Exposition for AI-assisted stroke rehabilitation glove.",
    icon: "Trophy",
  },
  {
    type: "Competition",
    title: "Polines Expo 2024",
    subtitle: "3rd Place · Post Stroke Smart Hand",
    dateRange: "2024",
    description:
      "Secured 3rd Place at the Politeknik Negeri Semarang annual student innovation exhibition.",
    icon: "Trophy",
  },

  // ── Projects ─────────────────────────────────────────────────────
  {
    type: "Project",
    title: "Post Stroke Smart Hand",
    subtitle: "ESP32-S3 · LVGL · Firebase",
    dateRange: "2024",
    description:
      "Built a wearable rehabilitation glove synchronizing therapy data to the cloud and dispatching session summaries via WhatsApp API.",
    icon: "Cpu",
  },
  {
    type: "Project",
    title: "PID Water Level Control",
    subtitle: "Arduino · VL6180X LIDAR",
    dateRange: "2023",
    description:
      "Implemented a PID controller achieving steady-state error below 2.5 mm and overshoot under 2% on a water tank plant.",
    icon: "Activity",
  },
  {
    type: "Project",
    title: "Poultry Climate Controller",
    subtitle: "ESP32 · MQTT · Node-RED",
    dateRange: "2023",
    description:
      "Designed an IoT system maintaining optimal temperature and humidity for poultry farming with remote monitoring.",
    icon: "Thermometer",
  },

  // ── Certifications ───────────────────────────────────────────────
  {
    type: "Certification",
    title: "Google Cloud Platform",
    subtitle: "Google Skills Boost",
    dateRange: "2026",
    icon: "Award",
  },
];
