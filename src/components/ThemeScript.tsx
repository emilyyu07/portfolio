const themeScript = `
  (() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "dark" ? "dark" : "light";
    root.dataset.theme = theme;
  })();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
