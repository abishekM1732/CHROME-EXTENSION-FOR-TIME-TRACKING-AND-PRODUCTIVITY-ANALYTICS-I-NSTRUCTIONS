let currentTab = null;
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  trackTime();
  const tab = await chrome.tabs.get(activeInfo.tabId);
  currentTab = getDomain(tab.url);
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    trackTime();
    currentTab = getDomain(tab.url);
    startTime = Date.now();
  }
});

function trackTime() {
  if (!currentTab) return;

  const timeSpent = Date.now() - startTime;

  // Ignore invalid tabs
  if (!currentTab) return;

  chrome.storage.local.get([currentTab], (result) => {
    const prevTime = result[currentTab] || 0;
    chrome.storage.local.set({
      [currentTab]: prevTime + timeSpent
    });
  });

  fetch("http://localhost:5000/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      site: currentTab,
      timeSpent
    })
  }).catch(() => {});
}

function getDomain(url) {
  try {
    // Ignore Chrome internal pages
    if (
      url.startsWith("chrome://") ||
      url.startsWith("chrome-extension://") ||
      url.startsWith("about:")
    ) {
      return null;
    }

    const hostname = new URL(url).hostname;

    // Ignore localhost & empty hosts
    if (
      hostname === "localhost" ||
      hostname === "" ||
      hostname === "127.0.0.1"
    ) {
      return null;
    }

    // Normalize (remove www.)
    return hostname.replace(/^www\./, "");

  } catch {
    return null;
  }
}

