import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0,
    padding: '25px 0',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


const CustomAccordion = ({dataAccordion})=> {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {dataAccordion.length && dataAccordion.map(item=>
            <Accordion key={item.id} expanded={expanded === `panel-${item.id}`} onChange={handleChange(`panel-${item.id}`)} style={{boxShadow: "none"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon color="error"/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography className={classes.heading}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {item.text}
                </Typography>
                </AccordionDetails>
            </Accordion>
        )}
    </div>
  );
}

export {CustomAccordion};