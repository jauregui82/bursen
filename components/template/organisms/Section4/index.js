import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { CustomAccordion } from "../../../template";
import { CustomTypography } from "../../atoms";

const dataAccordion = [
    {id:1, title: "¿Cómo me afilio al simulador de la Bolsa de Valores?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
    {id:2, title: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
    {id:3, title: "¿incididunt ut labore et dolore magna aliqua?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
    {id:4, title: "¿Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
    {id:5, title: "¿Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
    {id:6, title: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
]

const Section4 = () =>{

    return(
        <div id="preguntas-frecuentes">
            <Grid container>
                <Grid item xs={12} md={4}>
                    <CustomTypography name="title2">Preguntas <br/>frecuentes</CustomTypography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomAccordion dataAccordion={dataAccordion}/>            
                </Grid>
            </Grid>
            <style jsx>
                {`
                div {
                    padding: 2rem 0
                }
                
                `}
            </style>
        </div>
    )
}

export default Section4;