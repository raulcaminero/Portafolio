import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raúl Caminero — Senior Full-Stack Software Engineer",
  description:
    "10+ years building scalable web applications, high-performance APIs, and AI-powered services. React, Node.js/NestJS, GraphQL, AWS, and RAG pipelines.",
  openGraph: {
    title: "Raúl Caminero — Senior Full-Stack Software Engineer",
    description:
      "Scalable web apps, high-performance APIs, and AI-powered services.",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
