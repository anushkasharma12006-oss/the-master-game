import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { GameMode } from "@/data/questions";

export interface GameRecord { id: string; mode: GameMode; score: number; correct: number; total: number; bestStreak: number; date: string; }
export interface PlayerState { coins: number; xp: number; gamesPlayed: number; gamesWon: number; questions: number; correct: number; bestStreak: number; history: GameRecord[]; achievements: string[]; sound: boolean; }
const initial: PlayerState = { coins: 12500, xp: 720, gamesPlayed: 27, gamesWon: 19, questions: 243, correct: 198, bestStreak: 8, history: [], achievements: ["first-victory","streak-5"], sound: true };
const STORAGE_KEY = "the-master-player-v1";
const levelNames = ["Beginner","Learner","Challenger","Thinker","Expert","Genius","Master","Grand Master"];

interface GameContextValue extends PlayerState {
  level: number; levelName: string; levelXp: number;
  completeGame: (record: Omit<GameRecord,"id"|"date">, xp: number) => void;
  toggleSound: () => void; resetProgress: () => void;
}
const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlayerState>(initial);
  useEffect(() => { try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) setState({ ...initial, ...JSON.parse(saved) }); } catch { /* keep defaults */ } }, []);
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* storage may be unavailable */ } }, [state]);
  const level = Math.min(8, Math.floor(state.xp / 1000) + 1);
  const completeGame = (record: Omit<GameRecord,"id"|"date">, earnedXp: number) => setState((previous) => {
    const achievements = new Set(previous.achievements);
    if (previous.gamesPlayed === 0 || record.correct > 0) achievements.add("first-victory");
    if (record.bestStreak >= 5) achievements.add("streak-5");
    if (record.mode === "brain" && record.correct >= 8) achievements.add("brain-master");
    if (record.mode === "science" && record.correct >= 12) achievements.add("science-genius");
    if (record.mode === "rapid" && record.correct >= 8) achievements.add("speed-demon");
    if (previous.xp + earnedXp >= 7000) achievements.add("the-master");
    const entry = { ...record, id: crypto.randomUUID(), date: new Date().toISOString() };
    return { ...previous, coins: previous.coins + record.score, xp: previous.xp + earnedXp, gamesPlayed: previous.gamesPlayed + 1, gamesWon: previous.gamesWon + (record.correct / record.total >= .6 ? 1 : 0), questions: previous.questions + record.total, correct: previous.correct + record.correct, bestStreak: Math.max(previous.bestStreak, record.bestStreak), history: [entry, ...previous.history].slice(0,20), achievements: [...achievements] };
  });
  const value = useMemo(() => ({ ...state, level, levelName: levelNames[level - 1] ?? "Beginner", levelXp: state.xp % 1000, completeGame, toggleSound: () => setState((p) => ({ ...p, sound: !p.sound })), resetProgress: () => setState({ ...initial, coins: 0, xp: 0, gamesPlayed: 0, gamesWon: 0, questions: 0, correct: 0, bestStreak: 0, history: [], achievements: [] }) }), [state, level]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() { const value = useContext(GameContext); if (!value) throw new Error("useGame must be used within GameProvider"); return value; }
