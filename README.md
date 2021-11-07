# Next Boilerplate - Starter for Next.js 12+, TailwindCSS and Typescript

🚀 Boilerplate and Starter for newest Next.js, TailwindCSS and TypeScript ⚡️ Made with developer who has experience with Next.js, TypeScript, ESLint, Prettier, Husky, VSCode, PostCSS, TailwindCSS.

You can check [the demo here](https://next-boilerplate-theta.vercel.app/).

## Features

- [Next.js](https://nextjs.org) for Static Site Generator
- Integrate with [Tailwind CSS](https://tailwindcss.com) (JIT mode)
- Type checking [TypeScript](https://www.typescriptlang.org)
- Strict Mode for TypeScript and React 17
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Google configuration)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- VSCode configuration: Settings and extension for PostCSS, ESLint, Prettier, TypeScript
- SEO metadata, JSON-LD and Open Graph tags with Next SEO
- [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- Maximize lighthouse score

## Getting Started

Run the following command on your local environment:

```bash
git clone --depth=1 git@github.com:andriyfm/next-boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## File Structure

```bash
.
├── README.md                # README file
├── .husky                   # Husky folder
├── .vscode                  # VSCode folder
├── public                   # Public folder
│   └── assets
├── src
│   ├── components           # Atomic layout components
│   ├── configs              # Configs folder
│   ├── contexts             # Contexts folder
│   ├── data                 # Data folder
│   ├── hooks                # Custom hooks folder
│   ├── layouts              # Layout components folder
│   ├── pages                # pages folder
│   ├── styles               # PostCSS style folder with Tailwind
│   └── utils                # Utility folder
├── .eslintrc.js             # Eslint configuration
├── .prettierrc              # Prettier configuration
├── next.config.js           # Next JS configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
