<h1><b>APIs</b></h1>

<b>GET /ipinfo?ip=<span style="color:green">IP_HERE</b> - get info on IP Address

<b>GET /coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span></b> - get current weather info using latitude and longitude. Both default to 0.0.

<b>GET /<span style="color:green">CITY_HERE</span></b> - get current weather info using city name

<b>GET /forecast/coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span>&days=<span style="color:green">DAYS_NUM</span></b> - get forecast info using latitude and longitude for DAYS_NUM days forward. Lat and lot default is 0.0, DAYS_NUM is 1. Maximum for DAYS_NUM is 3 (API limit)

<b>GET /forecast/<span style="color:green">CITY_NAME</span>?days=<span style="color:green">DAYS_NUM</span></b> - get forecast info using city name for DAYS_NUM days forward. Default for DAYS_NUM is 1. Maximum for DAYS_NUM is 3 (API limit)

<b>GET /history/coordinates?lat=<span style="color:green">LAT_FLOAT</span>&lon=<span style="color:green">LON_FLOAT</span>&start=<span style="color:green">START_DATE_OLD</span>&end=<span style="color:green">END_DATE_YOUNG</span></b> - get weather history using latitude and longitude for a period from START_DATE_OLD until END_DATE_YOUNG. Default for latitude and longitute is 0.0, while for START_DATE_OLD and END_DATE_YOUNG is 2023-5-24 and 2023-5-26, respectively. The format for dates is <b>YYYY-MM-DD</b>. The maximum amount of days between both dates is 7 or only last 7 days is possible idk.

<b>GET /history/<span style="color:green">CITY_NAME</span>?start=<span style="color:green">START_DATE_OLD</span>&end=<span style="color:green">END_DATE_YOUNG</span></b> - get weather history using city name for a period from START_DATE_OLD until END_DATE_YOUNG. Default for START_DATE_OLD and END_DATE_YOUNG is 2023-5-24 and 2023-5-26, respectively. The format for dates is <b>YYYY-MM-DD</b>. The maximum amount of days between both dates is 7 or only last 7 days is possible idk.

<b>GET /radius/<span style="color:green">CITY_NAME</span> - get area and radius in kilometers and miles of city


<h1><b>EVENT</b></h1>
<b>/queue/{ID}</b> - get all the messages enqueued for the provided subscription address ID

    { 
        "messages": ["X", "Y", "Z"] 
    }

<h1><b>THE FOLLOWING REST ENDPOINTS WILL RETURN MESSAGES IN THIS FORMAT</b></h1>

    {
        "status": STATUS_CODE,
        "message": "MESSAGE",
        "data": "DATA"
    }

POST should return ID of created object in message field

<h1><b>USERS</b></h1>


USERS CONTAINS THE FOLLOWING FIELDS:
- <b>id</b>
- <b>username</b>
- <b>password</b>
- <b>mail</b>
- <b>subscriptions</b>
- <b>favorites</b>

<b>POST /users</b> - create a new user. Requires a JSON body with the following fields: 
- <b>username</b>
- <b>password</b>
- <b>mail</b>.

<b>GET /users/ID_VALUE</b> - get user info by ID_VALUE

<b>GET /users/username?username=USERNAME_VALUE</b> - get user info by USERNAME_VALUE

<b>GET /users</b> - get all users info

<b>PUT /users/ID_VALUE</b> - update user info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields: 
- <b>username</b> 
- <b>password</b> 
- <b>mail</b>.

<b>PUT /users/username?username=USERNAME_VALUE</b> - update user info by USERNAME_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:
- <b>username</b>
- <b>password</b>
- <b>mail</b>.

<b>DELETE /users/ID_VALUE</b> - delete user by ID_VALUE

<b>DELETE /users/username?username=USERNAME_VALUE</b> - delete user by USERNAME_VALUE

<b>DELETE /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - unsubscribe from an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id.

