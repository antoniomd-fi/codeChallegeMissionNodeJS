const Reader = require("./../../lib/utils/Reader");

describe ("Tests for Reader", () =>{

    test ("1.Read a JSON file" , ()=> {
        const visualpartner = {
            
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        };
        const visualpatner2 = Reader.readJsonFile("visualpartners.json");
        expect(visualpatner2[0].id).toBe(visualpartner.id);
        expect(visualpatner2[0].name).toBe(visualpartner.name);
        expect(visualpatner2[0].email).toBe(visualpartner.email);
        expect(visualpatner2[0].credits).toBe(visualpartner.credits);
        expect(visualpatner2[0].enrollments).toEqual(visualpartner.enrollments);
        expect(visualpatner2[0].previousCourses).toBe(visualpartner.previousCourses);
        expect(visualpatner2[0].haveCertification).toBe(visualpartner.haveCertification);
    });
    
});