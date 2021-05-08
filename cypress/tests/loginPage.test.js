import common from '../pages/common.js';
import loginPage from '../pages/loginPage.js';

const commonfeat = new common();
const loginpage = new loginPage();


const invalidPsw = ['$$$$$', 'te1232132.xt', 'stringdummy123.'];

describe('Login Page', () => {
    beforeEach(() => {
        commonfeat.visitPage('login');
    });

    it(`should login successfully`, () => {
        loginpage.addUserValidCredentials();
        loginpage.assertUserLoggedin();
    });

    invalidPsw.forEach((invalidPsw) => {
        it(`should not login with wrong password - ${invalidPsw}`, () => {
            loginpage.assertPasswordErrorMessage(invalidPsw);
        });
    });
});