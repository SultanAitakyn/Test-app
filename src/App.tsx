import {AppRoutes} from 'routes/Routes';
import {Container} from '@mui/material';
import {NavBar} from 'components/NavBar';
import Layout from 'components/Layout';

function App() {

  return (
    <Container maxWidth="desktop" sx={{marginTop: '100px'}}>
      <NavBar/>
      <Layout>
        <AppRoutes/>
      </Layout>
    </Container>
  );
}

export default App;
