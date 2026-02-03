import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let observer;

    const observeSections = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) =>
                b.intersectionRatio - a.intersectionRatio
            );

          if (visible.length) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          threshold: [0.25, 0.5, 0.75],
          rootMargin: "-30% 0px -30% 0px",
          ...options,
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    // aguarda render completo
    requestAnimationFrame(observeSections);

    return () => observer?.disconnect();
  }, [sectionIds, options]);

  return activeId;
}