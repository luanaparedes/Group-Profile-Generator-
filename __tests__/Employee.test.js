const Employee = require('../lib/Employee');
const employee = new Employee('Kim', '22', 'kimwolt@gmail.com');
//employee test
describe ('Employee Class', () => {
    it('gets constructor values for employee class', () => {
        expect(employee.name).toBe('Kim');
        expect(employee.id).toBe('22');
        expect(employee.email).toBe('kimwolt@gmail.com');
    });
    
    describe ('getName', () => {
        it('returns employee name', () => {
            expect(employee.getName()).toBe('Kim');
        });
    });

    describe ('getId', () => {
        it('returns employee ID number', () => {
            expect(employee.getId()).toBe('22');
        });
    });

    describe ('getEmail', () => {
        it('returns employee email address', () => {
            expect(employee.getEmail()).toBe('kimwolt@gmail.com');
        });
    });
    
    describe ('getRole', () => {
        it('returns eployee role, in this case employee', () => {
            expect(employee.getRole()).toBe('Employee');
        });
    });
});