import { EnvVars } from "./types";

export function getEnv(key: keyof EnvVars): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export function validateEnvAtStartup(): void {
  getEnv("RESEND_API_KEY");
  getEnv("CONTACT_TO_EMAIL");
  getEnv("NEXT_PUBLIC_BASE_URL");
}