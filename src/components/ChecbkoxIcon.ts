import {styled} from '@mui/material';
import checkedIcon from "assets/icons/CheckedIcon.svg";

export const CheckboxIcon = styled('span')(({ theme }) => ({
  border: `1.5px solid ${theme.palette.primary.main}`,
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#FFF",
  'input:hover ~ &': {
    backgroundColor:'#E3F9EE',
  },
}));

export const CheckedIcon = styled('span')(({ theme }) => ({
  border: `1.5px solid ${theme.palette.primary.main}`,
  borderRadius: 3,
  width: 16,
  height: 16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  '&:before': {
    width: 12,
    height: 12,
    background: `url(${checkedIcon}) no-repeat`,
    content: '""',
  },
  backgroundColor: "#FFF",
  'input:hover ~ &': {
    backgroundColor:'#E3F9EE',
  },
}));
