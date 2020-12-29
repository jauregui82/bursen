import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { palett } from "../../../../styles/theme";
import { CustomTypography, CustomCard } from "../../../template";



const Section2 = () =>{

    return(
        <>
            <div id="ingreso-simulador" style={{padding: "5rem 0", boxShadow: "0px -3px 0px #fff"}}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    
                >
                    <Grid item xs={12}>
                        <CustomTypography name="title2">¿Qué podrás realizar en este simulador?</CustomTypography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    
                >
                    <Grid item xs={12} sm={2}>
                        <CustomCard linkImg="./card3.svg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm." />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CustomCard linkImg="./card2.svg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm." />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <CustomCard linkImg="./card1.svg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm." />
                    </Grid>
                </Grid>
            </div>
            <style jsx>
                {`
            
                `}
            </style>
        </>
    )
}
Section2.propTypes = {
    action: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
        "primary",
        "btnWhite"
      ])
  };

export default Section2;