// Add event listener to the search input
document.querySelector('input[type="search"]').addEventListener('input', function() {
    // Get the search query
    var searchQuery = this.value.toLowerCase();
    
    // Get all the portfolio items
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Loop through each portfolio item
    portfolioItems.forEach(function(item) {
        // Get the title and description of the portfolio item
        var title = item.querySelector('h2').textContent.toLowerCase();
        var description = item.querySelector('p').textContent.toLowerCase();
        
        // Check if the search query matches the title or description
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            // Show the portfolio item
            item.style.display = 'block';
        } else {
            // Hide the portfolio item
            item.style.display = 'none';
        }
    });
});