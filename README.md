# comp2068-node_api_project

Endpoints: http://localhost:4000/cuisines , http://localhost:4000/foods , http://localhost:4000/users , http://localhost:4000/authenticate

User credentials: user id: "607b5294c67c2c5648fdf40e", name: parth, email: test@tester.com, password: asdf

secret_token { "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwN2I1Mjk0YzY3YzJjNTY0OGZkZjQwZSIsImVtYWlsIjoidGVzdEB0ZXN0ZXIuY29tIn0sImlhdCI6MTYxODY5NjE5OH0.Sko5X2FjeNz9C5w94HTfOdU9iN09ws_sjTDzWmN9G2M" }

cuisines can be created/updated using secret_token, name, corresponsing id (for "put" and "delete")

foods can be created using name, description, cuisine id, secret_token, updated using name, secret_token, cuisine id, description, id of that food, deleted using id and secret_token
