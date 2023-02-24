const curretVersion = "calculator-v1"

const assets = [
    "index.html",
    "script.js",
    "style.css",
    "metric-calculator.js",
    "assets/calculator.svg",
]

self.addEventListener("install", async (event) => {
    const cache = await caches.open(curretVersion)
    await cache.addAll(assets)
})

self.addEventListener("activate", async (event) => {
    const versions = await caches.keys()
    for (const version of versions) {
        if (version !== curretVersion) {
            caches.delete(version)
        }
    }
})

self.addEventListener("fetch", async (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response ?? fetch(event.request))
    )
})
