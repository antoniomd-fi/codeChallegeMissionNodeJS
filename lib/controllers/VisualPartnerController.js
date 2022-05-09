const VisualPartnersService = require("./../../lib/services/VisualPartnersService");
const read = require ("./../../lib/utils/Reader");

class VisualPartnerController{
    static getStudents(){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getStudents(visualpartners);
    }

    static getStudentsByCertification (){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getEmailsCertificationsStudents(visualpartners);
    }

    static getStdentsByCredits(){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getStudentsToCredits(visualpartners);
    }

}

module.exports = VisualPartnerController