import { test } from '../fixtures/orangehrm.fixture';

test('TC02: search for and open Claim', async ({ authenticatedDashboard, claimPage }) => {
  await authenticatedDashboard.searchAndOpen('Claim');
  await claimPage.expectOpen();
});