# POTAGER MANAGEMENT API

A simple REST API from 'potager' management

### Prerequisite:

This is a Node.js project.
You must have `node.js` and `npm` installed in your computer


## Installation
Open a terminal from your project directory


Install packages dependencies

```
$ npm install
```

## Launching the app

### Environment variable:

Before starting make sure to copy the template file `.env.dist` to the root of the project, paste it and rename the pasted file to `.env`

Edit the `.env` file according to your environment parameters such as the database, the name of the tables, the host of your database server etc..


### Run app for develop
Run app by typing on your terminal from the root of the project :
```
$ npm run dev
```
Default port is `9292` but it can be changed based on `.env` file

Run tests :
```
$ npm run test
```

# REST API
## Get list of Plants

### Request
`GET http://localhost:9292/api/v1/plant`

    curl -i -H 'Accept: application/json' http://localhost:9292/api/v1/plant/

### Response
```
{
    "page": 1,
    "per_page": 10,
    "pre_page": null,
    "next_page": null,
    "total": 0,
    "total_pages": 1,
    "data": [
    ]
}
```

## Get list of Plants by Type (fruit or vegetable)

### Request
`GET http://localhost:9292/api/v1/plant?type=:type`

    curl --location --request GET 'http://localhost:9292/api/v1/plant?type=fruit'

### Response
```
{
    "page": 1,
    "per_page": 10,
    "pre_page": null,
    "next_page": null,
    "total": 0,
    "total_pages": 1,
    "data": [
    ]
}
```
## Create new Plants

### Request
`POST http://localhost:9292/api/v1/plant`

    curl --location --request POST 'http://localhost:9292/api/v1/plant' \
    --header 'Content-Type: application/json' \
    --data-raw '{
            "name": "Tomato",
            "type": "fruit",
            "description": "yoolo"
        }'

### Response
```
    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {
        "message": "Plant added succesfully",
        "data": {
            "name": "Tomato",
            "type": "fruit",
            "description": "yoolo",
            "id": "8c57bb50-f2f2-11ec-8c20-89adfa69c2f6",
            "updated": "2022-06-23T12:46:49.221Z",
            "state": "planted"
        }
    }
```

## Change a plant

### Request
`PUT http://localhost:9292/api/v1/plant`

    curl --location --request PUT 'http://localhost:9292/api/v1/plant' \
    --header 'Content-Type: application/json' \
    --data-raw '{
            "name": "Tomato",
            "type": "fruit",
            "description": "is growing everywhere",
            "id": "8c57bb50-f2f2-11ec-8c20-89adfa69c2f6"
    }'

### Response
```
    HTTP/1.1 20O OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 20O OK
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {
        "data": {
            "name": "Tomato",
            "type": "fruit",
            "description": "is growing everywhere",
            "id": "8c57bb50-f2f2-11ec-8c20-89adfa69c2f6",
            "updated": "2022-06-23T12:50:51.457Z"
        }
    }
```

## GET a plant

### Request
`GET http://localhost:9292/api/v1/plant/:id`

    curl --location --request GET 'http://localhost:9292/api/v1/plant/8c57bb50-f2f2-11ec-8c20-89adfa69c2f6'

### Response
```
    HTTP/1.1 20O OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 20O OK
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {
        "data": {
            "name": "Tomato",
            "type": "fruit",
            "description": "is growing everywhere",
            "id": "8c57bb50-f2f2-11ec-8c20-89adfa69c2f6",
            "updated": "2022-06-23T12:50:51.457Z"
        }
    }
```

## DELETE a plant

### Request
`DELETE http://localhost:9292/api/v1/plant/:id`

    curl --location --request DELETE 'http://localhost:9292/api/v1/plant/8c57bb50-f2f2-11ec-8c20-89adfa69c2f6'

### Response
```
    HTTP/1.1 20O OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 20O OK
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {
        "data": {
            "name": "Tomato",
            "type": "fruit",
            "description": "is growing everywhere",
            "id": "8c57bb50-f2f2-11ec-8c20-89adfa69c2f6",
            "updated": "2022-06-23T12:50:51.457Z"
        }
    }
```

## PAGINATE through plants

### Request
`GET http://localhost:9292/api/v1/plant?offset=:offset&limit=:limit`

    curl --location --request GET 'http://localhost:9292/api/v1/plant?offset=10&limit=1'

### Response
```
    HTTP/1.1 20O OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 20O OK
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {
        "page": 1,
        "per_page": 1,
        "pre_page": null,
        "next_page": 2,
        "total": 3,
        "total_pages": 3,
        "data": [
            {
                "name": "Coco",
                "type": "fruit",
                "description": "",
                "id": "2b00f950-f2d6-11ec-8c20-89adfa69c2f6",
                "updated": "2022-06-23T11:35:00.428Z",
                "state": "harvested"
            }
        ]
    }
```
