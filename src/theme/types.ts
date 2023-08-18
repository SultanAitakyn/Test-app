import {CSSProperties} from 'react';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        desktop: true;
    }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    inputLabel: CSSProperties;
  }

  interface TypographyVariantsOptions {
    inputLabel?: CSSProperties;
  }

  interface TypographyPropsVariantOverrides {
    inputLabel?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    inputLabel: true;
  }
}

export {}
