import type { ProjectSummary } from "@/lib/types";

export const PROJECTS: ProjectSummary[] = [
  {
    slug: "post-stroke-smart-hand",
    title: "Post-Stroke Smart Hand Gloves",
    problemStatement: "Membantu rehabilitasi pasien pascastroke dengan pemantauan jarak jauh.",
    primaryHardware: "ESP32-S3",
    resultHighlight: "Meraih Silver Medal di IIIEX 2025.",
    badgeLabel: "Silver Medal IIIEX 2025",
  },
  {
    slug: "ac-servo-trainer-kit",
    title: "AC Servo Trainer Kit Reconditioning",
    problemStatement: "Memperbarui kit pelatih servo AC industri untuk aplikasi laboratorium.",
    primaryHardware: "Mitsubishi MR-J2S-10A",
    resultHighlight: "Alat laboratorium berfungsi penuh.",
  },
  {
    slug: "water-level-pid-control",
    title: "Water Level Control System Using PID",
    problemStatement: "Mengendalikan ketinggian air secara otomatis dengan presisi tinggi.",
    primaryHardware: "Arduino Uno",
    resultHighlight: "Kestabilan kontrol presisi tercapai.",
  },
  {
    slug: "poultry-farm-monitoring",
    title: "Automated Poultry Farm Monitoring System",
    problemStatement: "Mengatur suhu dan kelembapan peternakan unggas secara otomatis.",
    primaryHardware: "ESP32",
    resultHighlight: "Regulasi suhu otomatis.",
  },
  {
    slug: "rfid-smart-gate",
    title: "RFID Smart Gate System",
    problemStatement: "Membangun gerbang otomatis responsif menggunakan pemindai fisik.",
    primaryHardware: "Modul RFID dan Servo",
    resultHighlight: "Gerbang merespons kartu instan.",
  }
];