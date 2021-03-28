# Jojonomic-QA-API-Automation-Test

## Clone project to your local Git on Katalon with this steps:


1. Create new project. Enabling Git integration Enable Git Integration: To access all Git features, you need to enable Git Integration first. The option is available in the following settings: Katalon Studio > Preferences > Katalon > Git. Once enabled, you can start using Git at Katalon Studio's main toolbar. Now, the Git integration feature should be enabled. We are ready to use Git from Katalon Studio.
2. Clone a Katalon Studio project from a Git repository After enabling Git Integration, you can clone an existing Git repository into a newly-created directory on the local machine. On the main toolbar, select the Git icon > Clone Project. Enter this repository link Enter your github credential 
3. Full tutorial on: https://docs.katalon.com/katalon-studio/docs/git-integration.html#clone-a-katalon-studio-project-from-a-git-repository

## Information: I create 2 test suites which contain:
1. Normal testing for the given problem 1 and 2 according to QA Tech Exercise.docx
note: due to limitation subscription, I can't access -> GET /forecast/3hourly?postal_code={postal_code}. Issue discussed in: https://www.weatherbit.io/support/post/lost-acces-to-3-hourly-forecast. Therefore I create another test case for hourly forecast for request GET /forecast/hourly?postal_code={postal_code}

2. Data driven testing for API performance testing with external data (.excel). This test suite contain 2 test case for: GET /current?lat={lat}&lon={lon} and GET /forecast/hourly?postal_code={postal_code}

* Run Automation Test. You can run it in each test suites (normal testing and data driven testing)
* Data files: An excel file contain of Latitude, longitude and postal code for several cities
* API key already attach to the url if you have problem or API key not active feel free to contact me
