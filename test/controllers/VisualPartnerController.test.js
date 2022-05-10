const VisualPartnerController = require("./../../lib/controllers/VisualPartnerController")
const read = require ("./../../lib/utils/Reader");

describe ("Tests for Controller", () =>{

    test ("1.Get all Students" , ()=> {
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
        const visualpartner2 =  VisualPartnerController.getStudents();
        expect(visualpartner2[0].id).toBe(visualpartner.id);
        expect(visualpartner2[0].name).toBe(visualpartner.name);
        expect(visualpartner2[0].email).toBe(visualpartner.email);
        expect(visualpartner2[0].credits).toBe(visualpartner.credits);
        expect(visualpartner2[0].enrollments).toEqual(visualpartner.enrollments);
        expect(visualpartner2[0].previousCourses).toBe(visualpartner.previousCourses);
        expect(visualpartner2[0].haveCertification).toBe(visualpartner.haveCertification);
    });

    test ("2. Get Emails", ()=>{
        const emails = ["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz","Howell@visualpartnership.xyz"]
        const emails2 =  VisualPartnerController.getStudentsByCertification(true)
        expect(emails2[0]).toBe(emails[0])
        expect(emails2[1]).toBe(emails[1])
        expect(emails2[2]).toBe(emails[2])
        expect(emails2[3]).toBe(emails[3])
    });

    test ("2. Get Students with credits major to 500", ()=>{
        const visualpartner2 =  VisualPartnerController.getStudentsByCredits(500)
        expect(visualpartner2.length).toBe(27)
    });
});