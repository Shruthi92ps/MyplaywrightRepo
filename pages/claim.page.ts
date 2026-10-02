import { Page } from '@playwright/test';

export class ClaimPage {
  constructor(private readonly page: Page) {}

  async expectOpen(): Promise<void> {
    await this.page.getByRole('heading', { name: 'Claim' }).waitFor();
  }
}