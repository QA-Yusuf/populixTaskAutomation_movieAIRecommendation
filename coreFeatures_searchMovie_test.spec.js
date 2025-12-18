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

test('TCP02_Successfully Search Genre Movie Romance', async ({ page }) => {
    //Input romance di field pencarian
  await page.locator(`//input[@type='text']`).fill('romance');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini

    //Assertion/verifikasi genre romance muncul 
  await expect(page.getByText(/romance/i)).not.toHaveCount(0);  
});

test('TCP03_Successfully Search movies genre horror, top rating, and released in 2020', async ({ page }) => {
    //Input best horror film in 2020 di field pencarian
  await page.locator(`//input[@type='text']`).fill('best horror film in 2020');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies genre horror, top rating (5-9), and released in 2020 muncul 
  await expect(page.getByText(/horror/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2020/i)).not.toHaveCount(0);
  await expect(page.getByText(/⭐\s[5-9]\.\d\/10/)).not.toHaveCount(0);
});

test('TCP04_Successfully Search movies hollywood with bad rating, and released in 2024', async ({ page }) => {
    //Input bad hollywood film in 2024 di field pencarian
  await page.locator(`//input[@type='text']`).fill('bad hollywood film in 2024');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi movies hollywood with bad rating (1-5), and released in 2024 muncul 
  await expect(page.getByText(/hollywood/i)).not.toHaveCount(0);  
  await expect(page.getByText(/2024/i)).not.toHaveCount(0);
  await expect(page.getByText(/⭐\s[1-5]\.\d\/10/)).not.toHaveCount(0);
});

test('TCP05_Successfully Search movies with school, students, and teacher', async ({ page }) => {
    //Input film about school di field pencarian
  await page.locator(`//input[@type='text']`).fill('film about school');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi Match Recommendations muncul
  await expect(page.getByRole('heading', { name: 'Match Recommendations'})).toBeVisible({timeout: 30000}); //Response Time AI nya terlalu lama sehingga automationnya sering gagal disini
    //Assertion/verifikasi  keyword school, students, teacher muncul 
  await expect(page.getByText(/school/i)).not.toHaveCount(0);  
  await expect(page.getByText(/students/i)).not.toHaveCount(0);
  await expect(page.getByText(/teacher/i)).not.toHaveCount(0);
});

test('TCN03_Unsuccessfully Search movies with random text', async ({ page }) => {
    //Input random text di field pencarian
  await page.locator(`//input[@type='text']`).fill('asdfghjkl');
    //Klik cari
  await page.getByRole('button', { name: 'Search' }).click();
    //Assertion/verifikasi error message muncul
  await expect(page.getByText(/No movie found matching "asdfghjkl". Try searching for titles like "The Dark Knight", "Inception", or "Superbad"./i)).toBeVisible()
});