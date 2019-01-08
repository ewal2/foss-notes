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



// skad brac dane, sume emisji i jak polaczyc je z alertem wyswietlania



import const EmissionResultTotalField: EmissionResultField = 'totalAnnualEmission';
----------------------------------------

First version: 

import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';

function DangerEmissions(props) {
   return 
    <Alert color="danger">
       <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>  
}

function StandardEmissions(props) {
   return 
   <Alert color="warning">
        <Translate value="emissions.yourEmissionsAreStandard" />
    </Alert>  
}

function LowEmissions(props) {
   return 
   <Alert color="success">
        <Translate value="emissions.yourEmissionsAreLow" />
    </Alert> 
}

function EmissionsLevel(props){
    export const EmissionAlertBadge = props.EmissionAlertBadge;
    if(totalAnnualEmission > 20){
        return < DangerEmissions />
    }
    if(totalAnnualEmission => 10 ){
        return < StandardEmissions />
    } else{
        return < LowEmissions />
    }
}
);
