import { expect, Page } from '@playwright/test';

export class MyInfoPage {
  constructor(private readonly page: Page) {}

  async expectOpen(): Promise<void> {
    await this.page.getByRole('heading', { name: 'Personal Details' }).waitFor();
  }

  async fillEmployeeFullName(name: string): Promise<void> {
    await this.page.locator('input[name="firstName"]').fill(name);
  }

  async expectFirstName(name: string): Promise<void> {
    await expect(this.page.locator('input[name="firstName"]')).toHaveValue(name);
  }
}