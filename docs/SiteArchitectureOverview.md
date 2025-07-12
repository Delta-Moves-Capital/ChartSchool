
# 📐 Site Architecture Overview: ChartSchool

This document outlines the high-level architecture, component structure, file layout, and build tooling for the `ChartSchool` project.

---

## 🧱 Tech Stack

| Layer         | Tool / Library       | Purpose                                |
|---------------|----------------------|----------------------------------------|
| Frontend      | React.js             | SPA framework                          |
| Styling       | Tailwind CSS         | Utility-first CSS framework            |
| Build Tool    | Vite                 | Dev server, bundler, and HMR           |
| Linting       | ESLint               | JS/JSX linting                         |
| Transpiler    | Sucrase + Babel (via Vite) | Fast transpilation for JSX/TSX    |

---

## 🗂️ Directory Structure (Client Side)

```
ChartSchool/
├── client/
│   ├── index.html                  # HTML entry point
│   ├── vite.config.mjs            # Vite configuration
│   ├── tailwind.config.cjs        # Tailwind customization
│   ├── postcss.config.cjs         # Tailwind postcss loader
│   ├── package.json               # NPM dependencies and scripts
│   ├── src/
│   │   ├── main.jsx               # Root React DOM render
│   │   ├── App.jsx                # Main application layout
│   │   ├── index.css              # Tailwind imports + global styles
│   │   └── assets/                # Logo images or media assets
│   ├── public/                    # Static assets served at root
│   └── node_modules/             # Project dependencies
```

---

## ⚙️ Build Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Run the app with:

```bash
npm run dev
```

---

## 🎨 Styling: Tailwind CSS

- Configured via `tailwind.config.cjs` and `postcss.config.cjs`
- Custom theme extensions:
  - `primary`, `secondary`, `accent` colors
  - Custom `boxShadow` and `animation`

---

## ⚛️ React Features

- **Component-Based UI**
- **Hooks (e.g., useState)**
- **Strict Mode Rendering**

---

## 🔥 Hot Module Reload (HMR)

Vite handles instant HMR via its dev server, so any changes to JSX/CSS reload without refreshing the page.

---

## 📝 Next Steps

- [ ] Set up routing via `react-router-dom`
- [ ] Create reusable UI components (Header, Footer, Layout)
- [ ] Add a global state manager if needed (e.g., Zustand or Redux)
- [ ] Integrate content pages (Markdown or CMS-backed)

---

_Last updated: 2025-07-12_
