# Lumina Ring

A premium, scroll-driven 3D image ring experience.

## Directory Tree
- `/src`
  - `/components`
    - `/Core`: Atomic UI elements (Image)
    - `/Package`: Combined components (RingItem)
    - `/Section`: Layout sections (ImageRing)
    - `/Page`: Full page layouts (Home)
  - `Theme.tsx`: Design tokens and semantic styling
  - `App.tsx`: Root component
  - `main.tsx`: Entry point

## LLM Instructions
- Use `Theme.tsx` for all styling tokens.
- Animations are handled via `motion/react` with scroll-linked transforms.
- 3D effects use CSS `preserve-3d` and `perspective`.
- No Tailwind CSS is used; all styles are JS objects.
