import { test } from '../fixtures/orangehrm.fixture';

test('TC01: login and validate the dashboard', async ({ authenticatedDashboard }) => {
  await authenticatedDashboard.expectOpen();
});