# Motion Surfaces Inventory (ramx.in parity)

This inventory defines the interaction surfaces we measure for strict motion parity and the exact style properties sampled frame-by-frame.

## Measurement environment

- Viewport: `1280x900`
- Device scale factor: `1`
- Browser: Chromium (Playwright)
- Sampling: `requestAnimationFrame`
- Theme modes: `light`, `dark`
- Runs per interaction: `3` (median used for duration and checkpoints)

## Interactions and probes

### 1) Command palette open/close

- Trigger:
  - Open: click command palette trigger button (`aria-label="Open command palette (⌘K)"`)
  - Close: press `Escape`
- Elements:
  - Overlay: fixed backdrop (`.fixed.inset-0.z-\\[120\\]`)
  - Panel: palette card (`.max-w-xl.rounded-xl.border`)
- Properties sampled:
  - Overlay: `opacity`
  - Panel: `opacity`, `transform`
- Derived metrics:
  - enter/exit duration
  - easing checkpoints at 20/40/60/80%
  - translateY/scale amplitudes

### 2) Theme toggle press

- Trigger: click theme toggle button (`aria-label^="Switch to "`)
- Element: same button
- Properties sampled:
  - `transform`
  - `background-color`
  - `border-color`
- Derived metrics:
  - hover-to-active timing
  - release settle timing

### 3) Header nav link hover lift

- Trigger: mouse move into `Home` nav link in header
- Element: first header nav link (`header nav a[href="/"]`)
- Properties sampled:
  - `transform`
  - `color`
- Derived metrics:
  - hover lift duration
  - color transition duration/easing

### 4) Footer social icon hover

- Trigger: mouse move into first social icon button in footer
- Element: first footer social anchor (`footer a[aria-label]`)
- Properties sampled:
  - `transform`
  - `background-color`
  - `border-color`
- Derived metrics:
  - hover lift duration
  - bg/border transition duration

### 5) Blog card hover (home + blog list)

- Trigger: mouse move into first `.group.block` blog card
- Elements:
  - Card root
  - Read more hint text (`Read more →`)
- Properties sampled:
  - Card: `transform`
  - Hint: `transform`
- Derived metrics:
  - card lift duration
  - hint x-translation duration

### 6) Experience expand/collapse

- Trigger: click first `Expand details` button in experience section
- Elements:
  - Chevron wrapper
  - Expandable details container
- Properties sampled:
  - Chevron: `transform`
  - Container: `grid-template-rows`, `opacity`, `margin-top`
- Derived metrics:
  - expand duration
  - collapse duration
  - chevron and content synchronization delta

### 7) Blog tag filter selection

- Route: `/blog`
- Trigger: click first non-`All` tag filter button
- Element: clicked tag button
- Properties sampled:
  - `background-color`
  - `border-color`
  - `color`
- Derived metrics:
  - selected-state transition duration

### 8) Copy email feedback

- Route: `/`
- Trigger: click copy email button
- Element: email button text/icon wrapper
- Properties sampled:
  - text content transition timestamps (`email` -> `Copied` -> `email`)
- Derived metrics:
  - feedback hold duration (`Copied` visibility)

## Acceptance thresholds

- Duration mismatch: `<= 16.7ms` (1 frame at 60Hz)
- Easing progress mismatch at checkpoints: `<= 0.02`
- Transform endpoint mismatch:
  - translate: `<= 0.5px`
  - scale: `<= 0.005`
  - rotate: `<= 1deg`
