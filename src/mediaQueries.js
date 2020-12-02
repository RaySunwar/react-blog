export const breakpoints = {
    xs: 480,    // Moble
    sm: 768,    // Tablets
    md: 1024,   // laptops, small screen
    lg: 1200,   // Desktop, large screens
    xl: 1201    // Extra lagre screens
};

export const size = {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`
};

export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`
};