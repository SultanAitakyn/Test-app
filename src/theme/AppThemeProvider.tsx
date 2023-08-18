import {createTheme, ThemeProvider} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {StyledEngineProvider} from '@mui/styled-engine-sc';
import {themeConfig} from './config';


const theme = createTheme(themeConfig);

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
    );
};
