"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./PillNav.module.css";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type PillNavProps = {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
};

type NavVars = CSSProperties & {
  "--base": string;
  "--pill-bg": string;
  "--hover-text": string;
  "--pill-text": string;
};

function isExternalLink(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

export function PillNav({
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#111111",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = false,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timelineRefs = useRef<Array<ReturnType<typeof gsap.timeline> | null>>([]);
  const tweenRefs = useRef<Array<ReturnType<typeof gsap.to> | null>>([]);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  const cssVars: NavVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) {
          return;
        }

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const radius = ((w * w) / 4 + h * h) / (2 * h);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (w * w) / 4))) + 1;
        const originY = diameter - delta;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(`.${styles.pillLabel}`);
        const hoverLabel = pill.querySelector(`.${styles.pillLabelHover}`);

        if (label) {
          gsap.set(label, { y: 0 });
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: h + 12, opacity: 0 });
        }

        const index = circleRefs.current.indexOf(circle);

        if (index === -1) {
          return;
        }

        timelineRefs.current[index]?.kill();

        const timeline = gsap.timeline({ paused: true });
        timeline.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);

        if (label) {
          timeline.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          timeline.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        timelineRefs.current[index] = timeline;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    document.fonts?.ready.then(layout).catch(() => {});

    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { visibility: "hidden", opacity: 0, y: -12 });
    }

    if (initialLoadAnimation) {
      if (navItemsRef.current) {
        gsap.set(navItemsRef.current, { width: 0, overflow: "hidden" });
        gsap.to(navItemsRef.current, { width: "auto", duration: 0.6, ease });
      }
    }

    const timelines = timelineRefs.current;
    const tweens = tweenRefs.current;

    return () => {
      window.removeEventListener("resize", onResize);
      timelines.forEach((timeline) => timeline?.kill());
      tweens.forEach((tween) => tween?.kill());
    };
  }, [items, ease, initialLoadAnimation]);

  function handleEnter(index: number) {
    const timeline = timelineRefs.current[index];

    if (!timeline) {
      return;
    }

    tweenRefs.current[index]?.kill();
    tweenRefs.current[index] = timeline.tweenTo(timeline.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  }

  function handleLeave(index: number) {
    const timeline = timelineRefs.current[index];

    if (!timeline) {
      return;
    }

    tweenRefs.current[index]?.kill();
    tweenRefs.current[index] = timeline.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  }

  function animateMobileMenu(nextOpen: boolean) {
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(`.${styles.hamburgerLine}`);

      if (nextOpen) {
        gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (!menu) {
      return;
    }

    if (nextOpen) {
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(
        menu,
        { opacity: 0, y: -12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease,
          transformOrigin: "top center",
        },
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -12,
        duration: 0.2,
        ease,
        transformOrigin: "top center",
        onComplete: () => {
          gsap.set(menu, { visibility: "hidden" });
        },
      });
    }
  }

  function toggleMobileMenu() {
    const nextOpen = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextOpen);
    animateMobileMenu(nextOpen);
    onMobileMenuClick?.();
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    animateMobileMenu(false);
  }

  function renderItem(item: PillNavItem, index: number) {
    const active = activeHref === item.href;
    const itemClassName = [styles.pill, active ? styles.pillActive : ""].filter(Boolean).join(" ");
    const content = (
      <>
        <span
          className={styles.hoverCircle}
          aria-hidden="true"
          ref={(element) => {
            circleRefs.current[index] = element;
          }}
        />
        <span className={styles.labelStack}>
          <span className={styles.pillLabel}>{item.label}</span>
          <span className={styles.pillLabelHover} aria-hidden="true">
            {item.label}
          </span>
        </span>
      </>
    );

    if (isExternalLink(item.href)) {
      return (
        <a
          role="menuitem"
          href={item.href}
          className={itemClassName}
          aria-label={item.ariaLabel || item.label}
          onMouseEnter={() => handleEnter(index)}
          onMouseLeave={() => handleLeave(index)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        role="menuitem"
        href={item.href}
        className={itemClassName}
        aria-label={item.ariaLabel || item.label}
        onMouseEnter={() => handleEnter(index)}
        onMouseLeave={() => handleLeave(index)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.pillNavContainer}>
      <nav className={[styles.pillNav, className].filter(Boolean).join(" ")} aria-label="Primary" style={cssVars}>
        <div className={[styles.pillNavItems, styles.desktopOnly].join(" ")} ref={navItemsRef}>
          <ul className={styles.pillList} role="menubar">
            {items.map((item, index) => (
              <li key={item.href || `item-${index}`} role="none">
                {renderItem(item, index)}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={[styles.mobileMenuButton, styles.mobileOnly].join(" ")}
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      <div className={[styles.mobileMenuPopover, styles.mobileOnly].join(" ")} ref={mobileMenuRef} style={cssVars}>
        <ul className={styles.mobileMenuList}>
          {items.map((item, index) => {
            const active = activeHref === item.href;
            const mobileClassName = [styles.mobileMenuLink, active ? styles.mobileMenuLinkActive : ""]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={item.href || `mobile-item-${index}`}>
                {isExternalLink(item.href) ? (
                  <a href={item.href} className={mobileClassName} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={mobileClassName} onClick={closeMobileMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
