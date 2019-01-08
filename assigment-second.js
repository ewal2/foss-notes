import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';
//import { EmissionResultField } from "./emission-result.interface";
//import { EmissionResultField } from "./emission-result-fields.type";
//import { PartialResultCalculatorMap } from "./total-emission-results";
import { totalAnnualEmission }  from './partial-emission-results';

const danger = () => {
   return(
       <div className = "Danger">
           <Alert color="danger">
                <Translate value="emissions.yourEmissionsAreTooHigh" />
           </Alert> 
       </div>
       ); 
};

const warning = () => {
   return(
       <div className = "Warning">
           <Alert color="warning">
                <Translate value="emissions.yourEmissionsAreStandard" />
           </Alert> 
       </div>
       ); 
};

const low = () => {
   return(
       <div className = "Low">
           <Alert color="success">
                <Translate value="emissions.yourEmissionsAreLow" />
           </Alert> 
       </div>
       ); 
};


export const EmissionAlertBadge = () => (
    
if(totalAnnualEmission > 20){
    return danger;
} if (totalAnnualEmission => 10){
    return warning;
} else{
    return low
}
 
);


"Failed to compile
./src/shared/components/EmissionAlertBadge.tsx
SyntaxError: /home/ubuntu/workspace/Fossilminator/src/shared/components/EmissionAlertBadge.tsx: Unexpected token (42:0)

  40 | export const EmissionAlertBadge = () => (
  41 |     
> 42 | if(totalAnnualEmission > 20){
     | ^
  43 |     return danger;
  44 | } if (totalAnnualEmission => 10){
  45 |     return warning;"