<b>DELETE /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - delete a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id.

<b>PUT /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - subscribe to an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id.

<b>PUT /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - add a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id.

<b>DELETE /users/ID_VALUE/subscriptions/SUB_ADDRESS_ID</b> - unsubscribe from an address. ID_VALUE is user ID, SUB_ADDRESS_ID is subscription address id.

<b>DELETE /users/ID_VALUE/favorites/FAV_ADDRESS_ID</b> - delete a favorite address. ID_VALUE is user ID, FAV_ADDRESS_ID is favorite address id.

<h1><b>FAVORITES</b></h1>

<b>FAVORITES CONTAINS THE FOLLOWING FIELDS:</b>
- <b>id</b>
- <b>address</b>
- <b>type</b>
- <b>user</b>

<b>POST /favorites</b> - create a new favorite address. Requires a JSON body with the following fields:
- <b>address</b>
- <b>type</b>.

<b>GET /favorites/ID_VALUE</b> - get favorite address info by ID_VALUE

<b>GET /favorites</b> - get all favorite addresses info

<b>DELETE /favorites/ID_VALUE</b> - delete favorite address by ID_VALUE

<b>PUT /favorites/ID_VALUE</b> - update favorite address info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:
- <b>address</b>
- <b>type</b>

<b>DELETE /favorites/ID_VALUE</b> - delete favorite address by ID_VALUE

<h1><b>SUBSCRIPTIONS</b></h1>

<b>SUBSCRIPTIONS CONTAINS THE FOLLOWING FIELDS:</b>
- <b>id</b>
- <b>address</b>
- <b>criterias</b>
- <b>user</b>

<b>POST /subscriptions</b> - create a new subscription. Requires a JSON body with the following fields:
- <b>address</b>

<b>GET /subscriptions/ID_VALUE</b> - get subscription info by ID_VALUE

<b>GET /subscriptions</b> - get all subscriptions info

<b>DELETE /subscriptions/ID_VALUE</b> - delete subscription by ID_VALUE

<b>PUT /subscriptions/ID_VALUE</b> - update subscription info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:
- <b>address</b>

<b>DELETE /subscriptions/ID_VALUE/CRITERIA_ID</b> - delete a criteria from a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id.

<b>PUT /subscriptions/ID_VALUE/CRITERIA_ID</b> - add a criteria to a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id.

<b>DELETE /subscriptions/ID_VALUE/CRITERIA_ID</b> - delete a criteria from a subscription. ID_VALUE is subscription ID, CRITERIA_ID is criteria id.

<h1><b>CRITERIA</b></h1>

<b>CRITERIA CONTAINS THE FOLLOWING FIELDS:</b>
- <b>id</b>
- <b>less_equal_more</b>
- <b>criteriaName</b>
- <b>criteriaValue</b>
- <b>subscription_address</b>

<b>POST /criteria</b> - create a new criteria. Requires a JSON body with the following fields:
- <b>less_equal_more</b> - "LESS", "EQUAL" or "MORE"
- <b>criteriaName</b> - "temp_c", etc. the fields from the weather api that need checking
- <b>criteriaValue</b> - value dependant on criteria. For example, if criteriaName is "temp_c", then criteriaValue is a float number.

<b>GET /criteria/ID_VALUE</b> - get criteria info by ID_VALUE

<b>GET /criteria</b> - get all criterias info

<b>DELETE /criteria/ID_VALUE</b> - delete criteria by ID_VALUE

<b>PUT /criteria/ID_VALUE</b> - update criteria info by ID_VALUE. Requires a JSON body with ANY (at least 1) of the following fields:
- <b>less_equal_more</b> - "LESS", "EQUAL" or "MORE"
- <b>criteriaName</b> - "temp_c", etc. the fields from the weather api that need checking
- <b>criteriaValue</b> - value dependant on criteria. For example, if criteriaName is "temp_c", then criteriaValue is a float number.

