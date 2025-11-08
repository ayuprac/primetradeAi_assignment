
module.exports = (err, req, res, next) => {
  // Friendly server log with stack
  console.error('--- ERROR START ---');
  console.error('Message:', err.message);
  console.error('Name:', err.name);
  console.error('Stack:', err.stack);
  console.error('--- ERROR END ---');

  // If error has status , use it, otherwise 500
  const status = err.statusCode || err.status || 500;

  // In development send full error
  res.status(status).json({
    success: false,
    message: err.message || 'Server Error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
};
