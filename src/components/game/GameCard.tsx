import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { GameMode } from "@/data/questions";
import { modeMeta } from "@/data/questions";
import { GameIcon } from "./GameIcons";
export function GameCard({ mode }: { mode: GameMode }) { const item=modeMeta[mode]; return <article className={`game-card accent-${item.accent}`}><div className="game-icon"><GameIcon name={item.icon}/></div><div><p className="eyebrow">{item.difficulty}</p><h3>{item.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></div><Link to="/games/$mode" params={{mode}} className="play-link">Play <ArrowRight/></Link></article>; }
