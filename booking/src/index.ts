import { app } from "../../service"
import route from "./Routes/route";




// app.use('/', (req, res) => {
//     res.send({ message: "Working" })
// })



app.use('/', route)

app.listen(process.env.PORT || 3002, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});