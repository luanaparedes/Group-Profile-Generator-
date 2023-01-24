const Manager = require('../lib/Manager');
const manager = new Manager('Kim', '22', 'kimwolt@gmail.com', '505');
//manager test
describe ('Manager Class', () => {
    it('gets constructor values for maganer class', () => {
        expect(manager.name).toBe('Kim');
        expect(manager.id).toBe('22');
        expect(manager.email).toBe('kimwolt@gmail.com');
        expect(manager.officeNumber).toBe('505');
    });
    
    describe ('getName', () => {
        it('returns manager name', () => {
            expect(manager.getName()).toBe('Kim');
        });
    });

    describe ('getId', () => {
        it('returns manager ID number', () => {
            expect(manager.getId()).toBe('22');
        });
    });

    describe ('getEmail', () => {
        it('returns manager email address', () => {
            expect(manager.getEmail()).toBe('kimwolt@gmail.com');
        });
    });
    
    describe ('getOfficeNumber', () => {
        it('returns manager office number', () => {
            expect(manager.getOfficeNumber()).toBe('505');
        });
    });
    
    describe ('getRole', () => {
        it('returns eployee role, in this case mamager', () => {
            expect(manager.getRole()).toBe('Manager');
        });
    });
});