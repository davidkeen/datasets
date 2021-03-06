co2Emissions = massCO2PerDistancePerPassenger * distance * passengers;
ch4Emissions = massCH4PerDistancePerPassenger * distance * passengers;
n2oEmissions = massN2OPerDistancePerPassenger * distance * passengers;
directCO2eEmissions = massDirectCO2ePerDistancePerPassenger * distance * passengers;
indirectCO2eEmissions = massIndirectCO2ePerDistancePerPassenger * distance * passengers;
lifeCycleCO2eEmissions = massTotalCO2ePerDistancePerPassenger * distance * passengers;

returnValues.putValue('CO2', 'kg',null, co2Emissions);
returnValues.putValue('methaneCO2e', 'kg',null, ch4Emissions);
returnValues.putValue('nitrousOxideCO2e', 'kg',null, n2oEmissions);
returnValues.putValue('totalDirectCO2e', 'kg',null, directCO2eEmissions);
returnValues.putValue('indirectCO2e', 'kg',null, indirectCO2eEmissions);
returnValues.putValue('lifeCycleCO2e', 'kg',null, lifeCycleCO2eEmissions);
returnValues.setDefaultType('totalDirectCO2e');

returnValues.addNote('comment', 'This methodology provides emissions directly in terms of CO2e. No global warming potentials are applied in this calculation');
