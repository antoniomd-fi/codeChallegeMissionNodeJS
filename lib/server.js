const VisualPartnerController = require("./controllers/VisualPartnerController");
const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partner-Ship Code Challenge"});
});

app.get("/v1/students", (request, response)=>{
    const students = VisualPartnerController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails/:certification", (request, response)=>{
    const certification=request.params.certification;
    const emails = VisualPartnerController.getStudentsByCertification(certification);
    response.json(emails);
});

app.get("/v1/estudents/credits/:credits", (request, response)=>{
    const credits= request.params.credits;
    const students = VisualPartnerController.getStudentsByCredits(credits);
    response.json(students);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});