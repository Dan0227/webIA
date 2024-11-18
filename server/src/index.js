import app from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(4000)
console.log('App runing port',4000)


// Server/
// -nod_modules/
// -src/
// --controllers/
// ---auth.controller.js
// --libs/
// ---jwt.js
// --middlewares/
// ---validateToken.js
// --models/
// ---user.model.js
// --routes/
// ---auth.routes.js
// --schemas/
// --app.js
// --config.js
// --db.js
// --index.js
// -package-lock.json
// -package.json