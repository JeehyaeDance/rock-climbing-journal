# Climbing Day

## What is it?

a web app helping users to log their rock climbing activity and track with a weekly graph to see their improvement.

## Something isn't working as intended

Please feel free to open an issue or submit a pull request

## Development

1. Add a `.env.development` to your root directory with the following environment variables set:

```
DB_HOST
DB_NAME
DB_PORT
```

2. Add a `.env.production` to your root directory with the following environment variables set:

```
DB_HOST
DB_NAME
DB_PORT
DB_USER
DB_PASSWORD
```

3. Install the npm packages within the root directory.

```
npm install
```

4. Now you should be able to run the program locally. Start the program in both the root directory.

for development mode.

```
npm start
```

for production mode.

```
npm start:prod
```
