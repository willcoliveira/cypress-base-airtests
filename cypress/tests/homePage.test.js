import common from '../pages/common.js';
import homePage from '../pages/homePage.js';
import signUpPage from '../pages/signupPage.js';

const commonfeat = new common();
const homepage = new homePage();
const signuppage = new signUpPage();

describe('Home Page', () => {
    beforeEach(() => {
        commonfeat.visitPage('home');
    });

    it(`should verify home page information sucessfully`, () => {
        homepage.assertPageInformation();
    });

    it(`should open sign up page sucessfully`, () => {
        commonfeat.visitByText(`Sign up for free`);
        signuppage.assertPageInformation();
    });
});