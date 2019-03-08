# API Documentation

## API Endpoints:

### 0. Main
- `POST` [/api/login](#POST-/api/login)
- `POST` [/api/logout](#POST-/api/logout)

### 1. Staffs
- `POST` [/api/staffs/signup](#POST-/api/staffs/signup)
- `GET` [/api/staffs](#GET-/api/staffs)
- `GET` [/api/staffs/:staffID](#GET-/api/staffs/:staffID)
- `PUT` [/api/staffs/:staffID](#PUT-/api/staffs/:staffID)
- `DELETE` [/api/staffs/:staffID](#DELETE-/api/staffs/:staffID)

### 2. Residents
- `POST` [/api/residents/signup](#POST-/api/residents/signup)
- `GET` [/api/residents](#GET-/api/residents)
- `GET` [/api/residents/:residentID](#GET-/api/residents/:residentID)
- `PUT` [/api/residents/:residentID](#PUT-/api/residents/:residentID)
- `DELETE` [/api/residents/:residentID](#DELETE-/api/residents/:residentID)

### 3. Groups
- `GET` [/api/groups](#GET-/api/groups)
- `POST` [/api/groups](#POST-/api/groups)
- `GET` [/api/groups/:groupID](#GET-/api/groups/:groupID)
- `PUT` [/api/groups/:groupID](#PUT-/api/groups/:groupID)
- `DELETE` [/api/groups/:groupID](#DELETE-/api/groups/:groupID)
---

## Main
### `POST` /api/login
**Request body:**

| Parameter | Type   | Description        |
| :-------: | :--:   | :-----------:      |
| username  | String | Username of a user |
| password  | String | Password of a user |

**Response return:**

| Status code | Status         | Response body         |
| :---------: | :----:         | :-----------:         |
| 200         | Success        | User object           |
| 401         | Unauthorized   | Password is incorrect |
| 404         | User not found | User not found        |

[Go to Top](#API-Endpoints)

### `POST` /api/logout
**Request body:**

| Parameter | Type   | Description        |
| :-------: | :----: | :-----------:      |
| username  | String | Username of a user |

**Response return:**

| Status code | Status  | Response body   |
| :---------: | :-----: | :-------------: |
| 200         | Success | Success         |

[Go to Top](#API-Endpoints)

## Staffs
### `POST` /api/staffs/signup
Signup a new staff

**Request body:**

| Parameter     | Type       	| Description 							| Required |
| :---------:   | :----: 		| :-----------: 						| :------: |
| **username**  | String 		| Temporary username setup by an admin 	| **Yes**  |
| **password**  | String 		| Temporary password setup by an admin 	| **Yes**  |
| **firstName** | String 		| Firstname of staff 					| **Yes**  |
| middleName    | String 		| Middle name of staff 					| No       |
| **lastName**  | String 		| Lastname of staff 					| **Yes**  |
| gender        | String 		| Gender of staff 						| No       |
| email         | String 		| Email of staff 						| No       |
| position 		| String 		| Position of staff 					| No       |
| affiliation 	| String 		| Affiliation of staff 					| No       |
| groups 		| String Array  | Assigned groups of staff 				| No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------:		| :-------------: 	|
| 200 		  | Success 		| Staff object 		|
| 404 		  | Not found 		| Group not found 	|
| 500 		  | Internal error 	| Error from server |

### `GET` /api/staffs
Get 'ALL' staffs

**Response return:**

| Status code | Status 			| Response body 			|
| :---------: | :------: 		| :-------------: 			|
| 200 		  | Success 		| Staff object (All staffs) |
| 500 		  | Internal error 	| Error from server 		|

[Go to Top](#API-Endpoints)

### `POST` /api/staffs/:staffID
Get 'SPECIFIC' staff information by sending staffID in URL

e.g. /api/staffs/lklu402dj03j54

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Staff object 		|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

### `PUT` /api/staffs/:staffID
Update 'SPECIFIC' staff information

**Request body:**

Part of [/api/staffs/signup](#POST-/api/staffs/signup) body

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Staff object 		|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

### `DELETE` /api/staffs/:staffID
Delete 'SPECIFIC' staff

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Staff object 		|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

## Residents
### `POST` /api/residents/signup
Signup a new resident

**Request body:**

| Parameter 	| Type 			| Description 										| Required |
| :---------: 	| :----: 		| :-----------: 									| :------: |
| **username** 	| String 		| Temporary username setup by an admin 				| **Yes**  |
| **firstName** | String 		| Firstname of resident 							| **Yes**  |
| middleName 	| String 		| Middle name of resident 							| No 	   |
| **lastName** 	| String 		| Lastname of resident 								| **Yes**  |
| gender 		| String 		| Gender of resident 								| No       |
| birthDate 	| Date 			| Birthdate of resident 							| No       |
| age 			| Number 		| Age of resident 									| No       |
| staffID 		| String 		| Assigned staff who is taking care of this resident| No       |
| affiliation 	| String 		| Affiliation of resident 							| No 	   |
| groups 		| String Array 	| Assigned groups of resident 						| No	   |
| description 	| String 		| Additional comment to resident 					| No       |

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Resident object 	|
| 400 		  | Bad request 	| No username 		|
| 404 		  | Not found 		| Group not found 	|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

### `GET` /api/residents
Get 'ALL' residents

**Response return:**

| Status code | Status 			| Response body 					|
| :---------: | :------: 		| :-------------: 					|
| 200 		  | Success 		| Resident object (All residents) 	|
| 500 		  | Internal error 	| Error from server 				|

[Go to Top](#API-Endpoints)

### `GET` /api/residents/:residentID
Get 'SPECIFIC' resident information by sending residentID in URL

e.g. /api/residents/lklu402dj03j54

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Resident object 	|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

### `PUT` /api/residents/:residentID
Update 'SPECIFIC' resident information

**Request body:**

Part of [/api/residents/signup](#POST-/api/residents/signup) body

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Resident object 	|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

### `DELETE` /api/residents/:residentID
Delete 'SPECIFIC' resident

**Response return:**

| Status code | Status 			| Response body 	|
| :---------: | :------: 		| :-------------: 	|
| 200 		  | Success 		| Resident object 	|
| 500 		  | Internal error 	| Error from server |

[Go to Top](#API-Endpoints)

## Groups
### `GET` /api/groups
Get 'ALL' groups

**Response return:**

| Status code 	| Status 		 | Response body 			 |
| :-----------: | :------: 		 | :-------------: 			 |
| 200 			| Success 		 | Group object (All groups) |
| 500 			| Internal error | Error from server 		 |

[Go to Top](#API-Endpoints)

### `POST` /api/groups
Create a new group

**Request body:**

| Parameter 	| Type 			| Description 							| Required 		|
| :---------: 	| :----: 		| :-----------: 						| :--------: 	|
| **groupName** | String 		| Name of new group 					| **Yes** 		|
| description 	| String 		| Additional information of group 		| No 			|
| staffIDs 		| String Array 	| Array of assigned staffs to group 	| No 			|
| residentIDs 	| String Array 	| Array of assigned residents to group 	| No 			|
| affiliationID | String 		| Affiliation ID the group belong to 	| No 			|

**Response return:**

| Status code 	| Status 		 | Response body 	 |
| :-----------: | :------: 		 | :-------------: 	 |
| 200 			| Success 		 | Group object 	 |
| 500 			| Internal error | Error from server |

[Go to Top](#API-Endpoints)

### `GET` /api/groups/:groupID
Get 'SPECIFIC' group information by sending groupID in URL

e.g. /api/groups/lklu402dj03j54

**Response return:**

| Status code 	| Status 		 | Response body 	 |
| :-----------: | :------: 		 | :-------------: 	 |
| 200 			| Success 		 | Group object 	 |
| 500 			| Internal error | Error from server |

[Go to Top](#API-Endpoints)

### `PUT` /api/groups/:groupID
Update 'SPECIFIC' group information

**Request body:**

Part of `POST` [/api/groups](#POST-/api/groups) body

**Response return:**

| Status code 	| Status 		 | Response body 	 |
| :-----------: | :------: 		 | :-------------: 	 |
| 200 			| Success 		 | Group object 	 |
| 500 			| Internal error | Error from server |

[Go to Top](#API-Endpoints)

### `DELETE` /api/groups/:groupID
Delete 'SPECIFIC' group

**Response return:**

| Status code 	| Status 		 | Response body 	 |
| :-----------: | :------: 		 | :-------------: 	 |
| 200 			| Success 		 | Group object 	 |
| 500 			| Internal error | Error from server |

[Go to Top](#API-Endpoints)