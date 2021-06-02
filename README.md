# Empower-Canvas

This is a full-stack web app for managing notes about people. A single note is a `canvas_note` and a person is an `about_name`

## Functionality Overview

The app index page displays a list of most recent notes. I can search for a word within a note, or part of an `about_name`. Search is based on full words, and a search must be at least a 4-character-long word. ("dem" will return no results).

Clicking on any part of a note loads a page where I can edit the `about_name` or `canvas_message` for that note. I can also delete the note entirely from this page. Deletion is permanent and irrevocable.

If I click "New Note", I can create a new note.

## Limitations and

## Relevant Tools and Frameworks

The app uses NextJS for basic React configuration, with a API built around **serverless-mysql**. Each API route corresponds to a file, such as **create-note.ts**.

The front-end uses SWR ('stale while revalidate") hooks to manage data fetching and caching and **tailwind-css** for styling. All application code is in Typescript, with a few scripts in JS for managing local data.

## Running locally

1.  `yarn install`
2.  Local database setup: Create a file called `.env.local` with the following values:

`MYSQL_HOST` {mysql running locally, usually on 127.0.0.1}

`MYSQL_USERNAME`={admin username}
`MYSQL_PASSWORD`={admin password}
`MYSQL_PORT`={your local mysql port, usually 3306}
`MYSQL_DATABASE`=canvas

** Important Note: You will need to manually create the canvas database**

3. Run migrations and seed database with mock data: `yarn migrate and yarn seed`
4. Start local dev server: `yarn dev`
5. Navigate to app on localhost:3000

## Tests

`yarn test` to run the tests that are written in the amount of time spent on this project.
