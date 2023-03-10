const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kim', '22', 'kimwolt@gmail.com', 'githubuser');
//engineer etst
describe ('Engineer Class', () => {
    it('gets constructor values for engineer class', () => {
        expect(engineer.name).toBe('Kim');
        expect(engineer.id).toBe('22');
        expect(engineer.email).toBe('kimwolt@gmail.com');
        expect(engineer.github).toBe('githubuser');
    });
    
    describe ('getName', () => {
        it('returns engineer name', () => {
            expect(engineer.getName()).toBe('Kim');
        });
    });

    describe ('getId', () => {
        it('returns engineer ID number', () => {
            expect(engineer.getId()).toBe('22');
        });
    });

    describe ('getEmail', () => {
        it('returns engineer email address', () => {
            expect(engineer.getEmail()).toBe('kimwolt@gmail.com');
        });
    });
    
    describe ('getGithub', () => {
        it('returns engineer github user name', () => {
            expect(engineer.getGithub()).toBe('githubuser');
        });
    });
    
    describe ('getRole', () => {
        it('returns eployee role, in this case engineer', () => {
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});