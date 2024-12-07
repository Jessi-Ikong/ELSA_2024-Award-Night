// Function to get votes from local storage or initialize an empty object
function getVotes() {
    const storedVotes = localStorage.getItem('votes');
    return storedVotes ? JSON.parse(storedVotes) : {};
}

// Function to save votes to local storage
function saveVotes(votes) {
    localStorage.setItem('votes', JSON.stringify(votes));
}

// Get stored votes at the start
const votes = getVotes();

function vote(contestant, category) {
    // Check if the category has already been voted for
    if (votes[category]) {
        alert(`You have already voted in this category.`);
        return;
    }
    // Record the contestant for the category and save it to local storage
    votes[category] = contestant;
    saveVotes(votes);
    alert(`You have voted for ${contestant} in this category.`);
}

function submitVotes() {
    console.log("Submitted votes:", votes); // Optional: Log votes for debugging
    alert("Thank you for voting!");
    window.location.href = "end.html"; // Redirect to another page
}
