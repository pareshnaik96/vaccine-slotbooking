# vaccine-slotbooking

## Assignment - Vaccine SlotBooking

Key points

(for user)

Register user (Mandatory fields: Name, PhoneNumber, Age, Pincode, Aadhar No)
User can login through his PhoneNumber and password (set during registration)
User should be able to see the available time slots on a given day for vaccine registration (first/second dose based on his vaccination status)
Users can register a slot for the first/second dose of the vaccine (example: register for 1st dose on 1st June 11 AM).
Users should be able to register for the second dose, only after completing their first dose of vaccine. Once the registered time slot is lapsed, the user should be considered as vaccinated for that registered dose (first/second).
User can update/change his registered slot, till 24 hours prior to his registered slot time

(for admin)

Login using admin credentials (There won’t be any api for registering the admin. His credentials should be manually created in the database)
Check the total users registered and [filter them by Age/Pincode/Vaccination status (none/First dose completed/All completed)] - Optional
Check the registered slots for the vaccine (first dose /second dose/total) on a given day

Vaccine slot details

Assume that vaccination drive is happening only from 1st June ‘21 to 30th June ‘21
Timings of the vaccine : 10 AM to 5 PM everyday
Each vaccine slot will be of duration 30 minutes. (So slots will be like 10:00 AM to 10:30 AM, 10:30 AM to 11:00 AM etc)
In each vaccine slot there will be 10 vaccine doses available (vaccine dose is same for first/second doses. So both users with first dose or second dose can register). So total available vaccine doses => 301410 => 4,200
Once 10 vaccine doses in a slot is registered, that time slot shouldn’t be available for further registrations (unless the registered user modifies his time slot to a different slot)

### Models

- User Model
```yaml
{ 
  name: {string, mandatory},
  phoneNumber: {string, mandatory, unique},
  age: {number, mandatory}, 
  pincode: {number, mandatory, valid pincode},
  aadharNo: {number, mandatory, valid aadhar number},
  password:{string,mandatory,8-15 character,encoded password}
  createdAt: {timestamp},
  updatedAt: {timestamp}
}
```

- Slot Model
```yaml
{ 
  slotDate: {string, mandatory},
  slotTime: {string, mandatory}, 
  totalSlot: {number, mandatory},
  bookedSlot: {number, mandatory,default:0},
  availableSlot: {number, mandatory,default:10},
  createdAt: {timestamp},
  updatedAt: {timestamp},
}
```

- Booking Model
```yaml
{ 
  userId: {ObjectId, mandatory, refs to user model},
  doseType: {string, mandatory, enum:["First","Second"]},
  slotDate: {string, mandatory},
  slotTime: {string, mandatory},
  status: {string, enum:["pending", "completed", "cancelled"],default: "pending"}
  cancellable: {boolean, default: true},
}
```

## User APIs 
### POST /register
- Create a user document from request body.
- Return HTTP status 201 on a succesful user creation. Also return the user document. The response should be a JSON object.
- Return HTTP status 400 if no params or invalid params received in request body. The response should be a JSON.

### POST /login
- Allow an user to login with their mobile number and password.
- On a successful login attempt return a JWT token contatining the userId, exp, iat. The response should be a JSON object.
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object.

## Slot API
### POST /slot/:adminId
- Create slot from request body. Get adminId in path param.
- Make sure the adminId is a valid adminId by checking the admin exist in the users collection.
- Return HTTP status 201 on a succesful slot creation. Also return the document. The response should be a JSON object.
- Return HTTP status 400 for an invalid request with a response body.

### GET /slot
- Returns all slots in the collection that are present. 
- Return the HTTP status 200 if any documents are found.
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
- Filter books list by applying filters. Query param can have any combination of below filters.
  - By slotDate
  - By slotTime
  example of a query url: slot?filtername=filtervalue&f2=fv2

## Booking APIs
### POST /booking/:userId
- Add booking for the slot in booking collection.
- Check if the slot available . Send an error response with appropirate status code if not available.
- Update the related slot by increasing its bookedSlot and decreasing its availableSlot count
- Return the updated booking document with data on successful operation. The response body should be in the form of JSON object.

### PUT /booking/:userId
- Update the booking by - status.
- Check if the userId exists .Send an error response with appropirate status code if the booking does not exist.
- Get booking details like userId,dose type,slot date,slot time,status,cancellable in request body.
- Return the updated booking document with all data on successful operation. The response body should be in the form of JSON object.

### Authentication
- for make sure all the routes are protected.

### Authorisation
- for make sure that only the owner of the user is able to cancelled the booking.
- In case of unauthorized access return an appropirate error.
