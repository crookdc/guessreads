const saveOptions = () => {
    const configuration = {
        genres: document.getElementById('genres').checked,
        ratings: document.getElementById('ratings').checked,
    };
    chrome.storage.sync.set({ ...configuration }).then(() => {
        const status = document.getElementById('status');
        status.textContent = 'Saved!';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
};

const restoreOptions = () => {
    chrome.storage.sync.get(
        { genres: true, ratings: true },
        (items) => {
            document.getElementById('genres').checked = items.genres;
            document.getElementById('ratings').checked = items.ratings;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);