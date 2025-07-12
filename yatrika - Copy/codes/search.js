  document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();

    if (!query) return alert("Please enter a search term.");

    // 👉 Placeholder for Node.js backend call
    // Example: fetch(`/api/search?query=${encodeURIComponent(query)}`)

    console.log("Searching for:", query);
    alert(`Searching for tour package: "${trekid}"`);
  });
