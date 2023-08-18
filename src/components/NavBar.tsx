import {Skeleton} from 'components/Skeleton';
import {Box} from '@mui/material';

export const NavBar = () => {
  return (
    <Skeleton width="100%" color="#FFF" height="62px" borderRadius="31px"
              boxShadow="15px 11px 30px 0px rgba(75, 92, 84, 0.14)">
      <Box padding="17px 25px" display="flex" justifyContent="space-between" alignItems="center">
        <Box><Skeleton width="133px" color="#C1D9CD"/></Box>
        <Box gap="20px" display={{ tablet: 'flex', mobile: 'none' }}>
          {[1, 2, 3].map(v => <Skeleton key={v}/>)}
        </Box>
      </Box>
    </Skeleton>
  )
}
