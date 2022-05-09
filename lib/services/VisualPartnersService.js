class VisualPartnersService{
    static getStudents(visualpartners){
        return visualpartners
    }

    static getEmailsCertificationsStudents(visualpartners){
        const studentsWithCertification = visualpartners.filter((student)=>student.haveCertification == true);
        const studentsEmails = studentsWithCertification.map((student)=>student.email)
        return studentsEmails;
    }

    static getStudentsToCredits(visualpartners){
        const studentsCredits = visualpartners.filter((student)=> student.credits > 500);
        return studentsCredits;
    }
}

module.exports = VisualPartnersService