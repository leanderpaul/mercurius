/**
 * Importing the npm modules.
 */
import express from 'express';

/**
 * Defining the constants.
 */
const app = express();

/**
 * Defining the routes.
 */
app.get('*', (req, res) => res.json({ msg: 'Server Working !' }));

export { app };
export default app;
