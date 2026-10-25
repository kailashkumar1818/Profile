import {
  Award,
  Building2,
  Car,
  Code2,
  Compass,
  Database,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Monitor,
  Network,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Wrench,
} from "lucide-react";

/* Icons are stored as strings in data.js so the content file stays plain data. */
const contentIcons = {
  Award,
  Building2,
  Car,
  Code2,
  Compass,
  Database,
  GraduationCap,
  Layers,
  Monitor,
  Network,
  Server,
  Smartphone,
  Terminal,
  Users,
  Wrench,
};

const socialIcons = {
  Github,
  Globe,
  Linkedin,
  Mail,
};

export function DataIcon({ name, size = 20, className = "", ...props }) {
  const Icon = contentIcons[name] ?? Sparkles;

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      size={size}
      className={className}
      {...props}
    />
  );
}

export function SocialIcon({ name, size = 17, className = "", ...props }) {
  const Icon = socialIcons[name] ?? Globe;

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      size={size}
      className={className}
      {...props}
    />
  );
}
