import {
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Mail,
  Copy,
  Check,
  Calendar,
  ArrowRight,
  ChevronDown,
  Search,
} from "lucide-react";

export function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return <Linkedin size={size} strokeWidth={1.75} />;
}

export function GithubIcon({ size = 16 }: { size?: number }) {
  return <Github size={size} strokeWidth={1.75} />;
}

export function YouTubeIcon({ size = 16 }: { size?: number }) {
  return <Youtube size={size} strokeWidth={1.75} />;
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return <Instagram size={size} strokeWidth={1.75} />;
}

export function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }: { size?: number }) {
  return <Mail size={size} strokeWidth={1.75} />;
}

export function CopyIcon({ size = 16 }: { size?: number }) {
  return <Copy size={size} strokeWidth={1.75} />;
}

export function CheckIcon({ size = 16 }: { size?: number }) {
  return <Check size={size} strokeWidth={1.75} />;
}

export function CalendarIcon({ size = 14 }: { size?: number }) {
  return <Calendar size={size} strokeWidth={1.75} />;
}

export function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return <ArrowRight size={size} strokeWidth={1.75} />;
}

export function ChevronDownIcon({ size = 16 }: { size?: number }) {
  return <ChevronDown size={size} strokeWidth={1.75} />;
}

export function SearchIcon({ size = 14 }: { size?: number }) {
  return <Search size={size} strokeWidth={1.75} />;
}

export function SpotifyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1DB954">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function SocialIcon({ name, size = 16 }: { name: string; size?: number }) {
  switch (name) {
    case "x": return <XIcon size={size} />;
    case "linkedin": return <LinkedInIcon size={size} />;
    case "github": return <GithubIcon size={size} />;
    case "youtube": return <YouTubeIcon size={size} />;
    case "instagram": return <InstagramIcon size={size} />;
    case "pinterest": return <PinterestIcon size={size} />;
    case "medium": return <MediumIcon size={size} />;
    case "mail": return <MailIcon size={size} />;
    default: return null;
  }
}
