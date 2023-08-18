import { FC, PropsWithChildren } from "react";
import {Box} from '@mui/material';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box padding="0 25px" marginTop="85px">
      {children}
    </Box>
  );
};

export default Layout;
