//Date Object    
// Logging date and time dynamically every minute
let calendar = document.getElementById('date');

// Function to update date and time
function updateDateTime() {
    let now = new Date();
    let options = {
        weekday: "short",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    calendar.innerText = ` ${now.toLocaleString("en-IE", options)}`;
}

// Update every minute
setInterval(updateDateTime, 60000);
updateDateTime();

//readmore/less

const showHide1 = () => {
  let readMoreDiv = document.querySelector("#more1");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none"
    btn1.textContent = "Read More..."
  } else {
    readMoreDiv.style.display = "block";
    btn1.textContent = "Read Less..."
  }
}

let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', showHide1);

//Gallery initialisation
//lightbox.option({
    //resizeDuration: 200, 
//});

//For Review Area
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Semantic UI rating component
  const ratingStars = $('#ratingStars');
  ratingStars.rating();

  // Handle form submission
  const submitButton = document.getElementById('submitRating');
  submitButton.addEventListener('click', () => {
    // Get the review text and rating value
    const reviewText = document.getElementById('reviewText').value.trim();
    const ratingValue = ratingStars.rating('get rating'); 

    // Update the display section
    document.getElementById('displayReview').textContent = reviewText || "No review provided.";
    document.getElementById('displayRating').textContent = ratingValue || "No rating provided.";
  });
});


