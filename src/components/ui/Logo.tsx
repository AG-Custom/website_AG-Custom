type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

/** Símbolo "AG" da marca. Usa currentColor, com o traço inferior em violeta. */
export function Logo({ size = 36, className, title = "AG Custom" }: LogoProps) {
  return (
    <svg
      width={size}
      height={(size * 36) / 39}
      viewBox="0 0 39 36"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M5.98 30.76H2.07L13.37.3h3.85l11.3 30.46h-3.91L15.41 5.12h-.24L5.98 30.76Zm1.44-11.9h15.75v3.28H7.42v-3.28Z"
        fill="currentColor"
      />
      <path
        d="M31.37 13.09a10.8 10.8 0 0 0-1.31-2.69 8.4 8.4 0 0 0-1.9-2.05 8.3 8.3 0 0 0-2.5-1.3 10 10 0 0 0-3.07-.45c-1.82 0-3.48.47-4.97 1.4-1.5.93-2.68 2.3-3.56 4.12-.88 1.82-1.32 4.04-1.32 6.68 0 2.64.44 4.86 1.34 6.68.89 1.81 2.1 3.19 3.62 4.12 1.52.93 3.23 1.4 5.14 1.4 1.76 0 3.31-.37 4.65-1.12a7.84 7.84 0 0 0 3.16-3.18c.76-1.38 1.14-3 1.14-4.86l1.14.24h-9.25V18.8h11.71v3.27c0 2.51-.54 4.7-1.62 6.55a11.27 11.27 0 0 1-4.45 4.31c-1.88 1.01-4.05 1.52-6.49 1.52-2.72 0-5.12-.64-7.18-1.9a12.84 12.84 0 0 1-4.81-5.42C9.7 24.8 9.13 22.02 9.13 18.8c0-2.41.33-4.58.98-6.5a14.1 14.1 0 0 1 2.8-4.94 12 12 0 0 1 4.26-3.12 13.6 13.6 0 0 1 5.42-1.09c1.63 0 3.14.24 4.54.73 1.41.48 2.67 1.16 3.77 2.04a11.6 11.6 0 0 1 4.31 7.17h-3.84Z"
        fill="currentColor"
      />
      <path d="M0 35.34h39" stroke="var(--color-accent)" strokeWidth="1.2" />
    </svg>
  );
}
