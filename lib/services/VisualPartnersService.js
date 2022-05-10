class VisualPartnersService{
    static getStudents(visualpartners){
        return visualpartners
    }

    static getEmailsCertificationsStudents(visualpartners, certification){
        const studentsWithCertification = visualpartners.filter((student)=>student.haveCertification == certification);
        const studentsEmails = studentsWithCertification.map((student)=>student.email)
        return studentsEmails;
    }

    static getStudentsToCredits(visualpartners, credits){
        const studentsCredits = visualpartners.filter((student)=> student.credits > credits);
        return studentsCredits;
    }
}

module.exports = VisualPartnersService