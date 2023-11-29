// You can write your own logic here to determine the actual url
window.app1Url = "http://localhost:3001"
window.app2Url = "http://localhost:3002"
window.storeUrl = "http://localhost:3003"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
