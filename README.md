# Coding Test - Insurance Premium Calculator
## Working Demo
Calculator is available at https://app20200820095724.azurewebsites.net/ \
Web API is available at https://sharedcalcwebapi20200820091420.azurewebsites.net/api/

## Design
Calculator consists of two applications that are deloyed separately. \
First is a .NET web api built using .NET framework 4.7.2 and Visual studio 2017. \
Second is an Angular application built with version 10.0.6 and Visual studio code. \
The web api code is here (https://github.com/S4njay/CodingTest/tree/master/PremiumCalc.WebApi) and the angular app code is here (https://github.com/S4njay/CodingTest/tree/master/PremiumCalc.UI/app).\

Unit tests can be found here: \
https://github.com/S4njay/CodingTest/blob/master/PremiumCalc.WebApi.Tests/PremiumCalcControllerTest.cs \
https://github.com/S4njay/CodingTest/blob/master/PremiumCalc.UI/app/src/app/premium-calc.service.spec.ts. \
https://github.com/S4njay/CodingTest/blob/master/PremiumCalc.UI/app/src/app/premium-calc.service.ts \

## Web Api overview
Web api consists of two api controllers - PremiumCalcController which handles the calculator form post and OccupationsController which returns a list of occupations to select.
The occupations, ratings and factors are stored in an Operations repository which is injected into both controllers via Unity IOC framework.
CORS are enabled on the web api to enable calls from the front end which is hosted separately.

## Angular application overview
The angular application uses Bootsrap CDN for styling and some custom styles.
The form is validated for required fields and there is a custom validation to check if Age is correct as per selected date of birth.
The submit button is only available if form can be submitted. Occupation change triggers re calculation if all other fields are valid.


