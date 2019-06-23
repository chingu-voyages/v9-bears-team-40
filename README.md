# Chapterly

A book-finding app created for Chingu's voyage-9 project.

## src Structure

├── Components # For storing single React components
├── Pages # Containers which represent views/screens of the app
├── routes # Routes for each Page
└── utils # Helper functions, etc which can be used across pages

## Development

You need to start the server (`npm run-script dev`) and the react app (`npm start`).

-- docker

1. docker-compose -f docker-compose.yml up

2. go to http://localhost:3000/

how to access database

1. while the docker container is running, make another terminal window
2. run docker conatiner ls command
3. copy the container id of postgres image
4. docker exec -it {container id} bash
5. you will be in the docker container bash.
6. run psql voyage-9-db postgres command

Created using create-react-app.
