Beginning:

import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';
//import { EmissionResultField } from "./emission-result.interface";
//import { EmissionResultField } from "./emission-result-fields.type";

export const EmissionAlertBadge = () => (
    <Alert color="warning">
        <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>
);


//napisz tylko ze jesli powyz. 20 to wyswietlaj alert
// jak wyciagnac z tego sam wynik
        <EmissionChartContainer />
// skad brac dane, sume emisji i jak polaczyc je z alertem wyswietlania



import const EmissionResultTotalField: EmissionResultField = 'totalAnnualEmission';
----------------------------------------

First version: 
const Danger = (props) => {
   return(
       <div className = "Danger">
           <Alert color="danger">
                <Translate value="emissions.yourEmissionsAreTooHigh" />
           </Alert> 
       </div>
       ); 
};

const Warning = (props) => {
   return(
       <div className = "Warning">
           <Alert color="warning">
                <Translate value="emissions.yourEmissionsAreStandard" />
           </Alert> 
       </div>
       ); 
};

const Low = (props) => {
   return(
       <div className = "Low">
           <Alert color="success">
                <Translate value="emissions.yourEmissionsAreLow" />
           </Alert> 
       </div>
       ); 
};


const totalAnnualEmission = () => (
    <Alert color="warning">
        <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>
);

export const EmissionAlertBadge = (props) => (
        
        (totalAnnualEmission > 20){
            return < Danger />
        } if (totalAnnualEmission => 10) {
            < Warning />
        } else{
            < Low />
        }
        
        
)
