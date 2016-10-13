# Sensehat API

A simple API for Sense HAT sensors using NodeJS and ExpressJS. Basically it is a Rest API to expose and save data of the sensors.(MongoDB as a database)
Sense Hat on Raspberry Pi can POST to this dashboard for saving data on Mongo or directly save data on Mongo.

With the API which has been exposed, it is possible to build web dashboard or mobile app or anything to consume the API.

## Pre Installation

It requires MongoDB instance for saving data.

```bash
sudo apt-get install mongodb-server
```

## Installation

```bash
npm install
```

```bash
npm start
```

## API

- For saving data to mongo db, needs POST with payload like: *{sensor:"$sensor_name" , value: "$value" , timestamp: "$ts_in_milliseconds_unixtime"}*:
```
POST /sensehat
```

- For getting all sensors data
```
GET /sensehat
```

- For getting last value of one sensor
```
GET /sensor/$sensor_name
```

- For getting all values of one sensor
```
GET /sensor/$sensor_name/historic
```

- For deleting all data
```
DELETE /sensehat/deleteall
```