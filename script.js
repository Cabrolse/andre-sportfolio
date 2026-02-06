const p = document.getElementById("copyMe");
p.addEventListener("click", async () => {
    const text = p.textContent;
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied:", text);
    } catch (err) {
        console.error("Failed to copy:", err);
    }
});