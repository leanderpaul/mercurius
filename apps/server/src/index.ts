async function initServer() {
  const { app } = await import('./server');

  const PORT = process.env.PORT || 8080;

  app.listen(PORT);
}

initServer();
