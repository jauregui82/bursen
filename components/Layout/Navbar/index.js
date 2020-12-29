import { useRouter } from 'next/router'
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#556cd60a", 
    boxShadow: "none"
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
},
listItem:{
    padding:0,
    "&.Mui-selected": {
        borderBottom: 'solid',
      }
  }
});

const navLinks = [
  { title: `Ingreso al simulador`, path: `#ingreso-simulador` },
  { title: `Cómo usar este simulador`, path: `#como-usar-simulador` },
  { title: `Pregúntas frecuentes`, path: `#preguntas-frecuentes` },
  { title: `Contáctanos`, path: `#contacto` },
];

const CustomListItem = withStyles({
    primary:{
        fontSize:14
    },
    root:{
        minWidth: 'max-content',
         margin: '0 20px',
    }
  })(ListItemText);

const Header = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
      
    <AppBar position="absolute" className={classes.appbar}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map((item,i) => (
                <Link href={item.path} key={i} className={classes.linkText} >
                    <ListItem 
                        className={classes.listItem}
                        button 
                        selected={router.asPath.split("/")[1] === item.path ? true : false}
                    >
                        <CustomListItem primary={item.title}/>
                    </ListItem>
                </Link>
                // <a href={item.path} key={i} className={classes.linkText}></a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
