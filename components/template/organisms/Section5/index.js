import { Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import GoogleMapView from "../../../GoogleMapView";
import { CustomTypography } from "../../atoms";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  contacto: {
		paddingTop: '2rem',
	}
}));


	
const Section5 = () =>{
	const classes = useStyles();
    return(
        <div id="contacto">
            <Grid container>
                <Grid item xs={12} md={4}  className={classes.contacto}>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={8}>
                            <CustomTypography name="title3">Contáctanos</CustomTypography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <MailOutlineIcon/>
                                </Grid>
                                <Grid item>
                                    <CustomTypography name="title4">infobursen@bvl.com.pe</CustomTypography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <CallIcon/>
                                </Grid>
                                <Grid item>
                                    <CustomTypography name="title4">619-3358  |  619-3359</CustomTypography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <RoomIcon/>
                                </Grid>
                                <Grid item>
                                    <CustomTypography name="title4">Pasaje Acuña 106, Cercado de Lima</CustomTypography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={8}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <img src="./ig.svg" width="42" height="42"/>
                                </Grid>
                                <Grid item>
                                    <img src="./yt.svg" width="42" height="42"/>
                                </Grid>
                                <Grid item>
                                    <img src="./in.svg" width="42" height="42"/>
                                </Grid>
                                <Grid item>
                                    <img src="./fb.svg" width="42" height="42"/>
                                </Grid>
                                <Grid item>
                                    <img src="./tw.svg" width="42" height="42"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <GoogleMapView/>
                </Grid>
            </Grid>
            <style jsx>
							{`
                div {
									padding: 0 0 0 3rem;
									background-color: #EEEFF9;
                }
                
							`}
            </style>
        </div>
    )
}

export default Section5;