// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to shuffle girls in rooms
function shuffleGirlsInRooms() {
  const roomContainers = document.querySelectorAll('.room');
  const allStudents = [];

  // Collect all students from all rooms
  roomContainers.forEach(roomContainer => {
    const studentElements = Array.from(roomContainer.querySelectorAll('.student'));
    allStudents.push(...studentElements);

    // Clear the room
    roomContainer.innerHTML = `<h4>${roomContainer.querySelector('h4').textContent}</h4>`;
  });

  // Shuffle all students
  const shuffledStudents = shuffleArray(allStudents);

  // Distribute shuffled students to rooms
  roomContainers.forEach(roomContainer => {
    shuffledStudents.splice(0, 3).forEach(student => {
      roomContainer.appendChild(student);
    });
  });
}

// Add a click event listener to the shuffle button
const shuffleButton = document.querySelector('.shuffle-button');
shuffleButton.addEventListener('click', shuffleGirlsInRooms);
