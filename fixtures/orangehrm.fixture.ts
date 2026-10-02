import { test as base, expect } from '@playwright/test';
import { ClaimPage } from '../pages/claim.page';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { MyInfoPage } from '../pages/my-info.page';

type OrangeHrmFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  claimPage: ClaimPage;
  myInfoPage: MyInfoPage;
  authenticatedDashboard: DashboardPage;
};

export const test = base.extend<OrangeHrmFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  claimPage: async ({ page }, use) => {
    await use(new ClaimPage(page));
  },
  myInfoPage: async ({ page }, use) => {
    await use(new MyInfoPage(page));
  },
  authenticatedDashboard: async ({ loginPage, dashboardPage }, use) => {
    await loginPage.open();
    await loginPage.login('ADMIN', 'admin@111');
    await use(dashboardPage);
  },
});

export { expect };