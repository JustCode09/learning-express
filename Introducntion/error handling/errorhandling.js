//default error handker

application.get('/', (req, res) => {
    throw new Error('Something went wrong!'); // Simulate an error
});

//custom error handler
application.use((err,req,res,next)=>{
    console.log(err);// Log the error for debugging
    res.status(500).json({message:"oops! Something went wrong"}); // Send a JSON response with the error message
    
})

//synchronous error handler

application.get('/sync-error', (req, res) => {
    throw new Error('This is a synchronous error!'); // Simulate a synchronous error
});

// asynchronous error handler

application.get('/async-error', async(req, res, next) => {
   try{
    await Promise.reject(new Error('This is an asynchronous error!')); // Simulate an async error
   } catch (err) {
       next(err); // Pass the error to the error handler
   } 
});

//manage error with next(err)
application.get('/manual-error', (req, res, next) => {
    next(new Error('This is a manually triggered error!')); // Pass an error to the next middleware
});