export const site = {
  name: "LA Pokerbots",
  wordmark: "LA POKERBOTS",
  email: "alexwang770@g.ucla.edu",
  github: "https://github.com/AlexNicholasWang/LAPokerbots",
  luma: "https://luma.com/embed/event/evt-3o3pNlXwpwP0JAy/simple",
  joinForm: "https://forms.gle/6kf5s7wPwwiPQLm86",
  year: 2026,
} as const;

/** Single-page anchor navigation. */
export const nav = [
  { href: "#about", label: "About" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#register", label: "Register" },
] as const;