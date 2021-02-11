document.addEventListener('DOMContentLoaded', () => {
   const seachBtn = document.getElementById("seachBtn");
   seachBtn.addEventListener("click", searchReddit);
});

function searchReddit() {
    const query = document.getElementById("query").value.toString();
    console.log(`value: ${query}`);
    if (query != null || query.trim() !== "") {
        console.log("if statement is running");
        const url = "https://www.google.com/search?q=site%3Areddit.com+" + query;
        chrome.tabs.create({active: true, url: url});
    }
}
