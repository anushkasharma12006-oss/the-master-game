# THE MASTER game platform

## Scope
Build a complete local-first quiz platform with a bright, cheerful game-show look, shared branding, and distinct visual identities for each game mode.

## Experience
- Create a responsive app shell with desktop sidebar, mobile navigation, coin balance, level, and profile status.
- Build Dashboard, Games, Leaderboard, Statistics, Achievements, History, Profile, and Settings as separate pages.
- Use a lively navy base with gold, cyan, green, and coral accents; each game receives its own accent while staying within one system.
- Add a crown mark, polished motion, clear game states, progress indicators, timers, lifelines, confirmations, and result screens.

## Gameplay
- Implement a reusable question engine and structured question collections outside page components.
- Build all four playable games: 15-question Master Quiz with lifelines and reward ladder; timed 10-question Rapid Fire; streak-based Brain Battle; and progressive Science Master with subject breakdown.
- Randomize question and answer order while preserving difficulty progression.
- Add correct/wrong feedback, scoring, coins, XP, levels, streak bonuses, achievements, and end-game summaries.

## Player progress
- Persist coins, XP, statistics, achievements, history, and sound preference in the browser.
- Keep state and storage behind reusable providers/utilities so a hosted account system can replace it later.
- Use sample leaderboard players and clearly identify the current player.

## Quality
- Include route-specific sharing metadata, accessible controls, reduced-motion handling, and phone/tablet/desktop layouts.
- Verify the main flows in the live preview: starting each game, answering, lifelines/timer behavior, results, persistence, and navigation.

## Technical notes
- Keep TanStack Router and create route files for every destination.
- Use TypeScript, React context, local structured data, semantic design tokens, and existing UI primitives where available.
- No purchases, accounts, or hosted backend are included in this local-first MVP.
