import { useEffect, useState } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import HttpsIcon from '@material-ui/icons/Https';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Box, Grid, InputAdornment, MenuItem, Paper, Tab, Tabs, TextField } from '@material-ui/core';
import { CustomButton } from '../../../template';
import { CustomTypography } from '../../atoms';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(4),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
	}
});
const useStyles = makeStyles({
	select: {
		borderRadius: 10,
	}
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
		padding: "0px 56px",
		border: "none",
		width: "100%",
		maxWidth: 495
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: 20,
  },
}))(MuiDialogActions);

const CustomTabs = withStyles((theme) => ({
  root: {
		textTransform: 'initial',
		marginBottom: 33
  },
}))(Tabs);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7581D8',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7581D8',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7581D8',
      },
      '&:hover fieldset': {
        borderColor: '#7581D8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7581D8',
      },
    },
  },
})(TextField);

const CssTextFieldSelect = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7581D8',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7581D8',
    },
    '& .MuiOutlinedInput-root': {
			borderRadius: "4px 0 0 4px",
      '& fieldset': {
        borderColor: '#7581D8',
      },
      '&:hover fieldset': {
        borderColor: '#7581D8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7581D8',
      },
    },
  },
})(TextField);

const CssTextFieldInput = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7581D8',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7581D8',
    },
    '& .MuiOutlinedInput-root': {
			borderRadius: "0 4px 4px 0",
      '& fieldset': {
        borderColor: '#7581D8',
      },
      '&:hover fieldset': {
        borderColor: '#7581D8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7581D8',
      },
    },
  },
})(TextField);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const currencies = [
	{
		value: 'dni',
		label: 'DNI',
	},
	{
		value: 'ce',
		label: 'CE',
	},
	{
		value: 'ptp',
		label: 'PTP',
	}
];

const contentTabs = ({currency, handleChangeSelect, veremos}) =>{
	const classes = useStyles();
	const prueba = () =>{
		console.log('hola>>>>');
		// veremos()
	}
	return(
		<>
			<Grid container spacing={2} direction="column" justify="center">
				<Grid item xs={12}>
					<Grid container spacing={0}>
						<Grid item xs={4}>

							<CssTextFieldSelect 
								className={classes.select}
								variant="outlined"
								fullWidth 
								select 
								value={currency}
								onChange={handleChangeSelect}
							>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</CssTextFieldSelect>
						</Grid>
						<Grid item xs={8}>
							<CssTextFieldInput variant="outlined" fullWidth  />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<CssTextField
						fullWidth
						variant="outlined"
						placeholder="Contraseña"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<HttpsIcon style={{color:"7581D8"}}/>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="start">
									<VisibilityOffIcon style={{color:"7581D8"}}/>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<CustomButton fullWidth > Iniciar sesión</CustomButton>
				</Grid>
				<Grid item xs={12}>
					<>
						<CustomTypography name="title5"> ¿Olvidaste tu contraseña? </CustomTypography>
						<hr/>
					</>
				</Grid>
				<Grid item xs={12}>
					<CustomTypography name="title6"> ¿No tienes una cuenta? </CustomTypography>
				</Grid>
				<Grid item xs={12}>
					<CustomButton type="btnWhite" fullWidth action={prueba}> Regístrate1 </CustomButton>
				</Grid>
			</Grid>
		<DialogActions />	
	</>	
	)
}

const contentCourses = ({currency, handleChangeSelect}) =>{
	const classes = useStyles();
	return(
		<>
			<Grid container spacing={2} direction="column" justify="center">
				<Grid item xs={12}>
					<CustomTypography name="title6"><b>Selecciona una opción</b> </CustomTypography>
				</Grid>
				<Grid item xs={12}>
					<Grid container margin={10}>
						<Grid item xs={5}>
							<img src="./individual.svg" />
							<CustomTypography name="title6">Inscripción individual </CustomTypography>
						</Grid>
						<Grid item xs={5}>
							<img src="./concursar.svg" />
							<CustomTypography name="title6">Quiero concursar </CustomTypography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<CustomButton fullWidth > Continuar</CustomButton>
				</Grid>
				<Grid item xs={12}>
					<CustomButton type="btnWhite" fullWidth> Ya tengo una cuenta </CustomButton>
				</Grid>
			</Grid>
		<DialogActions />	
	</>	
	)
}


