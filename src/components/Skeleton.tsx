import {Box, styled} from '@mui/material';

export const Skeleton = styled(Box)<{ color?: string, width?: string, height?: string, borderRadius?: string }>
(({
    theme,
    color = theme.palette.secondary.light,
    width = '100px',
    height = '28px',
    borderRadius = '14px'
  }) => ({
  width,
  height,
  backgroundColor: color,
  borderRadius
}));
