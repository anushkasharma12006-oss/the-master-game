import { Link, useRouterState } from "@tanstack/react-router";
import { Award, Gamepad2, History, Home, Medal, Settings, UserRound, BarChart3, Coins } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandMark } from "@/components/game/BrandMark";
import { useGame } from "@/context/GameContext";
import { cn } from "@/lib/utils";
const nav: { to: "/"|"/games"|"/leaderboard"|"/statistics"|"/achievements"|"/history"|"/profile"|"/settings"; label:string; icon: LucideIcon }[] = [
  {to:"/",label:"Dashboard",icon:Home},{to:"/games",label:"Games",icon:Gamepad2},{to:"/leaderboard",label:"Leaderboard",icon:Medal},{to:"/statistics",label:"Statistics",icon:BarChart3},{to:"/achievements",label:"Achievements",icon:Award},{to:"/history",label:"History",icon:History},{to:"/profile",label:"Profile",icon:UserRound},{to:"/settings",label:"Settings",icon:Settings},
];
export function AppShell({ children }: { children: React.ReactNode }) {
  const player = useGame(); const pathname = useRouterState({ select: (s) => s.location.pathname }); const isGame = pathname.startsWith("/games/");
  if (isGame) return <>{children}</>;
  return <div className="min-h-screen bg-background text-foreground"><aside className="app-sidebar"><BrandMark/><nav className="mt-10 flex flex-col gap-1">{nav.map(({to,label,icon:Icon}) => <Link key={to} to={to} activeOptions={{exact:to==="/"}} className="nav-link"><Icon/><span>{label}</span></Link>)}</nav><div className="mt-auto rounded-lg border border-border bg-card p-4"><p className="text-xs font-bold uppercase text-muted-foreground">Master level {player.level}</p><div className="mt-2 progress-track"><span style={{width:`${player.levelXp/10}%`}}/></div><p className="mt-2 text-xs text-muted-foreground">{player.levelXp} / 1,000 XP</p></div></aside><header className="app-header"><div className="md:hidden"><BrandMark compact/></div><div className="ml-auto flex items-center gap-3"><div className="coin-pill"><Coins/> <strong>{player.coins.toLocaleString()}</strong></div><Link to="/profile" className="avatar-button" aria-label="Open profile">A</Link></div></header><main className="app-main">{children}</main><nav className="bottom-nav">{nav.slice(0,5).map(({to,label,icon:Icon}) => <Link key={to} to={to} activeOptions={{exact:to==="/"}} className={cn("bottom-link", label==="Achievements"&&"max-sm:hidden")}><Icon/><span>{label}</span></Link>)}</nav></div>;
}
