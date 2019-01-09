import React from 'react';
import { Translate } from 'react-i18nify';
import { Alert } from 'reactstrap';
//import { EmissionResultField } from "./emission-result.interface";
//import { EmissionResultField } from "./emission-result-fields.type";
//import { PartialResultCalculatorMap } from "./total-emission-results";
//import { calculateEmissionResultsWithPartials }  from '../../emission-calculator';
//import { emissionResult } from "../../emission-chart";

//<EmissionChartContainer />

------------------------------------------------
//napisz tylko ze jesli powyz. 20 to wyswietlaj alert
// jak wyciagnac z tego sam wynik
        <EmissionChartContainer />
// skad brac dane, sume emisji i jak polaczyc je z alertem wyswietlania



import const EmissionResultTotalField: EmissionResultField = 'totalAnnualEmission';
------------------------------------------------


export const EmissionAlertBadge = () => (
 <div>
    <Alert color="danger">
        <Translate value="emissions.yourEmissionsAreTooHigh" />
    </Alert>
    <Alert color="warning">
        <Translate value="emissions.yourEmissionsAreStandard" />
    </Alert>
    <Alert color="success">
                <Translate value="emissions.yourEmissionsAreLow" />
    </Alert> 
 </div>
);
