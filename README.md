# Next.js unstable_getServerSession Availability Issue

This repository demonstrates a common error when using the `unstable_getServerSession` function from the `next-auth` package within Next.js applications.  The `unstable_getServerSession` function, as its name suggests, is not always guaranteed to be available across all Next.js versions.  This can lead to runtime errors and unexpected behavior during application execution.

The `bug.js` file showcases the incorrect usage of this function, while `bugSolution.js` demonstrates the proper alternative for robust authentication.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` (assuming a `dev` script is configured in your `package.json`).
4. Observe the runtime error or unexpected behavior when attempting to access the page where `unstable_getServerSession` is used.

## Solution

Refer to `bugSolution.js` for a more stable solution.