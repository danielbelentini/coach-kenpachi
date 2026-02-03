export function useScrollToSection() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 80;
    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return scrollToSection;
}