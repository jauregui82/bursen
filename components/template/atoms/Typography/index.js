import { makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles({
    title1:{
        fontSize: 48,
        color: "#ffff",
        lineHeight: 1.2,
    },
    title2:{
        fontSize: 24,
        color: "#313342",
        textAlign: 'center',
        padding: "2rem"
    },
    title3:{
        fontSize: 24,
        color: "#313342",
        textAlign: 'left',
        paddingBottom: "26px"
    },
    title4:{
        fontSize: 14,
        color: "#313342",
        textAlign: "left",
        paddingBottom: "18px"
    },
    title5:{
        fontSize: 16,
        color: '#7581D8',
        textAlign: "center",
        paddingBottom: "18px"
    },
    title6:{
        fontSize: 16,
        color: '#313342',
        textAlign: "center",
        paddingBottom: "18px"
    }
  });
const CustomTypography = ({name, children}) => {
  const classes = useStyles();    
  return (
    <>
       <Typography className={classes[name]}>{children}</Typography>
    </>
    )
}

export default CustomTypography