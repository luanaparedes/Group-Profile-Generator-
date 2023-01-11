const Intern = require('../lib/Intern');
const intern = new Intern('Kim', '22', 'kimwolt@gmail.com', 'RVCC');

describe ('Intern Class', () => {
    it('gets constructor values for intern class', () => {
        expect(intern.name).toBe('Kim');
        expect(intern.id).toBe('22');
        expect(intern.email).toBe('kimwolt@gmail.com');
        expect(intern.school).toBe('RVCC');
    });
    
    describe ('getName', () => {
        it('returns intern name', () => {
            expect(intern.getName()).toBe('Kim');
        });
    });

    describe ('getId', () => {
        it('returns intern ID number', () => {
            expect(intern.getId()).toBe('22');
        });
    });

    describe ('getEmail', () => {
        it('returns intern email address', () => {
            expect(intern.getEmail()).toBe('kimwolt@gmail.com');
        });
    });
    
    describe ('getSchool', () => {
        it('returns intern school name', () => {
            expect(intern.getSchool()).toBe('RVCC');
        });
    });
    
    describe ('getRole', () => {
        it('returns eployee role, in this case intern', () => {
            expect(intern.getRole()).toBe('Intern');
        });
    });
});