/**
 * Site visibility toggles — flip these to show/hide sections.
 * Set back to `true` when ready to go live again.
 *
 * SHOW_FOUNDER_CONTENT: leadership cards, founder names, blog author bios,
 * and nav links to leadership.
 *
 * SHOW_WEBINARS: /webinars page, nav links, footer link, and sitemap entry.
 */
export const SHOW_FOUNDER_CONTENT = true;
export const SHOW_WEBINARS = true;

/** Filter footer/nav links that depend on visibility flags. */
export function isLinkVisible(href: string): boolean {
  if (!SHOW_WEBINARS && href === "/webinars") return false;
  if (!SHOW_FOUNDER_CONTENT && href === "/about#leadership") return false;
  return true;
}
