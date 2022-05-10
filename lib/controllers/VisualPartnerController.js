const VisualPartnersService = require("./../../lib/services/VisualPartnersService");
const read = require ("./../../lib/utils/Reader");

class VisualPartnerController{
    static getStudents(){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getStudents(visualpartners);
    }

    static getStudentsByCertification (certification){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getEmailsCertificationsStudents(visualpartners,certification);
    }

    static getStudentsByCredits(credits){
        const visualpartners = read.readJsonFile("visualpartners.json");
        return VisualPartnersService.getStudentsToCredits(visualpartners,credits);
    }

}

module.exports = VisualPartnerController