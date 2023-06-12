# Weather Application
Final project for Web Services course made by PI21E student group from
Vilniaus Kolegija / University of Applied Sciences at the Faculty of Electronics and Informatics.

## Table Of Contents
<!-- TOC -->
* [Weather Application](#weather-application)
  * [Table Of Contents](#table-of-contents)
  * [Subject Guidelines and Requirements](#subject-guidelines-and-requirements)
    * [General](#general)
    * [Guidelines](#guidelines)
    * [Requirements](#requirements)
  * [Scope](#scope)
  * [Students and Roles](#students-and-roles)
  * [Weather App Trello Board](#weather-app-trello-board)
  * [Project Setup](#project-setup)
    * [Prerequisites:](#prerequisites)
    * [Building The Project](#building-the-project)
      * [Server:](#server)
      * [Client:](#client)
    * [Additional Information:](#additional-information)
  * [Design and Mockups](#design-and-mockups)
    * [Front Page](#front-page)
    * [X-Day/X-Month View](#x-dayx-month-view)
    * [User Login/Registration](#user-loginregistration)
    * [Units Customization](#units-customization)
    * [Notification Set-Up](#notification-set-up)
  * [Final Result](#final-result)
    * [Snippet of the Main Page](#snippet-of-the-main-page)
    * [Snippet of X-Day/X-Month View](#snippet-of-x-dayx-month-view)
    * [Using the Map](#using-the-map)
    * [Switching the Units](#switching-the-units)
  * [Completion Matrix](#completion-matrix)
  * [Weather Application API Features](#weather-application-api-features)
    * [Core API](#core-api)
    * [Events](#events)
    * [Users](#users)
    * [Favorites](#favorites)
    * [Subscriptions](#subscriptions)
    * [Criteria](#criteria)
  * [Project File Structure](#project-file-structure)
  * [Project Stack](#project-stack)
    * [Server-Side](#server-side)
    * [Client-Side](#client-side)
<!-- TOC -->

## Subject Guidelines and Requirements
### General
In teams of 2-5 students create RESTful Web service and explore its functionality with web services testing
tools, like SoapUI or Postman applications. Any platform could be used: Java, .NET, NodeJS, Python, Ruby,
etc. Other types of API’s (like Websocket or GraphQL) are also considerable.
### Guidelines
1. Assign different roles to each team member. The roles could be: developer, QA (Quality assurance
   specialist), analyst etc. Better if each member will have different roles (e.g. developer + QA).
2. Use online team board like Trello to define tasks for each member.
3. Create new project in GitHub. Use different branches to develop and merge final code to “master”
   branch. Each member should commit his own code.
4. Use any DBMS to create and manage your database. Create your data structure in database.
5. Create fully functional RESTful Web Service: cacheable, stateless, conforming to level 4 of
   Richardson Maturity Model.
6. Using Swagger Editor, explore your API, send the requests, and observe the responses.
7. Using Postman tool send the requests to created and running RESTful application and
   observe the responses.
8. Use any front-end if needed. Any front-end development framework (like React, Angular, Vue)
   could be used.
9. Create a set of automated API tests for Acceptance testing.
### Requirements
1. The entire code should be properly formatted.
2. The package/class/field/method names should conform to the naming conventions.
3. The Unit tests for all classes should present.
4. The entire code should be properly documented and JavaDoc generated.
5. The entire code should conform to S.O.L.I.D principles.

## Scope
1. Location and Map Integration
   1. Utilize the Google Maps API to allow users to search for weather information based on location (https://developers.google.com/maps).
   2. Implement IP Geo Location API to automatically detect and display weather details based on the user's current location. (https://rapidapi.com/natkapral/api/ip-geo-location).
   3. Provide interactive maps to visualize weather patterns, forecasts, and satellite imagery.
   4. Integrate Google Maps API to embed interactive maps within the app (display an actual live map provided by Google Maps).
   5. Weather data will be obtained from the WeatherAPI.com API, which will be overlaid over the Google Maps embedded map.
   6. View weather patterns, forecasts, and satellite imagery that will be overlaid on the maps.
   7. Make the maps zoomable and pan-able.
   8. Switch between different map types (satellite, terrain).
   9. View real-time weather conditions (temperature, wind speed, humidity).
   10. Different weather conditions can be displayed in different colors.
   11. Toggle between different forecast timeframes (1-hour, 1-day intervals).
2. Weather Data
   1. Integrate with the WeatherAPI.com API to fetch accurate and up-to-date weather data for various locations (https://rapidapi.com/weatherapi/api/weatherapi-com/).
   2. Display current weather conditions, temperature, humidity, wind speed, and precipitation information.
   3. Provide detailed forecasts including hourly and daily forecasts, allowing users to plan ahead.
3. Favorite List
   1. Enable users to create a personalized list of favorite addresses or locations for quick access to weather information.
   2. Allow users to save frequently visited places, such as home or work, to easily check weather updates for these locations.
4. Subscription List
   1. Implement a subscription feature where users can create a list of addresses or locations, they want to monitor for specific weather conditions.
   2. Users can set criteria such as temperature thresholds, precipitation levels, or weather alerts to receive notifications when the specified conditions are met.
   3. Implement real-time updates and push notifications to inform users about weather changes in their subscribed locations.
5. User Preferences and Customization
   1. Provide options for users to customize their weather preferences, such as units of measurement (Celsius/Fahrenheit).

## Students and Roles

|     Student      |                                     Role                                                                       |
|:----------------:|:--------------------------------------------------------------------------------------------------------------:|
| Sebastian Termen | Project Lead / Manager / Scrum Master / Product Owner / Full-stack Developer / GOD / Git Workflow Grand Master |
|  Olha Sharapova  |              User Experience / User Interface Designer (UX/UI)                                                 |
| Daria Svyrydenko |                            Quality Assurance (QA)                                                              |
|  Ihor Halytskyi  |                             Front-end Developer                                                                |
|  Nazar Lavkart   |                   Back-end Developer / Database Developer                                                      |
|  Vitold Skuder   |                   Back-end Developer / Database Developer                                                      |

## [Weather App Trello Board](https://trello.com/b/mIbXPsM4)

## Project Setup

### Prerequisites:
1. [Java Development Kit (JDK) 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) - older versions might work
2. SQL Database - e.g. [MySQL](https://www.mysql.com/downloads/)
3. Database Setup - e.g. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
4. Ports availability - port 8080 (SwaggerAPI), port 8081 (REST service), port 1234 (Client)

### Building The Project
#### Server:
1. Open project in any Java supported IDE - e.g. [IntelliJ](https://www.jetbrains.com/idea/)
2. Create a database schema named "weather_schema"
3. Configure `weather-app/server/src/main/resources/hibernate.cfg.xml` if needed
4. Launch the application by running the WeatherApplicationServer.Main class
5. Wait until all Hibernate messages are logged in the console
6. Access the Swagger API documentation at http://localhost:8080/swagger-ui/index.html

#### Client:
1. Install [Node.JS 18.16.0+](https://nodejs.org/en/download)
2. Install [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. Make sure server is running
4. In terminal navigate to `/weather-app/client/src`
5. Execute `$npm install`
6. Execute `$npm start`
7. Access webpage at http://localhost:1234/

### Additional Information:
1. Project has been mostly tested on Windows 10/11, other operating systems might be supported
2. Internet connection is required to download dependencies for both Server and Client
3. If using IntelliJ, ensure that you have configured your project correctly. Make sure the project SDK is set to the JDK version you have installed.
4. Client has been tested on Firefox and Chrome browsers, other browsers might be supported
## Design and Mockups

### Front Page

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-01.png)

### X-Day/X-Month View

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-02.png)

### User Login/Registration

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-03.png)

### Units Customization

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-04.png)

### Notification Set-Up

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-05.png)

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/design/Weather-06.png)

## Final Result

### Snippet of the Main Page

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/demo/weather_app_main.png)

### Snippet of X-Day/X-Month View

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/demo/weather_app_second_page.png)

### Using the Map

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/demo/map_usage.gif)

### Switching the Units

![](https://github.com/Durengo/Web-Services-Final-Project/blob/main/docs/demo/details_units.gif)

## Completion Matrix

| Requirement                                                | Implemented | Additional Note                                                                                                                                                                                                                          |
|------------------------------------------------------------|:-----------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Location and Map Integration**                           | **✓ ~90%**  | Overall very high satisfaction rate for requirement completion.                                                                                                                                                                          |
| 1. Utilize the Google Maps API                             |      ✓      |                                                                                                                                                                                                                                          |
| 2. Implement IP Geo Location API                           |      ✓      |                                                                                                                                                                                                                                          |
| 3. Provide interactive maps                                |      ✓      |                                                                                                                                                                                                                                          |
| 4. Integrate Google Maps API                               |      ✓      |                                                                                                                                                                                                                                          |
| 5. Obtain weather data from WeatherAPI.com API             |      ✓      |                                                                                                                                                                                                                                          |
| 6. View weather patterns, forecasts, and satellite imagery |   ✗ ~75%    | Weather patterns are not displayed, but the general vicinity of the area where the information is gathered from is shown. There was not enough time to implement this.                                                                   |
| 7. Make maps zoomable and pan-able                         |      ✓      |                                                                                                                                                                                                                                          |
| 8. Switch between map types                                |      ✓      |                                                                                                                                                                                                                                          |
| 9. View real-time weather conditions                       |      ✓      |                                                                                                                                                                                                                                          |
| 10. Display weather conditions with colors                 |      x      | Since weather patterns are not displayed it's not feasible to implement this.                                                                                                                                                            |
| 11. Toggle between forecast timeframes                     |   ✗ ~80%    | The logic is within the front-end, but there was not enough time to implement this feature. Also, the WeatherAPI basic subscription only offers a maximum amount of 3 days to be viewed, so there's not much point in implementing this. |
| **Weather Data**                                           | **✓ 100%**  | The core functionalities are implemented in the back-end as well as the front-end. Excellent satisfaction rate for requirement completion.                                                                                               |
| 1. Integrate with WeatherAPI.com API                       |      ✓      |                                                                                                                                                                                                                                          |
| 2. Display current weather conditions                      |      ✓      |                                                                                                                                                                                                                                          |
| 3. Provide detailed forecasts                              |      ✓      |                                                                                                                                                                                                                                          |
| **Favorite List**                                          | **✗ ~30%**  | Overall, not great and not terrible satisfaction rate for requirement. Although regarding the fact this feature is completely absent from the front-end more % are deduced.                                                              |
| 1. Enable users to create a personalized list              |   ✗ ~50%    | Implemented in the back-end. Not enough time to implement for front-end.                                                                                                                                                                 |
| 2. Allow users to save frequently visited places           |   ✗ ~50%    | Implemented in the back-end. Not enough time to implement for front-end.                                                                                                                                                                 |
| **Subscription List**                                      | **✗ ~25%**  | Overall, not great and not terrible satisfaction rate for requirement. Although regarding the fact this feature is completely absent from the front-end more % are deduced.                                                              |
| 1. Implement a subscription feature                        |   ✗ ~50%    | Database and back-end fully implemented. Not enough time to implement for front-end.                                                                                                                                                     |
| 2. Set criteria for notifications                          |   ✗ ~50%    | Database and back-end fully implemented. Not enough time to implement for front-end.                                                                                                                                                     |
| 3. Implement real-time updates and push notifications      |   ✗ ~35%    | Implemented in the back-end. Not enough time to implement for front-end. These features wasted quite a bit of time - first Firebase was used, but that did not work so we switched to ActiveMQ.                                          |
| **User Preferences and Customization**                     | **✓ 100%**  | An excellent satisfaction rate for requirements completion. Overall, quite an easy feature to implement, especially when converted values are provided by the used APIs.                                                                 |
| 1. Provide options for customization                       |      ✓      |                                                                                                                                                                                                                                          |

## Weather Application API Features
### Core API
<br><b>GET /ipinfo?ip=<span style="color:green">IP_HERE</b> - get info on IP Address</br>
<br><b>GET /coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span></b> - get current weather info using latitude and longitude. Both default to 0.0</br>
<br><b>GET /<span style="color:green">CITY_HERE</span></b> - get current weather info using city name</br>
<br><b>GET /forecast/coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span>&days=<span style="color:green">DAYS_NUM</span></b> - get forecast info using latitude and longitude for DAYS_NUM days forward. Lat and lot default is 0.0, DAYS_NUM is 1. Maximum for DAYS_NUM is 3 (API limit)</br>
<br><b>GET /forecast/<span style="color:green">CITY_NAME</span>?days=<span style="color:green">DAYS_NUM</span></b> - get forecast info using city name for DAYS_NUM days forward. Default for DAYS_NUM is 1. Maximum for DAYS_NUM is 3 (API limit)</br>
<br><b>GET /history/coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span>&start=<span style="color:green">START_DATE_OLD</span>&end=<span style="color:green">END_DATE_YOUNG</span></b> - get weather history using latitude and longitude for a period from START_DATE_OLD until END_DATE_YOUNG. Default for latitude and longitute is 0.0, while for START_DATE_OLD and END_DATE_YOUNG is 2023-5-24 and 2023-5-26, respectively. The format for dates is <b>YYYY-MM-DD</b>. The maximum amount of days between both dates is 7 or only last 7 days is possible</br>
<br><b>GET /history/<span style="color:green">CITY_NAME</span>?start=<span style="color:green">START_DATE_OLD</span>&end=<span style="color:green">END_DATE_YOUNG</span></b> - get weather history using city name for a period from START_DATE_OLD until END_DATE_YOUNG. Default for START_DATE_OLD and END_DATE_YOUNG is 2023-5-24 and 2023-5-26, respectively. The format for dates is <b>YYYY-MM-DD</b>. The maximum amount of days between both dates is 7 or only last 7 days is possible</br>
<br><b>GET /radius/<span style="color:green">CITY_NAME</span></b> - get area and radius in kilometers and miles of city</br>

### Events
<br><b>/queue/{ID}</b> - get all the messages enqueued for the provided subscription address ID</br>

    { 
        "messages": ["X", "Y", "Z"] 
    }

<h2><i>THE FOLLOWING REST ENDPOINTS WILL RETURN MESSAGES IN THIS FORMAT</i></h2>

    {
        "status": STATUS_CODE,
        "message": "MESSAGE",
        "data": "DATA"
    }

POST should return ID of created object in message field

### Users

<br>USERS CONTAINS THE FOLLOWING FIELDS:</br>
- <b>id</b>
- <b>username</b>
- <b>password</b>
- <b>mail</b>
- <b>subscriptions</b>
- <b>favorites</b>

<br><b>POST /users</b> - create a new user. Requires a JSON body with the following fields:</br>
- <b>username</b>
- <b>password</b>
- <b>mail</b>.

<br><b>GET /users/ID_VALUE</b> - get user info by ID_VALUE</br>

<br><b>GET /users/username?username=USERNAME_VALUE</b> - get user info by USERNAME_VALUE</br>

<br><b>GET /users</b> - get all users info</br>

<br><b>PUT /users/ID_VALUE</b> - update user info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:</br>
- <b>username</b>
- <b>password</b>
- <b>mail</b>.

<br><b>PUT /users/username?username=USERNAME_VALUE</b> - update user info by USERNAME_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:</br>
- <b>username</b>
- <b>password</b>
- <b>mail</b>.

<br><b>DELETE /users/ID_VALUE</b> - delete user by ID_VALUE</br>

<br><b>DELETE /users/username?username=USERNAME_VALUE</b> - delete user by USERNAME_VALUE</br>

<br><b>DELETE /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - unsubscribe from an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id</br>

<br><b>DELETE /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - delete a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id</br>

<br><b>PUT /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - subscribe to an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id</br>

<br><b>PUT /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - add a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id</br>

<br><b>DELETE /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - unsubscribe from an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id</br>

<br><b>DELETE /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - delete a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id</br>

### Favorites

<br><b>FAVORITES CONTAINS THE FOLLOWING FIELDS:</b></br>
- <b>id</b>
- <b>address</b>
- <b>type</b>
- <b>user</b>

<br><b>POST /favorites</b> - create a new favorite address. Requires a JSON body with the following fields:</br>
- <b>address</b>
- <b>type</b>.

<br><b>GET /favorites/ID_VALUE</b> - get favorite address info by ID_VALUE</br>

<br><b>GET /favorites</b> - get all favorite addresses info</br>

<br><b>DELETE /favorites/ID_VALUE</b> - delete favorite address by ID_VALUE</br>

<br><b>PUT /favorites/ID_VALUE</b> - update favorite address info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:</br>
- <b>address</b>
- <b>type</b>

<br><b>DELETE /favorites/ID_VALUE</b> - delete favorite address by ID_VALUE</br>

### Subscriptions

<br><b>SUBSCRIPTIONS CONTAINS THE FOLLOWING FIELDS:</b>
- <b>id</b>
- <b>address</b>
- <b>criterias</b>
- <b>user</b>

<br><b>POST /subscriptions</b> - create a new subscription. Requires a JSON body with the following fields:</br>
- <b>address</b>

<br><b>GET /subscriptions/ID_VALUE</b> - get subscription info by ID_VALUE</br>

<br><b>GET /subscriptions</b> - get all subscriptions info</br>

<br><b>DELETE /subscriptions/ID_VALUE</b> - delete subscription by ID_VALUE</br>

<br><b>PUT /subscriptions/ID_VALUE</b> - update subscription info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:</br>
- <b>address</b>

<br><b>DELETE /subscriptions/ID_VALUE/CRITERIA_ID</b> - delete a criteria from a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id</br>

<br><b>PUT /subscriptions/ID_VALUE/CRITERIA_ID</b> - add a criteria to a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id</br>

<br><b>DELETE /subscriptions/ID_VALUE/CRITERIA_ID</b> - delete a criteria from a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id</br>

### Criteria

<br><b>CRITERIA CONTAINS THE FOLLOWING FIELDS:</b></br>
- <b>id</b>
- <b>less_equal_more</b>
- <b>criteriaName</b>
- <b>criteriaValue</b>
- <b>subscription_address</b>

<br><b>POST /criteria</b> - create a new criteria. Requires a JSON body with the following fields:</br>
- <b>less_equal_more</b> - "LESS", "EQUAL" or "MORE"
- <b>criteriaName</b> - "temp_c", etc. the fields from the weather api that need checking
- <b>criteriaValue</b> - value dependant on criteria. For example, if criteriaName is "temp_c", then criteriaValue is a float number

<br><b>GET /criteria/ID_VALUE</b> - get criteria info by ID_VALUE</br>

<br><b>GET /criteria</b> - get all criterias info</br>

<br><b>DELETE /criteria/ID_VALUE</b> - delete criteria by ID_VALUE</br>

<br><b>PUT /criteria/ID_VALUE</b> - update criteria info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:</br>
- <b>less_equal_more</b> - "LESS", "EQUAL" or "MORE"
- <b>criteriaName</b> - "temp_c", etc. the fields from the weather api that need checking
- <b>criteriaValue</b> - value dependant on criteria. For example, if criteriaName is "temp_c", then criteriaValue is a float number

## Project File Structure

`/weather-app` - all source files are located here.<br>
`/weather-app/client` - all front-end source files including design files<br>
`/weather-app/client/design` - all front-end design files<br>
`/weather-app/client/src` - npm build system files (do not delete .parcelrc)<br>
`/weather-app/client/src/components` - all react components (.jsx and .css)<br>
`/weather-app/client/src/css` - general purpose .css<br>
`/weather-app/client/src/env` - environmental settings stored in the env.js script like the URL of the back-end service<br>
`/weather-app/client/src/js` - all scripts<br>
`/weather-app/client/src/public` - the main index file<br>
`/weather-app/client/src/redux` - all redux states (actions, reducers, initial states, stores)<br>
`/weather-app/client/src/static` - all additional resources like images<br>
`/weather-app/server` - all back-end source files as well as maven build system files<br>
`/weather-app/server/src/main/resources` - project configuration files (application.properties for Spring Boot and hibernate.cfg.xml for hibernate database)<br>
`/weather-app/server/src/main/java/lt/viko/eif/pi21e/weather` - back-end logic<br>
`/weather-app/server/src/test` - back-end tests<br>

## Project Stack

### Server-Side
|                                                           Package                                                           |                               Info                                |
|:---------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------:|
|                  [JSON.simple](https://mvnrepository.com/artifact/com.googlecode.json-simple/json-simple)                   |                                                                   |
|                          [okhttp](https://mvnrepository.com/artifact/com.squareup.okhttp3/okhttp)                           |                                                                   |
|                       [cucumber-junit](https://mvnrepository.com/artifact/io.cucumber/cucumber-junit)                       |                                                                   |
|                                   [junit](https://mvnrepository.com/artifact/junit/junit)                                   |                                                                   |
|                       [auzre-ai-openai](https://mvnrepository.com/artifact/com.azure/azure-ai-openai)                       |                             Not Used                              |
|             [jackson-databind](https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind)              |                                                                   |
|                   [firebase-admin](https://mvnrepository.com/artifact/com.google.firebase/firebase-admin)                   | Was used to implement notification but then scrapped for ActiveMQ |
|                                 [h2](https://mvnrepository.com/artifact/com.h2database/h2)                                  |                                                                   |
|                [springfox-swagger-ui](https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui)                 |                                                                   |
|                  [springfox-swagger2](https://mvnrepository.com/artifact/io.springfox/springfox-swagger2)                   |                                                                   |
|             [javax.persistence-api](https://mvnrepository.com/artifact/javax.persistence/javax.persistence-api)             |                                                                   |
|                   [javax.servlet-api](https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api)                   |                                                                   |
|       [spring-boot-starter-web](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web)        |                                                                   |
|   [spring-boot-starter-hateoas](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-hateoas)    |                                                                   |
|  [spring-boot-starter-data-jpa](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa)   |                                                                   |
|      [spring-boot-starter-test](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-test)       |                                                                   |
| [springdoc-openapi-starter-webmvc-ui](https://mvnrepository.com/artifact/org.springdoc/springdoc-openapi-starter-webmvc-ui) |                                                                   |
|                    [hibernate-core](https://mvnrepository.com/artifact/org.hibernate.orm/hibernate-core)                    |                                                                   |
|                    [mysql-connector-java](https://mvnrepository.com/artifact/mysql/mysql-connector-java)                    |                                                                   |
|                    [activemq-core](https://mvnrepository.com/artifact/org.apache.activemq/activemq-core)                    |                                                                   |

### Client-Side
|                                               Package                                                |               Info               |
|:----------------------------------------------------------------------------------------------------:|:--------------------------------:|
|            [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)            |                                  |
|                             [axios](https://www.npmjs.com/package/axios)                             |                                  |
|                             [babel](https://www.npmjs.com/package/Babel)                             |                                  |
|                         [bootstrap](https://www.npmjs.com/package/bootstrap)                         | Used as placeholder for redesign |
|                      [browserslist](https://www.npmjs.com/package/browserslist)                      |                                  |
|                            [buffer](https://www.npmjs.com/package/buffer)                            |                                  |
|                            [parcel](https://www.npmjs.com/package/parcel)                            |                                  |
| [parcel-reporter-static-files-copy](https://www.npmjs.com/package/parcel-reporter-static-files-copy) |                                  |
|                           [process](https://www.npmjs.com/package/process)                           |                                  |
|                             [react](https://www.npmjs.com/package/react)                             |                                  |
|                   [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)                   | Used as placeholder for redesign |
|                      [react-dimmer](https://www.npmjs.com/package/react-dimmer)                      |                                  |
|                         [react-dom](https://www.npmjs.com/package/react-dom)                         |                                  |
|                       [react-icons](https://www.npmjs.com/package/react-icons)                       |           Placeholder            |
|              [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)              |                                  |
|                       [react-redux](https://www.npmjs.com/package/react-redux)                       |                                  |
|         [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel)         |                                  |
|                  [react-router-dom](https://www.npmjs.com/package/react-router-dom)                  |                                  |
|        [react-social-login-buttons](https://www.npmjs.com/package/react-social-login-buttons)        |                                  |
|                             [redux](https://www.npmjs.com/package/redux)                             |                                  |
|                       [redux-thunk](https://www.npmjs.com/package/redux-thunk)                       |                                  |
|                     [redux-toolkit](https://www.npmjs.com/package/redux-toolkit)                     |                                  |
|                          [suncalc](https://www.npmjs.com/package/suncalc0)                           |                                  |
