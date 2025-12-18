const {test,expect} = require('@playwright/test');

test.beforeEach(async({page}) => {
 await page.goto('https://movie-finder-d128b.web.app/login');
    //Input email
  await page.getByRole('textbox', { name: 'Email' }).fill('test@mail.com');
    //Input Password
  await page.getByRole('textbox', { name: 'Password' }).fill('8f4&nVO">^82');
    //Klik tombol signIn
  await page.getByRole('button', { name: 'Sign In' }).click();
    //Assertion/Verifikasi Berhasil Login
  await expect(page.getByRole('heading', { name: 'Movie Recommender' })).toHaveText('Movie Recommender');
});

test('TCP06_Successfully Search movies genre horror, bad rating, and released in 2020 consistence in 3 times searching (1x)', async ({ page }) => {
    //Input bad horror film in 2020 di field pencarian
  await page.locator(`//input[@type='text']`).fill('bad horror film in 2020');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies genre horror, bad rating (1-5), and released in 2020 muncul konsisten
  await expect(page.getByText(/horror/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2020/i)).not.toHaveCount(0);
  await expect(page.getByText(/⭐\s[1-5]\.\d\/10/)).not.toHaveCount(0);
});

test('TCP06_Successfully Search movies genre horror, bad rating, and released in 2020 consistence in 3 times searching (2x)', async ({ page }) => {
    //Input bad horror film in 2020 di field pencarian
  await page.locator(`//input[@type='text']`).fill('bad horror film in 2020');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies genre horror, bad rating (1-5), and released in 2020 muncul konsisten
  await expect(page.getByText(/horror/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2020/i)).not.toHaveCount(0);
  await expect(page.getByText(/⭐\s[1-5]\.\d\/10/)).not.toHaveCount(0);
});

test('TCP06_Successfully Search movies genre horror, bad rating, and released in 2020 consistence in 3 times searching (3x)', async ({ page }) => {
    //Input bad horror film in 2020 di field pencarian
  await page.locator(`//input[@type='text']`).fill('bad horror film in 2020');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies genre horror, bad rating (1-5), and released in 2020 muncul konsisten
  await expect(page.getByText(/horror/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2020/i)).not.toHaveCount(0);
  await expect(page.getByText(/⭐\s[1-5]\.\d\/10/)).not.toHaveCount(0);
});

test('TCP07_Successfully Search comedy movies last year', async ({ page }) => {
    //Input film comedy last year di field pencarian
  await page.locator(`//input[@type='text']`).fill('film comedy last year');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi  film comedy tahun 2024 muncul
  await expect(page.getByText(/comedy/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2024/i)).not.toHaveCount(0);
});

test('TCN04_Unsuccessfully Search horror movies and released in 2099', async ({ page }) => {
    //Input horror film released in 2099 di field pencarian
  await page.locator(`//input[@type='text']`).fill('horror film released in 2099');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies hollywood with bad rating (1-5), and released in 2024 muncul 
  await expect(page.getByText(/horror/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2099/i)).not.toHaveCount(0);
});
