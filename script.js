function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to update data container with a scrolling effect
function updateDataContainer() {
  const followersData = document.getElementById('followers-data');
  const followingData = document.getElementById('following-data');

  // Update data with random values between 1 and 40
  const newFollowersValue = getRandomNumber(0, 100000); // Used to be 7 Billion but removed because of RAM usage over 100% 0_0
  const newFollowingValue = getRandomNumber(1, 150);

  // Apply scrolling effect to followers and following data
  followersData.innerText = newFollowersValue;
  followingData.innerText = newFollowingValue;

  // Apply scrolling effect only if the values change
  if (newFollowersValue !== parseInt(followersData.innerText) || newFollowingValue !== parseInt(followingData.innerText)) {
    followersData.classList.add('scroll-effect');
    followingData.classList.add('scroll-effect');

    // Remove the scrolling effect after a short delay
    setTimeout(() => {
      followersData.classList.remove('scroll-effect');
      followingData.classList.remove('scroll-effect');
    }, 1000);
  }
}

// Initial call to start the update loop
updateDataContainer();

// Set interval to update data every random 1-5 seconds
setInterval(updateDataContainer, getRandomNumber(1000, 5000));

// Post code VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

function switchHeart(postId) {
  const heartIcon = document.getElementById(`heart_icon_${postId}`);

  // Ensure that the heartIcon element exists
  if (heartIcon) {
    // Toggle the heart icon source based on its current source
    if (heartIcon.src.endsWith('img/heart_outline.png')) {
      heartIcon.src = 'img/heart_filled.png';
      console.log(`Liked post ${postId}!`);
    } else {
      heartIcon.src = 'img/heart_outline.png';
      console.log(`Unliked post ${postId}!`);
    }
  }
}
