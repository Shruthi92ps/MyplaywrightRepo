import { test } from '../fixtures/orangehrm.fixture';

test('TC03: open My Info', async ({ authenticatedDashboard, myInfoPage }) => {
  await authenticatedDashboard.openMyInfo();
  await myInfoPage.expectOpen();
});