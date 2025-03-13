import app from "./app";

const port = ((process.env.npm_lifecycle_script == 'jest') ? 5001 : Number(process.env.PORT) || 5000 );

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})