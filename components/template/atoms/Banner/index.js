import { Grid } from "@material-ui/core"
import CustomButton from "../CustomButton"
import { CustomTypography } from "../../../template"

const CustonBanner = () => {
  return (
    <>
    <div className="content-section-1">
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{height:"100%"}}
        >
            <Grid item xs={12} md={3}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid item>
                        <CustomTypography name="title1" > Bienvenido al simulador de <strong>BURSEN</strong></CustomTypography>
                    </Grid>
                    <Grid item>
                        <CustomButton>Iniciar sesión </CustomButton>
                    </Grid>
                    <Grid item>
                        <CustomButton type="btnWhite">Ver consursos </CustomButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={9}>
                <img className="image" src="/imgPc.svg" alt="me"/>
            </Grid>
        </Grid>
    </div>
        {/* <img className="image" src="/banner.svg" alt="me"/> */}

        <style jsx>
            {`
                img {
                    flex-grow: 1;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    position: relative;
                    left: 0;
                }
                div {
                    min-height: 820px;
                    background-size:cover;
                    background-image:url('/banner.svg');
                }
                .content-section-1 {
                    padding: 0 150px;
                }

            `}
        </style>
    </>
    )
}

export default CustonBanner