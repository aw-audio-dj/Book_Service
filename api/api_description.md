# Api Description

## getTrainings
name        : trainings
type:       : get
description : return all Trainings from database 
parameters  :
callback    : trainings[]

## getTrainingsBetweenDates
name        : trainingsBetweenDates
type:       : get
description : return specific Trainings from database between two date's 
parameters  : dateFrom: date(isoString) , dateTo: date(isoString)
callback    : trainings[]

## getEventsOfTraining
name        : eventsOfTraining
type:       : get
description : return Events of a specific training
parameters  : training_id: number
callback    : events[]

## putTraining
name        : training
type:       : put
contentType : application/json
description : insert or update a Training
parameters  : training_id?: number, name?: string, description?: string, referrer_id?: number, price?: number
callback    : message: string

## putEvent 
name        : event
type:       : put
contentType : application/json
description : insert or update a Event
parameters  : arguments: {event_id?: number, date?: string, training_id?: number}
callback    : message: string

## putBooking
name        : booking
type:       : put
description : insert a new booking 
parameters  : event_id: number
callback    : message: string

## getReferrer
name        : referrer
type:       : get
description : return a referrer by referrer_id or all referrers 
parameters  : referrer_id?:number
callback    : referrer[]

## getReferrer
name        : bookings
type:       : get
description : return bookings by event_id or all bookings 
parameters  : event_id?:number
callback    : bookings[]


### Styling Help
https:ww.markdownguide.org/basic-syntax/