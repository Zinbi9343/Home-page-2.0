    
        // Function to fetch search suggestions
        function fetchSuggestions(query) {
            // In a real application, you would fetch suggestions from a backend API
            const suggestions = [
                "Neon lights",
                "Neon signs",
                "Neon colors",
                "Neon art",
                "Neon wallpaper"
            ];

            // Display suggestions in the dropdown
            const suggestionsList = document.getElementById('suggestions');
            suggestionsList.innerHTML = '';
            suggestions.forEach(suggestion => {
                if (suggestion.toLowerCase().includes(query.toLowerCase())) {
                    const li = document.createElement('li');
                    li.textContent = suggestion;
                    suggestionsList.appendChild(li);
                }
            });
            suggestionsList.style.display = 'block';
        }

        // Event listener for input in the search bar
        document.getElementById('search-input').addEventListener('input', function() {
            const query = this.value;
            fetchSuggestions(query);
        });

        // Event listener for clicking on a suggestion
        document.getElementById('suggestions').addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                document.getElementById('search-input').value = event.target.textContent;
                document.getElementById('suggestions').style.display = 'none';
            }
        });

        // Event listener for voice search
        document.getElementById('voice-search').addEventListener('click', function(event) {
            event.preventDefault();
            // Implement voice search functionality
            alert('Voice search is not implemented yet!');
        });

        // Update footer text dynamically
        const currentYear = new Date().getFullYear();
        document.getElementById('footer-text').textContent += ` | ${currentYear}`;
    