const CustomModal = ({open,  handleClose, actionText, handleRegister}) => {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const [currency, setCurrency] = useState('dni');

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
	};
	
  const handleChange = (event, newValue) => {
    setValue(newValue);
	};
	
	const veremos = () =>{
		handleRegister()
	}

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}/>
        <DialogContent dividers>
					{actionText==="courses" ? contentCourses(currency,handleChangeSelect) :(
						<>
							<CustomTabs
								value={value}
								indicatorColor="primary"
								textColor="inherit"
								onChange={handleChange}
								aria-label="disabled tabs example"
							>
								<Tab label="Soy participante" />
								<Tab label="Soy Docente" />
							</CustomTabs>
							<TabPanel value={value} index={0} dir={theme.direction}>
								<>
									<Grid container spacing={2} direction="column" justify="center">
										<Grid item xs={12}>
											<Grid container spacing={0}>
												<Grid item xs={4}>

													<CssTextFieldSelect 
														className={classes.select}
														variant="outlined"
														fullWidth 
														select 
														value={currency}
														onChange={handleChangeSelect}
													>
														{currencies.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</CssTextFieldSelect>
												</Grid>
												<Grid item xs={8}>
													<CssTextFieldInput variant="outlined" fullWidth  />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<CssTextField
												fullWidth
												variant="outlined"
												placeholder="Contraseña"
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<HttpsIcon style={{color:"7581D8"}}/>
														</InputAdornment>
													),
													endAdornment: (
														<InputAdornment position="start">
															<VisibilityOffIcon style={{color:"7581D8"}}/>
														</InputAdornment>
													),
												}}
											/>
										</Grid>
										<Grid item xs={12}>
											<CustomButton fullWidth > Iniciar sesión</CustomButton>
										</Grid>
										<Grid item xs={12}>
											<>
												<CustomTypography name="title5"> ¿Olvidaste tu contraseña? </CustomTypography>
												<hr/>
											</>
										</Grid>
										<Grid item xs={12}>
											<CustomTypography name="title6"> ¿No tienes una cuenta? </CustomTypography>
										</Grid>
										<Grid item xs={12}>
											<CustomButton type="btnWhite" fullWidth action={veremos}> Regístrate </CustomButton>
										</Grid>
									</Grid>
									<DialogActions />	
								</>	
							</TabPanel>
							<TabPanel value={value} index={1} dir={theme.direction}>
								<>
									<Grid container spacing={2} direction="column" justify="center">
										<Grid item xs={12}>
											<Grid container spacing={0}>
												<Grid item xs={4}>

													<CssTextFieldSelect 
														className={classes.select}
														variant="outlined"
														fullWidth 
														select 
														value={currency}
														onChange={handleChangeSelect}
													>
														{currencies.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</CssTextFieldSelect>
												</Grid>
												<Grid item xs={8}>
													<CssTextFieldInput variant="outlined" fullWidth  />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<CssTextField
												fullWidth
												variant="outlined"
												placeholder="Contraseña"
												InputProps={{
													startAdornment: (
														<InputAdornment position="start">
															<HttpsIcon style={{color:"7581D8"}}/>
														</InputAdornment>
													),
													endAdornment: (
														<InputAdornment position="start">
															<VisibilityOffIcon style={{color:"7581D8"}}/>
														</InputAdornment>
													),
												}}
											/>
										</Grid>
										<Grid item xs={12}>
											<CustomButton fullWidth > Iniciar sesión</CustomButton>
										</Grid>
										<Grid item xs={12}>
											<>
												<CustomTypography name="title5"> ¿Olvidaste tu contraseña? </CustomTypography>
												<hr/>
											</>
										</Grid>
										<Grid item xs={12}>
											<CustomTypography name="title6"> ¿No tienes una cuenta? </CustomTypography>
										</Grid>
										<Grid item xs={12}>
											<CustomButton type="btnWhite" fullWidth action={veremos}> Regístrate </CustomButton>
										</Grid>
									</Grid>
									<DialogActions />	
								</>	
							</TabPanel>
						</>
					)}
						
        </DialogContent>
      </Dialog>
			<style>
				{`
					hr {
						border-top: 1px dashed #DFDFDF;
					}				
				`}
			</style>
    </div>
  );
}

export {CustomModal};