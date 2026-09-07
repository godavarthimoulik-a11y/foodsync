# 🍽️ FoodSync

FoodSync is a modern, AI-powered web application designed to streamline food-related planning and synchronization. Built with Next.js and Google's Gemini AI, it offers an intelligent chat interface to help with meal planning, recipe discovery, and more.

## ✨ Features

- **AI-Powered Chat**: Interact with a smart assistant powered by Google Gemini AI to get food recommendations, meal plans, and cooking tips.
- **Modern UI**: Built with a component library from Radix UI and styled with Tailwind CSS for a clean, responsive, and accessible interface.
- **Form Handling**: Robust form management using React Hook Form with Zod schema validation.
- **Type Safety**: Fully typed with TypeScript for a better developer experience and fewer runtime errors.
- **Analytics Ready**: Integrated with Vercel Analytics for performance monitoring.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate`
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Date Handling**: [date-fns](https://date-fns.org/)
- **Package Manager**: npm / pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/godavarthimoulik-a11y/foodsync.git
    cd foodsync

    foodsync/
├── app/                    # Next.js App Router pages and layouts
│   ├── api/
│   │   └── chat/           # AI chat API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
├── styles/                 # Additional style files
├── .env.local.example      # Example environment variables
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration




🤖 AI Integration
This project uses the Google Gemini API to power its chat functionality. The AI can assist with:

Generating meal plans based on dietary preferences.

Suggesting recipes from available ingredients.

Answering food-related questions.

Providing nutritional information.

The API route is located at app/api/chat/ and handles communication with the Gemini model.

📦 Available Scripts
npm run dev – Starts the development server.

npm run build – Creates a production build.

npm run start – Starts the production server.

npm run lint – Runs ESLint for code linting.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository.

Create your feature branch (git checkout -b feature/amazing-feature).

Commit your changes (git commit -m 'Add some amazing feature').

Push to the branch (git push origin feature/amazing-feature).

Open a Pull Request.

📄 License
This project is private and not currently licensed for public use. All rights reserved.
