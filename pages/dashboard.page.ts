import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async expectOpen(): Promise<void> {
    await this.page.getByRole('heading', { name: 'Dashboard' }).waitFor();
  }

  async searchAndOpen(searchTerm: string): Promise<void> {
    const search = this.page.getByPlaceholder('Search');
    await search.fill(searchTerm);
    await search.press('Enter');
  }

  async openMyInfo(): Promise<void> {
    await this.page.getByRole('link', { name: 'My Info' }).click();
  }
}