import { test } from '../fixtures/orangehrm.fixture';

test('TC04: enter the employee full name', async ({ authenticatedDashboard, myInfoPage }) => {
  await authenticatedDashboard.openMyInfo();
  await myInfoPage.expectOpen();
  await myInfoPage.fillEmployeeFullName('shruthi');
  await myInfoPage.expectFirstName('shruthi');
});