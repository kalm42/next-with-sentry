# Next w/ Sentry

I was having such a difficult time deploying sentry with Next that I decided to make this. A minial install with sentry and sourcemaps. So that I can identify errors in production and actually stand a chance at fixing them.

## Setup

1. Have node installed.
2. Have an account or make an account with (Sentry)[https://sentry.io]
3. Clone or download this repo.
4. `cp sample.env .env`
5. Edit the `.env` file and replace the fake dsn with your own.
6. `yarn && now`

## How to Use

In `pages/index.js` there are several different Errors ready to throw. comment all but one out and test how the error gets shown in Sentry.

## Complaints about the code

Unless you have a PR in to fix it I don't want to hear it.
