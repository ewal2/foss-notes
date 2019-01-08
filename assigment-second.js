import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';
//import { EmissionResultField } from "./emission-result.interface";
//import { EmissionResultField } from "./emission-result-fields.type";
//import { PartialResultCalculatorMap } from "./total-emission-results";
import { totalAnnualEmission }  from '../../emission-calculator';

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
    
(totalAnnualEmission > 20) ? "Danger" : "Warning" 

);

/home/ubuntu/workspace/Fossilminator/src/core/containers/ResultViewContainer.tsx
Type error: JSX element type '"Danger" | "Warning"' is not a constructor function for JSX elements.
  Type '"Danger"' is not assignable to type 'Element'.  TS2605

    14 |           <div className="row d-flex justify-content-center">
    15 |                 <div className="col-12 col-sm-4">
  > 16 |                     <EmissionAlertBadge />
       |                     ^
    17 |                 </div>
    18 |             <div className="row">
    19 |                 <div className="col-12 col-md-6">
