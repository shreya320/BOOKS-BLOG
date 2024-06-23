document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the search form element
  const searchForm = document.getElementById('search-form');

  // Check if the search form exists
  if (searchForm) {
      // Add an event listener to the form's submit event
      searchForm.addEventListener('submit', (e) => {
          // Prevent the default form submission behavior
          e.preventDefault();
          
          // Get the value entered in the search input and convert it to lowercase
          const searchInput = document.getElementById('search-input').value.toLowerCase();

          // Check if the search input matches any of the book titles
          if (searchInput === 'dead poets society') {
              // Open a new browser window/tab with the corresponding blog page
              window.open('blog1.html', '_blank');
          } else if (searchInput === 'the running grave') {
              window.open('blog2.html', '_blank');
          } else if (searchInput === 'atomic habits') {
              window.open('blog3.html', '_blank');
          } else {
              // Display an alert message if the book is not found
              alert('Book not found');
          }
      });
  }
});
