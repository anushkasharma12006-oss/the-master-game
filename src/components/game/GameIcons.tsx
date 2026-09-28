import { Brain, Crown, FlaskConical, Flame, Gauge, History, Home, Medal, Settings, Sparkles, Trophy, UserRound, Zap, type LucideIcon } from "lucide-react";
const icons: Record<string, LucideIcon> = { Brain,Crown,FlaskConical,Flame,Gauge,History,Home,Medal,Settings,Sparkles,Trophy,UserRound,Zap };
export function GameIcon({ name, className }: { name: string; className?: string }) { const Icon = icons[name] ?? Sparkles; return <Icon className={className} />; }
