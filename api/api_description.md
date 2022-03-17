# Api Description

## getTrainings
// name        : getTrainings
// type:       : get
// description : return all Trainings from database 
// parameters  :
// callback    : trainings[]

## getTrainingsBetweenDates
// name        : getTrainingsBetweenDates
// type:       : get
// description : return specific Trainings from database between two date's 
// parameters  : dateFrom: date(isoString) , dateTo: date(isoString)
// callback    : trainings[]

## getEventsOfTraining
// name        : getEventsOfTraining
// type:       : get
// description : return Events of a specific training
// parameters  : training_id: number
// callback    : events[]

## putTraining
// name        : putTraining
// type:       : put
// contentType : application/json
// description : insert or update a Training
// parameters  : training_id?: number, name?: string, description?: string, referrer_id?: number, price?: number
// callback    : message: string

## putEvent 
// name        : putEvent
// type:       : put
// contentType : application/json
// description : insert or update a Event
// parameters  : event_id: number, date?: string, training_id?: number
// callback    : message: string

## postBooking
// name        : postBooking
// type:       : post
// contentType : application/json
// description : insert a new booking 
// parameters  : event_id: number
// callback    : message: string


### Styling Help
https://www.markdownguide.org/basic-syntax/