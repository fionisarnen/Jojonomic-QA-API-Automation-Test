# Jojonomic-QA-API-Automation-Test

I create 2 test suite which contain:
1. Normal testing for the given problem 1 and 2 according to QA Tech Exercise.docx
note: due to limitation subscription, I can't access -> GET /forecast/3hourly?postal_code={postal_code} 
Issue discussed in: https://www.weatherbit.io/support/post/lost-acces-to-3-hourly-forecast
Therefore I create another test case for hourly forecast for request GET /forecast/hourly?postal_code={postal_code}

2. Data driven testing for getting repsonse API with external data case from .excel
This test suite contain 2 test case for :
- GET /current?lat={lat}&lon={lon} 
- GET /forecast/hourly?postal_code={postal_code}



* Run Automation Test
You can run it in each test suites (normal testing and data driven testing)
Data files: An excel file contain of Latitude, longitude and postal code for several cities
