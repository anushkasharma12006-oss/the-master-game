<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history.
<!-- LOVABLE:END -->

- Keep player persistence behind `GameContext`; this preserves one replaceable boundary for a future hosted backend.
- Keep all quiz content in `src/data/questions.ts`; game screens must consume structured data rather than embed questions.
- Use the dynamic `/games/$mode` route for shared gameplay; this prevents four modes from duplicating the question engine.
