import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export function SimpleAccordion({ 
  children,
  summary, 
  description, 
  link = '#', 
  buttonText = 'Use service', 
  noPadding 
}) {

  return (
      <Accordion 
        sx={{ 
            padding: noPadding ? '' : '15px 0',
            
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{ 
                fontWeight: 'bold',
                fontSize: '20px'
                
            }}
           >
                { summary }
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          { description }            
          </Typography>

          { children && children }
          
          <Link to={link}>
            <button className="btn btn-primary mt-5">
              { buttonText }
            </button>
          </Link>
        </AccordionDetails>
      </Accordion>
      
  );
}
