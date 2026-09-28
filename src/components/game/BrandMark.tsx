import { Crown } from "lucide-react";
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-3"><span className="brand-crown"><Crown /></span>{!compact && <span><strong className="block font-display text-base leading-none text-foreground">THE MASTER</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[.22em] text-muted-foreground">Think. Play. Master.</small></span>}</div>;
}
