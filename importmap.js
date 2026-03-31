/**
 * importmap.js
 * Single source of truth for module resolution.
 */
const map = {
  imports: {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom": "https://esm.sh/react-dom@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
    "motion/react": "https://esm.sh/motion@12.23.24/react?external=react,react-dom",
    "three": "https://esm.sh/three@0.180.0",
    "gsap": "https://esm.sh/gsap@3.13.0"
  }
};

const script = document.createElement('script');
script.type = 'importmap';
script.textContent = JSON.stringify(map);
document.currentScript.after(script);
