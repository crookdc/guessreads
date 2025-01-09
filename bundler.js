document.addEventListener("DOMContentLoaded", async () => {
    let configuration = await chrome.storage.sync.get({
        genres: true,
        ratings: true,
    });
    const head = document.getElementsByTagName("head").item(0);
    for (const [type, enabled] of Object.entries(configuration)) {
        if (!enabled) {
            continue;
        }
        const link = document.createElement("link");
        link.href = chrome.runtime.getURL(`style/show_${type}.css`);
        link.type = "text/css";
        link.rel = "stylesheet";
        head.appendChild(link);
    }
});
