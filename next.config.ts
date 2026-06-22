import type { NextConfig } from "next";
import { existsSync, readFileSync } from "fs";
import path from "path";

// 1. Validasi Variabel Lingkungan
const requiredEnv = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "NEXT_PUBLIC_BASE_URL"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Build failed: missing required environment variable "${key}"`);
  }
}

// 2. Validasi File Resume PDF
if (!existsSync(path.join(process.cwd(), "public", "resume.pdf"))) {
  throw new Error('Build failed: "public/resume.pdf" is missing');
}

// 3. Validasi Jumlah Kata di about.mdx
const aboutPath = path.join(process.cwd(), "content", "about.mdx");
if (existsSync(aboutPath)) {
  const aboutContent = readFileSync(aboutPath, "utf-8");
  // Menghapus bagian frontmatter (teks di antara '---')
  const body = aboutContent.replace(/---[\s\S]*?---/, "");
  // Menghitung jumlah kata berdasarkan spasi
  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  
  if (wordCount < 150 || wordCount > 300) {
    throw new Error(`Build failed: about.mdx has ${wordCount} words (minimum 150, maximum 300)`);
  }
}

const nextConfig: NextConfig = {
  /* konfigurasi next.js lainnya dapat ditambahkan di sini */
};

export default nextConfig;