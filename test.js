beforeEach(async () => {
    page = await browser.newPage();
})

// Expected behaviour: both of these tests should fail
// Actual behaviour: only the second test fails

test('Error on page should trigger pageerror', async () => {
    await page.goto('data:text/html,<script>var x = window.nonsense.value;</script>')
});

test('Error in eval should trigger pageerror', async () => {
    await page.evaluate(() => {
        var x = window.nonsense.value;
    })
})
