describe("Canvas App", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
    await page.setRequestInterception(true);
  });

  it("should display the index page", async () => {
    await expect(page.title()).resolves.toMatch("Empower - Canvas");
  });

  it("should navigate to the new note page and create a note", async () => {
    await page.click('[href="/new"]');
    await page.waitForSelector("form");
    await page.focus("#createNoteForm");
    await page.type("#aboutName", "TestName");
    await page.type("#canvasMessage", "Test Message");

    const form = await page.waitForSelector("form");

    const about = await form.$("#aboutName");
    const message = await form.$("#canvasMessage");

    const nameText = await about.evaluate((el) => el.value);
    const messageText = await message.evaluate((el) => el.value);

    expect(nameText).toEqual("TestName");
    expect(messageText).toEqual("Test Message");
  });
});
