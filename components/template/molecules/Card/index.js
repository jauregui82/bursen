import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "100%",
      maxWidth: 288,
      minHeight: 275,
      background: '#FFFFFF',
boxShadow: '0px 4px 30px rgba(134, 138, 169, 0.12)',
borderRadius: 10,
    },
    // cardArea: {
    //     minHeight
    // }
  });
const CustomCard = ({linkImg, text}) => {
  const classes = useStyles();    
  return (
    <>
        <div style={{display:"flex", justifyContent: "center"}}>
            <Card className={classes.root}>
                <CardContent style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{display:"flex", flexDirection: "column", alignItems: "center", minHeight: 223, justifyContent: "space-around"}}>
                        <div>
                            <img src={linkImg} />
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                            {text}
                        </Typography>
                    </div>
                </CardContent>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
            </Card>
            {/* <img className="image" src="/banner.svg" alt="me"/> */}
        </div>
        
        <style jsx>
            {`
                img {
                    width: 64;
                    height: 64;
                }
               
                .content-section-1 {

                }
                
            `}
        </style>
    </>
    )
}

export {CustomCard}