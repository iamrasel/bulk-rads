async function bulkSelect(action) {
    let [tab] = await chrome.tabs.query({
        active: true, currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (selectedAction) => {
            document.querySelectorAll('td').forEach(td => {
                const radios = td.querySelectorAll('input[type="radio"]');
                if (radios.length === 2) {
                    const label = td.innerText.trim();
                    if (label.includes(selectedAction)) {
                        radios[1].click();
                    }
                }
            });
        },
        args: [action]
    });
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function(event) {
        bulkSelect(event.target.textContent);
    });
});