/**
 * Returns the correct public asset path, including the GitHub Pages basePath
 * when deployed to production (/TST).
 *
 * Use this for any raw string image paths (e.g. in data files, CSS-in-JS, etc.)
 * Next.js <Image> component already handles basePath automatically.
 */
const basePath = process.env.NODE_ENV === "production" ? "/TST" : "";

export function assetPath(path: string): string {
    // Ensure the path starts with /
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
}
