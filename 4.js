function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") { // Check if the current element is "needle"
            return `found the needle at position ${i}`;
        }
    }
    return "needle not found"; // Handle case where "needle" is not found
}
