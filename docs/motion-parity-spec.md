# Motion Parity Spec

This spec defines motion timing targets used to tune the local implementation toward ramx.in parity.

## Source derivation notes

- Direct frame capture on `https://ramx.in` is blocked by Cloudflare challenge in headless mode.
- Timing baselines were extracted from the public source repository linked to ramx.in (`ramxcodes/sleek-portfolio`) and converted into project tokens.
- Measurement scripts in `scripts/parity/` still capture local traces and enforce numeric comparison when source traces are available.

## Global easing targets

- `ease-in-out` for common hover/link/button transitions
- `ease-out` for page reveal and emphasized entry
- `ease-in` for certain view-transition mask animations
- canonical cubic curves in this project:
  - standard hover: `cubic-bezier(0.4, 0, 0.2, 1)` (maps to ease-in-out)
  - emphasized enter: `cubic-bezier(0.16, 1, 0.3, 1)`
  - exit: `cubic-bezier(0.4, 0, 1, 1)`

## Timing targets by interaction

| Interaction | Target duration | Easing | Notes |
| --- | --- | --- | --- |
| Header nav hover states | 300ms | ease-in-out | Source nav links use `duration-300 ease-in-out` |
| Footer link/social hover states | 300ms | ease-in-out | Matches source interactive controls |
| Generic card hover lift | 300ms | ease-in-out | Applies to blog/development/personal cards |
| Command palette overlay fade | 200ms | ease-out | Fast overlay fade for entry/exit |
| Command palette panel in | 300ms | emphasized enter | Panel y+scale settle |
| Command palette panel out | 220ms | exit | Slightly faster than open |
| Experience expand/collapse | 300ms | standard hover | Open and close symmetry |
| Blog tag filter select | 300ms | ease-in-out | Source filter-style controls use standard color transitions |
| Copy-email hover lift | 300ms | ease-in-out | Matches text link/button hover cadence |
| Page enter | 500ms (+300ms delay optional) | ease-out | Based on source fade-in blur timing |
| Theme toggle press (button) | 300ms | ease-in-out | Control interaction timing |
| Theme view transition reveal | 700ms | ease-out | Source `::view-transition-group(root)` uses 0.7s |

## Tolerances

- Duration mismatch tolerance: `<= 16.7ms`
- Easing progression checkpoints (20/40/60/80%): `<= 0.02` normalized delta
- Transform endpoint tolerance:
  - translate: `<= 0.5px`
  - scale: `<= 0.005`
  - rotate: `<= 1deg`
