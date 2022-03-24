# Booking Example Node Express Server

A Simple Node and Express Server to show REST API calls in combination with a sqlite Database, and an Angular Bootstrap Frontend. 
`https://github.com/aw-audio-dj/booking_service_client`
## Installation

* Download this Repo
* Use node v16.14.2 `https://nodejs.dev/download`
* Use SQLlite Browser to inspect the Database /database/db.sqlite `https://sqlitebrowser.org/`
* Recommended VS Code as Editor

## Usage
* Start the Server by download this repo 
* Open this Project by open Terminal (via VS-Code) and perform
```bash
npm install
```
* Start the API_Server which will run on Port 3010
```bash
npm run start
```
## Unit Tests
2 Unit Tests are included. If something went wrong, Please check package.json for scripts. The Unit Tests are made with Motcha and Chai
* REST Route `trainings` to get all Trainings via
```bash
npm run test_get_trainings
```

* REST Route `booking` to put a Booking (insert) via
```bash
npm run test_put_booking
```

## Api Description
### getTrainings
* **name**        : trainings  
* **type**        : get  
* **description** : return all Trainings from database   
* **parameters**  :   
* **callback**    : trainings[]  

### getTrainingsBetweenDates
* **name**        : trainingsBetweenDates  
* **type**       : get  
* **description** : return specific Trainings from database between two date's 
* **parameters**  : dateFrom: date(isoString) , dateTo: date(isoString)
* **callback**    : trainings[]

### getEventsOfTraining
* **name**        : eventsOfTraining
* **type**       : get
* **description** : return Events of a specific training
* **parameters**  : training_id: number
* **callback**    : events[]

### putTraining
* **name**        : training
* **type**       : put
* **contentType** : application/json
* **description** : insert or update a Training
* **parameters**  : training_id?: number, name?: string, description?: * string, referrer_id?: number, price?: number
* **callback**    : message: string

### putEvent 
* **name**        : event
* **type**       : put
* **contentType** : application/json
* **description** : insert or update a Event
* **parameters**  : arguments: {event_id?: number, date?: string, * training_id?: number}
* **callback**    : message: string

### putBooking
* **name**        : booking
* **type**       : put
* **description** : insert a new booking 
* **parameters**  : event_id: number
* **callback**    : message: string

## getReferrer
* **name**        : referrer
* **type**       : get
* **description** : return a referrer by referrer_id or all referrers 
* **parameters**  : referrer_id?:number
* **callback**    : referrer[]

### bookings
* **name**        : bookings
* **type**       : get
* **description** : return bookings by event_id or all bookings 
* **parameters**  : event_id?:number
* **callback**    : bookings[]


## License
[MIT]
