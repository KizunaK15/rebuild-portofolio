export interface BlogFrontmatter {
    title: string
    slug: string
    datePublished: string
    dateModified: string
    category:"Embedded Systems" | "IoT" | "AI Integration" | "Control System"
    description: string
    tags: string[]
    published: boolean
    readingTimeMinutes?: number 
}

export interface ProjectFrontmatter {
    title: string
    slug: string
    problemStatement: string
    approach: string
    architectureSummary: string
    hardwareUsed: string[]
    softwareStack: string[]
    measurableResult: string[]
    lessonsLearned: string[]
    primaryHardware: string
    resultHighlight: string
    badgeLabel?: string
    imageUrl: string
    dateCreated: string
}

export interface BlogPostSummary {
    title: string
    slug: string
    datePublished: string
    category: string
    description: string
    readingTimeMinutes: number 
}

export interface ProjectSummary{
    title: string
    slug: string 
    problemStatement: string 
    primaryHardware: string
    resultHighlight: string
    badgeLabel?: string 
    imageUrl?: string
}

export interface SkillCategory{
    id: string
    label: string 
    icon: string
    skills: string[]
}

export interface Achievement{
    eventName: string
    achievement: string 
    projectName: string
    year: number
    imageUrl: string
    imageAlt: string
    width: number
    height: number
}

export type TimelineEntryType = "Education"| "Experience" | "Competition" | "Project" | "Certification"

export interface TimelineEntry {
    type: TimelineEntryType
    title: string
    subtitle: string
    dateRange: string
    description?: string
    icon?: string
}

export interface ContactFormInput {
    name: string
    email: string
    message: string
}

export interface ContactFormErrors {
    name?: string
    email?: string
    message?: string
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error"

export interface HeroProfile {
    fullName: string
    headline: string
    summary: string 
    roles: string[]
    photoUrl: string
    photoAlt: string
    resumeUrl: string 
    githubUrl: string 
    linkedinUrl: string
    silverMedalBadge: string
}

export interface EnvVars {
    RESEND_API_KEY: string
    CONTACT_TO_EMAIL: string
    NEXT_PUBLIC_BASE_URL: string 
}