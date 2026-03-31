/**
 * Theme.tsx
 * Design tokens and semantic color mapping.
 */

export const Color = {
  Base: {
    Surface: {
      1: '#FFFFFF', // Pure white
      2: '#F5F5F5', // Light gray
      3: '#E5E5E5', // Border gray
    },
    Content: {
      1: '#000000', // Pure black
      2: '#404040', // Dark gray
      3: '#808080', // Muted gray
    }
  },
  Accent: {
    Surface: {
      1: '#000000', // Black as accent in light mode
      2: '#333333',
      3: '#666666',
    },
    Content: {
      1: '#FFFFFF',
      2: '#F5F5F5',
      3: '#E5E5E5',
    }
  }
};

export const Type = {
  Expressive: {
    Display: {
      L: { fontSize: '120px', fontFamily: 'Inter', lineHeight: '0.9', letterSpacing: '-0.02em' },
      M: { fontSize: '80px', fontFamily: 'Inter', lineHeight: '1', letterSpacing: '-0.01em' },
    }
  },
  Readable: {
    Body: {
      M: { fontSize: '16px', fontFamily: 'Inter', lineHeight: '1.6' },
    },
    Label: {
      S: { fontSize: '12px', fontFamily: 'Victor Mono', letterSpacing: '0.1em', textTransform: 'uppercase' as const },
    }
  }
};

export const Space = {
  Base: 4,
  S: 8,
  M: 16,
  L: 24,
  XL: 32,
  XXL: 64,
};

export const Radius = {
  S: 4,
  M: 8,
  L: 16,
  Full: 9999,
};

export const Motion = {
  Base: 100,
  Standard: 300,
  Slow: 600,
};
