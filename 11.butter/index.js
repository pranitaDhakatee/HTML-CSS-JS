function openModal(image) {
  // Get information from the data-info attribute
  var information = image.parentNode.getAttribute('data-info');

  // Get the modal
  var modal = document.createElement('div');
  modal.className = 'modal';

  // Create the modal content
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Create an image element inside the modal
  var modalImage = document.createElement('img');
  modalImage.src = image.src;
  modalImage.alt = 'Clicked Image';
  modalContent.appendChild(modalImage);

  // Create a paragraph element inside the modal
  var modalInfo = document.createElement('p');
  modalInfo.textContent = information;
  modalContent.appendChild(modalInfo);

  // Append the modal content to the modal
  modal.appendChild(modalContent);

  // Append the modal to the body
  document.body.appendChild(modal);

  // Close the modal when clicking outside the modal
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      document.body.removeChild(modal);
    }
  });
}
