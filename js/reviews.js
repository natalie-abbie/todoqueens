// select the form and review feed
const reviewForm = document.querySelector('form');
const reviewFeed = document.querySelector('#feed');
let email, fullName, message;
let reviews = [];

// console.log(reviewForm);


function createCard(review) {
    let {fullName, message} = review;
    const reviewCard = document.createElement('div');
       reviewCard.classList= 'review card';

       // h4 for reviewer name
       const cardHeader = document.createElement('h4');
       cardHeader.className = 'reviewer';

       // div holding the card details
       const cardContent = document.createElement('div');
       cardContent.className = 'card-content';

       //paragraph holding the review text
       const cardText = document.createElement('p');
       cardText.className = 'review-text';

       cardHeader.textContent = fullName;
       reviewCard.appendChild(cardHeader); // adds reviewer name to the DOM
       
       // add review
       cardText.textContent = message;
       cardContent.appendChild(cardText);

       // now add reviews to the page
       reviewCard.appendChild(cardContent);
       reviewFeed.appendChild(reviewCard);
}

// process form submit
reviewForm.addEventListener('submit', (e) => {
   e.preventDefault();
   // exract data from the form
   email = reviewForm.email.value;
   fullName = reviewForm.full_name.value;
   message = reviewForm.message.value;

   // minor validation
   if(email && fullName && message) {
    const reviewDetails = { email, fullName, message };  // shorthand property assignment for Objects
    reviews.push(reviewDetails);
    createCard(reviewDetails)
    localStorage.setItem('reviews', JSON.stringify(reviews));
    reviewForm.reset();

   } else {
       alert('provide all the necessary data.')
   }
});

// get previously stored data
let rvs = localStorage.getItem('reviews');
let reviewStore = rvs ? JSON.parse(rvs): 'no reviews';

// 
if(reviewStore.length && reviewStore != 'no reviews') {
  reviews = [...reviewStore];
  reviewStore.forEach(review => {
      createCard(review);
  })
}


