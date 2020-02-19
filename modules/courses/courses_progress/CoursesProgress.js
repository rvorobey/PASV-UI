import { expect } from 'chai';
import CoursesProgressPage from '../../_PageObjects/CoursesProgressPage';
import LoginPage from '../../_PageObjects/LoginPage';

describe('COURSES PROGRESS PAGE', () => {
    before(() => {
        LoginPage.login();
    });

    it('should choose click link Courses', () => {
        const element = CoursesProgressPage.coursesLink;
        element.click();
        browser.pause(5000);
    });

    // it('should choose click link Progress', () => {
    //     const element = CoursesProgressPage.progressLink;
    //     element.click();
    //     browser.pause(3000);
    // });

    it('should go to courses progress page', () => {
        browser.pause(3000);
        expect(CoursesProgressPage.h1.getText()).equal('Courses');
    });

});


