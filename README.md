# url-shortener

This app is designed to take in a url and shorten it by encoding it to a 7 character id. You may also decode the id and get the original url back.


## Setup

- Clone this repo `git clone https://github.com/jsmld/url-shortener.git`
- Run an `npm install`
- Start the server with `npm start`
- Visit `localhost:3000/` to get started!


## Endpoints

### `/encode`

Here is where you shorten your url. You can pass your url as a query param like so:
```
localhost:3000/encode?url=YOUR_URL
```

### `/decode`

Here is where you can decode your shortened url (code). You can pass your code as a query param like so:
```
localhost:3000/decode?code=YOUR_CODE
```


## Improvements

There is always room for improvement so please feel free to visit the issues to contribute!
