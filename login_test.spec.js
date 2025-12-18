const {test,expect} = require('@playwright/test');

test('TCN01_Unsuccessfully Login by Invalid Credential', async ({ page }) => {
    //Akses link url
  await page.goto('https://movie-finder-d128b.web.app/login');
    //Input email
  await page.getByRole('textbox', { name: 'Email' }).fill('testmail.com');
    //Input Password
  await page.getByRole('textbox', { name: 'Password' }).fill('xcd');
    //Klik tombol signIn
  await page.getByRole('button', { name: 'Sign In' }).click();
    //Assertion input invalid
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveJSProperty('validity.valid', false);
    //Tutup browser
  await page.close();
});

test('TCN02_Unsuccessfully Login by Null Credential', async ({ page }) => {
    //Akses link url
  await page.goto('https://movie-finder-d128b.web.app/login');
    //Input email
  await page.getByRole('textbox', { name: 'Email' }).fill('');
    //Input Password
  await page.getByRole('textbox', { name: 'Password' }).fill('');
    //Klik tombol signIn
  await page.getByRole('button', { name: 'Sign In' }).click();
    //Assertion input invalid
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveJSProperty('validity.valid', false);
    //Tutup browser
  await page.close();
});

test('TCP01_Successfully Login by Valid Credential', async ({ page }) => {
    //Akses link url
  await page.goto('https://movie-finder-d128b.web.app/login');
    //Input email
  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
    //Input Password
  await page.getByRole('textbox', { name: 'Password' }).fill('8f4&nVO">^82');
    //Klik tombol signIn
  await page.getByRole('button', { name: 'Sign In' }).click();
    //Assertion Berhasil Login
  await expect(page.getByRole('heading', { name: 'Movie Recommender' })).toHaveText('Movie Recommender');
    //Tutup Browser
  await page.close();
});