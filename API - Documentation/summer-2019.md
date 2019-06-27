## **All requests must include Request Headers:**

| Header 	| Type 			| Description 										| Required |
| :-------: | :----: 		| :-----------: 									| :------: |
| Bearer 	| Authorization	| Automatically set once logged in, (must include token within Authorization Header)		| No  |

--------------------------
## API Endpoints
### System Admin
- [`GET` /api/systems](#get-apisystems)
- [`DELETE` /api/systems/:systemID](#delete-apisystemssystemID)
- [`POST` /api/systems/signup](#POST-apisystemssignup)
- [`POST` /api/systems/login](#POST-apisystemslogin)

### Admin
- [`GET` /api/admins/](#GET-apiadmins)
- [`GET` /api/admins/:adminID](#GET-apiadminsadminID)
- [`PUT` /api/admins/:adminID](#PUT-apiadminsadminID)
- [`DELETE` /api/admins/:adminID](#DELETE-apiadminsadminID)
- [`POST` /api/admins/signup](#POST-apiadminssignup)
- [`POST` /api/admins/login](#POST-apiadminslogin)

### Researcher
- [`GET` /api/researchers/](#GET-apiresearchers)
- [`GET` /api/researchers/:researcherID](#GET-apiresearchersresearcherID)
- [`PUT` /api/researchers/:researcherID](#PUT-apiresearchersresearcherID)
- [`DELETE` /api/researchers/:researcherID](#DELETE-apiresearchersresearcherID)
- [`POST` /api/researchers/signup](#POST-apiresearcherssignup)
- [`POST` /api/researchers/login](#POST-apiresearcherslogin)
- [`GET` /api/researchers/resident_data/peddler](#GET-apiresearchersresidentdatapeddler)

### Staff
- [`GET` /api/staffs/](#GET-apistaffs)
- [`GET` /api/staffs/:staffID](#GET-apistaffsstaffID)
- [`PUT` /api/staffs/:staffID](#PUT-apistaffsstaffID)
- [`DELETE` /api/staffs/:staffID](#DELETE-apistaffsstaffID)
- [`POST` /api/staffs/signup](#POST-apistaffssignup)
- [`POST` /api/staffs/login](#POST-apistaffslogin)

### Resident
- [`GET` /api/residents/](#GET-apiresidents)
- [`GET` /api/residents/:residentID](#GET-apiresidentsresidentID)
- [`PUT` /api/residents/:residentID](#PUT-apiresidentsresidentID)
- [`DELETE` /api/residents/:residentID](#DELETE-apiresidentsresidentID)
- [`POST` /api/residents/signup](#POST-apiresidentssignup)
- [`POST` /api/residents/login](#POST-apiresearcherslogin)

### User
- [`GET` /api/users/](#GET-apiusers)
- [`GET` /api/users/:userID](#GET-apiusersuserID)
- [`PUT` /api/users/:userID](#PUT-apiusersuserID)
- [`DELETE` /api/users/:userID](#DELETE-apiusersuserID)
- [`POST` /api/users/signup](#POST-apiuserssignup)
- [`POST` /api/users/login](#POST-apiuserslogin)

### Linked Account
- [`GET` /api/linked_accounts/](#GET-apilinkedaccounts)
- [`GET` /api/linked_accounts/:linkedAccountID](#GET-apilinkedaccountslinkedAccountID)
- [`PUT` /api/linked_accounts/:linkedAccountID](#PUT-apilinkedaccountslinkedAccountID)
- [`DELETE` /api/linked_accounts/:linkedAccountID](#DELETE-apilinkedaccountslinkedAccountID)
- [`POST` /api/linked_accounts/signup](#POST-apilinkedaccountssignup)
- [`POST` /api/linked_accounts/login](#POST-apilinkedaccountslogin)
- [`POST` /api/linked_accounts/link_user_resident](#POST-apilinkedaccountslinkuserresident)
- [`POST` /api/linked_accounts/user_accept/:accept](#POST-apilinkedaccountsuseracceptaccept)
- [`DELETE` /api/linked_accounts/remove/:linkedAccountID](#DELETE-apilinkedaccountsremovelinkedAccountID)

### Affiliation
- [`GET` /api/affiliations](#GET-apiaffiliations)
- [`POST` /api/affiliations](#POST-apiaffiliations)
- [`GET` /api/affiliations/:affiliation_id](#GET-apiaffiliationsaffiliationid)
- [`PUT` /api/affiliations/:affiliation_id](#PUT-apiaffiliationsaffiliationid)
- [`DELETE` /api/affiliations/:affiliation_id](#DELETE-apiaffiliationsaffiliationid)
- [`GET` /api/affiliations/:affilition_id/admin](#GET-apiaffiliationsaffilitionidadmin)
- [`GET` /api/affiliations/:affiliation_id/residents](#GET-apiaffiliationsaffiliationidresidents)
- [`GET` /api/affiliations/:affiliation_id/staffs](#GET-apiaffiliationsaffiliationidstaffs)
- [`GET` /api/affiliations/:affiliation_id/groups](#GET-apiaffiliationsaffiliationidgroups)

### Group
- [`GET` /api/groups/](#GET-apigroups)
- [`POST` /api/groups/](#POST-apigroups)
- [`GET` /api/groups/:groupID](#GET-apigroupsgroupID)
- [`PUT` /api/groups/:groupID](#PUT-apigroupsgroupID)
- [`DELETE` /api/groups/:groupID](#DELETE-apigroupsgroupID)
- [`POST` /api/groups/:groupID/residents/:residentID](#POST-apigroupsgroupIDresidentsresidentID)
- [`DELETE` /api/groups/:groupID/residents/:residentID](#DELETE-apigroupsgroupIDresidentsresidentID)
- [`POST` /api/groups/:groupID/staffs/:staffID](#POST-apigroupsgroupIDstaffsstaffID)
- [`DELETE` /api/groups/:groupID/staffs/:staffID](#DELETE-apigroupsgroupIDstaffsstaffID)

### Application
1. Experiential Centivizer
   - [`GET` /api/applications/experiential-centivizer/](#GET-apiapplicationsexperiential-centivizer)
   - [`POST` /api/applications/experiential-centivizer/](#POST-apiapplicationsexperiential-centivizer)
   - [`GET` /api/applications/experiential-centivizer/users/:userID](#GET-apiapplicationsexperiential-centivizerusersuserID)
   - [`GET` /api/applications/experiential-centivizer/residents/:residentID](#GET-apiapplicationsexperiential-centivizerresidentsresidentID)
   - [`GET` /api/applications/experiential-centivizer/groups/:groupID](#GET-apiapplicationsexperiential-centivizergroupsgroupID)
   - [`GET` /api/applications/experiential-centivizer/affiliations/:affiliationID](#GET-apiapplicationsexperiential-centivizeraffiliationsaffiliationID)
  
2. Cognitive Centivizer
3. Physical Exercise
4. Travel Video
5. Personal TV

---

## System Admin Routes
### `GET` /api/systems
Get all system admins in the system

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {system_admin: systems} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/systems/:systemID
Delete the system admin ID

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| message 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/systems/signup
Create new system admin account

**Request body:**

| Parameter 	| Type 			| Description       | Required |
| :---------: 	| :----: 		| :-----------:     | :------: |
| superPass     | String        | KJFDSOJFOIDSHOIHGEFONVCVOINOSOIXFDSJFDSOJ3532 | **Yes** |
| username 		| String 		|                   | **Yes**  |
| password 		| String 		|                   | **Yes**  |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 201 		  | Success 		| JSON {message: 'System admin created successfully', id: researcher._id, username: researcher.username} 	|
| 400         | Bad request     | {error: 'No username or password'} |
| 401 		  | Authorization Error 	| Unauthorized message if not include superPass |
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/systems/login

**Request body:**

| Parameter     | Status |
| :---------: 	| :----: | :-----------: | :------: |
| username 		| String |               | **Yes**  |
| password 		| String |               | **Yes**  |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


---


## Researcher Routes
### `GET` /api/researchers/
Get all researchers

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {researcher:researchers} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |
| 401 		  | Authorization Error 	| Unauthorized message if not system|

[Go to Top](#api-endpoints)

### `GET` /api/researchers/:researcherID
Get specific researcher

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {researcher:researcher} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or the researcher being queried |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `PUT` /api/researchers/:researcherID
Edit some properties of a researcher account

**Request body:**

| Parameter 	| Type 			| Description  | Required |
| :---------: 	| :----: 		| :-----------:| :------: |
| first_name 	| String 		| First name   | No       |
| last_name 	| String 		| Last name    | No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {researcher: researcher} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or reseracher being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `DELETE` /api/researchers/:researcherID
Delete a researcher account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {msg: message: 'Researcher ID: ' + researcher._id + ' deleted successfully'} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/researchers/signup
Create a new researcher account 

**Request body:**

| Parameter 	    | Type 			| Description   | Required |
| :---------: 	    | :----: 		| :-----------: | :------: |
| first_name 	    | String 		| First name	| **Yes**  |
| last_name 		| String 	    | Last name     | **Yes**  |
| username 		    | String 		| Last name     | **Yes**  |
| password 		    | String 		| Last name     | **Yes**  |
| (unique) email 	| String 		| Last name     | **Yes**  |
| description 		| String 		| Last name     | No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {message: 'Research created successfully', id: researcher._id, username: researcher.username} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)

### `POST` /api/researchers/login

**Request body:**

| :---------: 	| :----: 		| :-----------:| :------: |
| username 		| String 		| Last name| **Yes**       |
| password 		| String 		| Last name| **Yes**       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


### `GET` /api/researchers/resident_data/peddler
Get CSV for all session data of each game

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| route to send make a get request to static csv files from server (still need to be authenticated), Will update everyday	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or researcher|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

## Admin Routes
### `GET` /api/admins/
Get all admins

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {admin:admin} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/admins/:adminID
Get specific admin

**Response return:**
| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {admin:admin} 	|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |
| 401 		  | Authorization Error 	| Unauthorized message if not system or the admin being queried|

[Go to Top](#api-endpoints)


### `PUT` /api/admins/:adminID
Edit some properties of an admin account

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| No       |
| last_name 	| String 		| Last name     | No       |
| middle_name 	| String 		| Middle name   | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
| gender 		| Number 		| Birthday      | No       |
| country 		| Number 		| Birthday      | No       |
| photo 		| String Array 	| Photo paths, *not done yet* | No|


**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {admin:admin} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or reseracher being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


### `DELETE` /api/admins/:adminID
Delete an admin account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON { message: 'Admin ID: ' + req.params.adminID + ' deleted successfully', affiliation: 'Admin ID: ' + req.params.adminID + ' deleted from the affiliation successfully'}|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/admins/signup
Create a new admin account 

**Request body:**
| Parameter 	| Type 			| Description   | Required  |
| :---------: 	| :----: 		| :-----------: | :------:  |
| first_name 	| String 		| First name	| Yes       |
| last_name 	| String 		| Last name     | Yes       |
| username 		| String 		| username      | Yes       |
| password 		| String 		| password      | Yes       |
| (unique) email 	| String 	| email         | Yes       |
| affiliation_id 	| String 	| affiliation, if using a system account, can include affiliation_id | No       |
| country 		| String 		| Country       | No        |
| photo 		| String 		| photo path, *not implemented yet* | No       |
| gender 		| String 		| gender        | No        |
| age 		    | Number 		| age           | No        |
| birth_date 	| String 		| birth day     | No        |

**Response return:**
| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {message: 'Admin created successfully', id: admin._id, username: admin.username} 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/admins/login
Login to admin account 

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| username 		| String 		|               | Yes      |
| password 		| String 		|               | Yes      |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


## Staff Routes
### `GET` /api/staffs/
Get all staffs

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {staff:staff} 	|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

### `GET` /api/staffs/:staffID
Get specific staff

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {staff:staff} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, the staff being queried, or a staff within the same affiliation as the staff being queried, or the admin of affiliation that staffID belongs to |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


### `PUT` /api/staffs/:staffID
Edit some properties of an staff account

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| No       |
| last_name 	| String 		| Last name     | No       |
| middle_name 	| String 		| Middle name   | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
| gender 		| Number 		| Birthday      | No       |
| country 		| Number 		| Birthday      | No       |
| photo 		| String Array 	| Photo paths, *not done yet* | No|

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {staff:staff} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system,admin of the affiliation that staffID belongs to or staff being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `DELETE` /api/staffs/:staffID
Delete an staff account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {message: 'Staff ID: ' + req.params.staffID + ' deleted successfully.', groups: res_groups, affiliation: 'Staff ID: ' + staff._id + ' deleted from Group ID: ' + affiliation._id + ' successfully.'}|
| 401 		  | Authorization Error 	| Unauthorized message if not system, or admin of affiliation that StaffID belongs to|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/staffs/signup
Create a new staff account 

**Request body:**

| Parameter 	| Type 			| Description   | Required  |
| :---------: 	| :----: 		| :-----------: | :------:  |
| first_name 	| String 		| First name	| Yes       |
| last_name 	| String 		| Last name     | Yes       |
| username 		| String 		| username      | Yes       |
| password 		| String 		| password      | Yes       |
| (unique) email 	| String 	| email         | Yes       |
| affiliation_id 	| String 	| affiliation, if using a system account, can include affiliation_id| No       |
| country 		| String 		| Country       | No        |
| photo 		| String 		| photo path, *not implemented yet* | No       |
| gender 		| String 		| gender        | No        |
| age 		    | Number 		| age           | No        |
| birth_date 	| String 		| birth day     | No        |
| group_ids 	| String Array 	|Group Ids that staff is to be added into | No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {staff:msg if created,group:msg if each updated,affiliation:msg if updated,Error:{staff:[]}|
| 401| Authorization error 	| Unauthorized if not system or admin of an affiliation |
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


### `POST` /api/staffs/login
Login to staff account 

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| username 		| String 		|               | Yes      |
| password 		| String 		|               | Yes      |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

## Resident Routes
### `GET` /api/residents/
Get all residents

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {resident:resident} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or researcher|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)

### `GET` /api/residents/:residentID
Get specific resident

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {resident:resident} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, the resident being queried, or a staff within the same affiliation as the resident being queried (though will get a limited information if not in the same group as the resident), or the admin of affiliation that residentID belongs to, or a linked account linked with the residentID |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `PUT` /api/residents/:residentID
Edit some properties of an resident account

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| No       |
| last_name 	| String 		| Last name     | No       |
| middle_name 	| String 		| Middle name   | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
| gender 		| Number 		| Birthday      | No       |
| country 		| Number 		| Birthday      | No       |
| photo 		| String Array 	| Photo paths, *not done yet* | No|

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {resident:resident} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system,admin of the affiliation that residentID belongs to or resident being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/residents/:residentID
Delete a resident account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {message:resident._id + " was deleted and Affiliation's resident list updated successfuly", groupUpdateMessage: groupAndErrors}|
| 401 		  | Authorization Error 	| Unauthorized message if not system, or admin of affiliation that ResidentId belongs to|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/residents/signup
Create a new resident account 

**Request body:**

| Parameter 	| Type 			| Description   | Required  |
| :---------: 	| :----: 		| :-----------: | :------:  |
| first_name 	| String 		| First name	| Yes       |
| last_name 	| String 		| Last name     | Yes       |
| username 		| String 		| username      | Yes       |
| password 		| String 		| password      | Yes       |
| (unique) email	| String 	| email         | Yes       |
| affiliation_id	| String 	| affiliation, if using a system account, can include affiliation_id | No       |
| country 		| String 		| Country       | No        |
| photo 		| String 		| photo path, *not implemented yet* | No       |
| gender 		| String 		| gender        | No        |
| age 		    | Number 		| age           | No        |
| birth_date 	| String 		| birth day     | No        |
| group_ids 	| String Array 	| Group Ids that resident is to be added into| No       |



**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {resident:msg if created,group:msg if each updated,affiliation:msg if updated,Error:{resident:[]}|
| 401| Authorization error 	| Unauthorized if not system or admin of an affiliation |
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)

### `POST` /api/residents/login
Login to resident account 

**Request body:**

| Parameter 	| Type 			| Description  | Required |
| :---------: 	| :----: 		| :-----------:| :------: |
| username 		| String 		|              | **Yes**  |
| password 		| String 		|              | **Yes**  |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token, expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

## User Routes
### `GET` /api/users/
Get all users

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {user:user} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or researcher|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/users/:userID
Get specific user

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {user:user} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, the user being queried, or a linked account linked with the userID |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `PUT` /api/users/:userID
Edit some properties of an user account

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| No       |
| last_name 	| String 		| Last name     | No       |
| middle_name 	| String 		| Middle name   | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
| gender 		| Number 		| Birthday      | No       |
| country 		| Number 		| Birthday      | No       |
| photo 		| String Array 	| Photo paths, *not done yet* | No|

**Response return:**

| 200 		  | Success 		| JSON {user:user} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or user being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

### `DELETE` /api/users/:userID
Delete an user account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON { message:user._id + " was deleted", linkedAccountMessages: accountAndErrors}|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/users/signup
Create a new user account 

**Request body:**

| Parameter 	| Type 			| Description   | Required  |
| :---------: 	| :----: 		| :-----------: | :------:  |
| first_name 	| String 		| First name	| Yes       |
| last_name 	| String 		| Last name     | Yes       |
| username 		| String 		| username      | Yes       |
| password 		| String 		| password      | Yes       |
| (unique) email	| String 	| email         | Yes       |
| country 		| String 		| Country       | No        |
| photo 		| String 		| photo path, *not implemented yet* | No       |
| gender 		| String 		| gender        | No        |
| status 		| String 		| Mental status | No        |
| age 		    | Number 		| age           | No        |
| birth_date 	| String 		| birth day     | No        |
| session_id_cognitive_centivizer | Object      | If user played without an account and then makes an account, then add that session to this new account | No |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {user:user}|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/users/login
Login to User account 

**Request body:**

| Parameter 	| Type 			| Description  | Required |
| :---------: 	| :----: 		| :-----------:| :------: |
| username 		| String 		|              | **Yes**  |
| password 		| String 		|              | **Yes**  |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

## Linked Account Routes
### `GET` /api/linked_accounts/
Get all accounts

**Response return:**
| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {account:account} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/linked_accounts/:linkedAccountID
Get specific account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {account:account} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, the account being queried, or a user/resident account linked with the linkedAccountID, or admin of an affiliation that account belongs to |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `PUT` /api/linked_accounts/:linkedAccountID
Edit some properties of an account

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| No       |
| last_name 	| String 		| Last name     | No       |
| middle_name 	| String 		| Middle name   | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
| gender 		| Number 		| Gender        | No       |
| country 		| Number 		| Country       | No       |
| photo 		| String Array 	| Photo paths, *not done yet* | No|
| status 		| String 		| Mental Status | No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {account:account} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or account being queried|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/linked_accounts/:linkedAccountID
Delete an user account

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {message:linkedAccount._id + " was deleted", accountAndErrors: accountAndErrors}|
| 401 		  | Authorization Error 	| Unauthorized message if not system or account being queried|
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/linked_accounts/signup
Create a new  account 

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| first_name 	| String 		| First name	| **Yes**  |
| last_name 	| String 		| Last name     | **Yes**  |
| username 		| String 		| username      | **Yes**  |
| password 		| String 		| password      | **Yes**  |
| (unique) email	| String 	| email         | **Yes**  |
| country 		| String 		| Country       | No       |
| photo 		| String 		| photo path, not implemented yet| No       |
| gender 		| String 		| Gender        | No       |
| status 		| String 		| Mental status | No       |
| age 		    | Number 		| Age           | No       |
| birth_date 	| String 		| Birthday      | No       |
|affiliation (do not put in)|String|if logged into, admin, will place new account under admin's affiliation, else if its a unauthorized account, then will have null as affiliation|No|

**Response return:**
| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {user:user}|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/linked_accounts/login
Login to account 

**Request body:**

| Parameter 	| Type 			| Description  | Required |
| :---------: 	| :----: 		| :-----------:| :------: |
| username 		| String 		|              | **Yes**  |
| password 		| String 		|              | **Yes**  |

**Response return:**
| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {token: token,expiresIn: 3600,userId: user._id}} 	|
| 401 		  | Authorization Error 	| Unauthorized message if password doesnt match username|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `POST` /api/linked_accounts/link_user_resident
Link a linkedAccount to a resident or a user.

For resident, must be an admin of an affiliation that contains both resident and linkedAccount, or staff within same group as the resident and same affiliation as the linkedAccount

For user, must use this route as a linked account to send a request to the user by including user_id in the body

**Request body:**

| Parameter 	    | Type 	 | Description   | Required |
| :---------: 	    | :----: | :-----------: | :------: |
| linked_account_id | String | linked_account_id that you (admin) want to link with ResidentID | Yes       |
| resident_id 		| String | ResidentID that you (admin) want to link with linked_account_id | Yes       |
| user_id 		    | String | UserID that you (linkedAccount) want to link with| Yes       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Resident and LinkedAccount are both linked now.	|
| 401 		  | Authorization Error 	| Unauthorized message if not admin of both resident and linkedAccount, or staff within the group of the resident and with a linked account within same affiliation as the staff|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server, or if these accounts are already linked, You have already sent a request to this user|

[Go to Top](#api-endpoints)


### `POST` /api/linked_accounts/user_accept/:accept
For user account to accept a request made by linked account from route: [/api/linked_accounts/link_user_resident](#POST-apilinkedaccountslinkuserresident)

**Request body:**

| Parameter 	| Type 	 | Description  | Required |
| :---------: 	| :----: | :-----------:| :------: |
| accept 		| String | Should be either "accept", anything else counts as a decline to the request | Yes       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| msg: Successfully rejected request, Successfully accepted request, your accounts are now linked,	|
| 401 		  | Authorization Error 	| Unauthorized message if not a user|
| 404 		  | Not found 		| Unable to fetch asset, This user has not sent you a request 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `DELETE` /api/linked_accounts/remove/:linkedAccountID
Remove a linked account from a resident or a user 

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Successfully removed linking between the accounts 	|
| 401 		  | Authorization Error 	| Unauthorized message if not a resident or a user|
| 500 		  | Internal error 	| Error Message from server,Unable to delink these two accounts |

[Go to Top](#api-endpoints)

---

## Affiliation Routes
### `GET` /api/affiliations
Get all affiliations in the system

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {affiliation: affiliation}	|
| 401 		  | Authorization Error 	| Unauthorized message if not system |
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/affiliations
Create new affiliation

**Request body:**

| Parameter 	| Type 			| Description| Required |
| :---------: 	| :----: 		| :-----------:| :------: |
| affiliation_name    | String 	| Last name    | **Yes**       |
| address 		| String 		| Last name    | **Yes**       |
| num_of_units  | Number        | Number of people in this affiliation                  | No |
| num_of_ppl_dementia | Number  | Number of people who is dementia in this affiliation  | No |
| admin_id            | String  | Admin in charge in this affiliation                   | No |
| staff_ids           | Array   | All staffs belong to this affiliation                 | No |
| resident_ids        | Array   | All residents belong to this affiliation              | No |
| groups_ids          | Array   | All groups belong to this affiliation                 | No |
| linked_account_ids  | Array   | All linked accounts (caregivers, family members) who have access to the residents in this affiliation | No |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin |
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/affiliations/:affiliation_id
Get the info of specific affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {affiliation: affiliation} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `PUT` /api/affiliations/:affiliation_id
Update info of specific affiliation

**Request body:**

Same as the [`POST` /api/affiliations/](#post-apiaffiliations)

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {affiliation: affiliation} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/affiliations/:affiliation_id
Delete specific affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| message 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/affiliations/:affilition_id/admin
Get the admin of specific affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {admin:admin} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to top](#api-endpoints)

### `GET` /api/affiliations/:affiliation_id/residents
Get all staffs in specific affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {admin:admin} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin or staff in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/affiliations/:affiliation_id/staffs
Get all staffs in this affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {staff: staff} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin or staff in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/affiliations/:affiliation_id/groups
Get all groups in this affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {group: group} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or admin in charge of this affiliation |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

---

## Group Routes
### `GET` /api/groups/
Get all users

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {group:group} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/groups/
Create a new group

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| group_name 	| String 		| Name		    | **Yes**  |
| description 	| String 		| Description of group | No |
| staff_ids 	| String Array	| staff_ids     | No       |
| resident_ids 	| String Array	| resident_ids  | No       |
| affiliation_id | String       | Only put in if logged in to system | **Yes**     |


**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		|{allStaffAndErrors:allResAndErrors,group: group}|
| 401 		  | Authorization Error 	| Unauthorized message if not system, or admin |
| 400		  | Authorization Error 	| Missing group_name |
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/groups/:groupID
Get specific group

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {group:group} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, admin of the group, or a staff within the group |
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `PUT` /api/groups/:groupID
Edit some properties of a group 

**Request body:**

| Parameter 	| Type 			| Description   | Required |
| :---------: 	| :----: 		| :-----------: | :------: |
| group_name 	| String 		| Name		    | **Yes**  |
| description 	| String 		| Description of group | No |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {group:group} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or admin of affiliation that group belongs to|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)


### `DELETE` /api/groups/:groupID
Delete a group 

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {allStaffAndErrors:allResAndErrors, group: group}|
| 401 		  | Authorization Error 	| Unauthorized message if not system, or admin of affiliation that group belongs to |
| 404 		  | Not found 		| Unable to delete asset 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/groups/:groupID/residents/:residentID
Add a residentID to a groupID

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Successfully updated resident's groups and group's residents|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or admin of affiliation that group belongs to|
| 404 		  | Not found 		| Unable to fetch asset, This resident is already a part of this group 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/groups/:groupID/residents/:residentID
Remove a residentID from a groupID

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Successfully updated resident's groups and group's residents|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or admin of affiliation that group belongs to|
| 404 		  | Not found 		| Unable to fetch asset, This resident is not apart of this group|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `POST` /api/groups/:groupID/staffs/:staffID
Add a staffID to a groupID

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Successfully updated staff's groups and group's staffs|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or admin of affiliation that group belongs to|
| 404 		  | Not found 		| Unable to fetch asset, This staff is already a part of this group 	|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `DELETE` /api/groups/:groupID/staffs/:staffID
Remove a staffID from a groupID

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Successfully updated staff's groups and group's staffs|
| 401 		  | Authorization Error 	| Unauthorized message if not system,or admin of affiliation that group belongs to|
| 404 		  | Not found 		| Unable to fetch asset, This staff is not apart of this group|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

## Session Routes
## Experiential-centivizer
### `GET` /api/applications/experiential-centivizer/
Get all sessions in database

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {sessions:sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system or researcher|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)

### `POST` /api/applications/experiential-centivizer/
Post a session

**Request body:**

| Parameter 	| Type 			| Description 							| Required |
| :---------: 	| :----: 		| :-----------: 						| :------: |
| user_id 	    | String 		| Automatically set once logged in, (must include token within Authorization Header)		| No  |
| dateTime 		| Date 		    | Time that the game was played         | No       |
| settings      | Object 		| Determine by Driving Simulator Team   | No       |
| speedEngine 	| Object 		| Determine by Driving Simulator Team   | No 	   |
| off_road 	    | Object Array 	| Determine by Driving Simulator Team   | No       |
| time_stamps 	| Object Array 	| Determine by Driving Simulator Team   | No       |
| NPCs 			| Object Array 	| Determine by Driving Simulator Team   | No       |
| speed_report 	| Object Array 	| Determine by Driving Simulator Team	| No       |
| collisions 	| Object Array 	| Determine by Driving Simulator Team   | No 	   |
| input_aggregate 	| Object	| Determine by Driving Simulator Team   | No	   |
| interactions 	| Object 		| Determine by Driving Simulator Team	| No       |
| todo_info 	| Object 		| Determine by Driving Simulator Team	| No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {msg:"Successfully posted session to your account"} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not user, resident, unuathorized|
| 404 		  | Not found 		| Unable to fetch asset 	|
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)


### `GET` /api/applications/experiential-centivizer/users/:userID
Get all sessions from a user

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {session:sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, Linked account linked to user, or User of the session|
| 404 		  | Not found 		| Unable to fetch asset|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/applications/experiential-centivizer/residents/:residentID
Get all sessions from a resident

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {session:sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, Linked account linked to resident, staff in charge group that resident is within, admin in charge of affiliation that resident is within, or Resident of the session |
| 404 		  | Not found 		| Unable to fetch asset|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/applications/experiential-centivizer/groups/:groupID
Get all sessions from residents within a group

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {err,missing,residentIDS,sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, staff in charge group, admin in charge of affiliation that group is within|
| 404 		  | Not found 		| Unable to fetch asset|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/applications/experiential-centivizer/affiliations/:affiliationID
Get all sessions from residents within an affiliation

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {err,missing,residentIDS,sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized  message if not system, admin in charge of affiliation|
| 404 		  | Not found 		| Unable to fetch asset|
| 500 		  | Internal error 	| Error Message from server |

[Go to Top](#api-endpoints)

### `GET` /api/applications/experiential-centivizer/:sessionID
Get a specific session

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| JSON {err,missing,residentIDS,sessions} 	|
| 401 		  | Authorization Error 	| Unauthorized message if not system, admin in charge of affiliation of resident, staff in charge of group that resident is within, linked account linked with user or resident, resident or user of the session.|
| 404 		  | Not found 		| Unable to fetch the asset |
| 500 		  | Internal error 	| Error Message from server |


[Go to Top](#api-endpoints)

---
