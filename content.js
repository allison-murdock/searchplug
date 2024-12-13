*DRAFT*

// Filter LinkedIn Jobs
function filterJobs() {
    let jobCards = document.querySelectorAll('[class*="job-card"]'); // Adjust selector if necessary
    jobCards.forEach((card) => {
        let description = card.innerText.toLowerCase();
        let mentionsHigherDegree = description.includes("master's") || description.includes("phd");
        let mentionsBachelors = description.includes("bachelor's") || description.includes("bachelor");

        if (mentionsHigherDegree && !mentionsBachelors) {
            card.style.display = "none"; // Hide the job card
        }
    });
    console.log("Filtered jobs requiring Master's or PhD unless Bachelor's is also accepted.");
}

// Run the filter function
filterJobs();

// Observe dynamic content changes
let observer = new MutationObserver(() => {
    filterJobs();
});

let jobListContainer = document.querySelector('[class*="jobs-search-results-list"]');
if (jobListContainer) {
    observer.observe(jobListContainer, { childList: true, subtree: true });
}
