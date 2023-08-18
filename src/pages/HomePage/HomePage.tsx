import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Warning} from 'assets/icons/Warning.svg';
import {Skeleton} from 'components/Skeleton';
import {Box, Button, Checkbox, FormControlLabel, Snackbar, styled, TextField, Typography} from '@mui/material';
import {CheckboxIcon, CheckedIcon} from 'components/ChecbkoxIcon';
import {startCourse} from 'api/course';
import {FormErrors, FormFields} from './interfaces';
import {COURSE_PATH} from 'routes/constants';

export const HomePage = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    receiveUpdates: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSnackbar, setShowSnackbar] = useState(false);

  const validateValues = (inputValues: FormFields) => {
    let errors: FormErrors = {};
    if (!inputValues.name.length) {
      errors.name = 'Please provide a name!';
    }
    if (!inputValues.email.length) {
      errors.email = 'Please provide an email!';
    }
    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({...fields, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateValues(fields);
    if (!Object.keys(errors).length) {
      try {
        const response = await startCourse({...fields, courseId: 1});
        if (response.status === 201) {
          navigate(COURSE_PATH);
        }
      } catch (error) {
        setShowSnackbar(true);
      }
    }
    setErrors(errors);
  };

  const handleClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Box>
      <Typography variant="h4">Submit your details</Typography>
      <Box marginTop="55px" display="flex" justifyContent="space-between" flexWrap="wrap">
        <form onSubmit={handleSubmit}>

          <Typography variant="inputLabel" component="div" marginBottom="13px">Name</Typography>
          <TextField
            InputLabelProps={{shrink: false}}
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={Boolean(errors.name) ?
              <Box display="flex" component="span"><Warning/><Typography variant="body2"
                                                                         marginLeft="2px"
                                                                         component="span">{errors.name}</Typography></Box> : null}
            sx={{width: '350px'}}
          />

          <Typography marginTop="30px" variant="inputLabel" component="div" marginBottom="13px">Email</Typography>
          <TextField
            InputLabelProps={{shrink: false}}
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={Boolean(errors.email) ?
              <Box display="flex" component="span"><Warning/><Typography variant="body2"
                                                                         marginLeft="2px"
                                                                         component="span">{errors.email}</Typography></Box> : null}
            sx={{width: '350px'}}
          />

          <Box marginTop="75px">
            <FormControlLabel
              control={<Checkbox disableRipple icon={<CheckboxIcon/>} checkedIcon={<CheckedIcon/>}/>}
              label="I want to receive updates via email."/>
          </Box>

          <StyledButton  type="submit" variant="contained">
            Start the Course
          </StyledButton>
        </form>

        <Box width="350px" marginTop="43px" display="flex" flexDirection="column" gap="25px">
          <Skeleton width="160px"/>
          {[1, 2, 3].map(v => <Skeleton key={v} width="100%"/>)}
          <Skeleton width="160px" marginTop="52px"/>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Something went wrong"
      />
    </Box>
  )
}

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '55px',
  textTransform: 'none',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  border: `1.5px solid ${theme.palette.primary.main}`,
  '&:hover': {backgroundColor: theme.palette.primary.light}
}));
