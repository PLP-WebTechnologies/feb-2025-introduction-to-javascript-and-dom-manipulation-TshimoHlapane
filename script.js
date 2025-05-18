// Change text content
document.getElementById('changeTextBtn').addEventListener('click', function() {
  const description = document.getElementById('description');
  description.textContent = 'You clicked the button! Text has been changed.';
  description.style.color = 'purple'; // Modify CSS via JavaScript
});

// Add/Remove an element
document.getElementById('toggleBoxBtn').addEventListener('click', function() {
  const container = document.getElementById('boxContainer');
  const existingBox = document.getElementById('dynamicBox');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement('div');
    newBox.id = 'dynamicBox';
    newBox.textContent = 'This box was added dynamically!';
    newBox.style.padding = '20px';
    newBox.style.marginTop = '20px';
    newBox.style.backgroundColor = 'pink';
    container.appendChild(newBox);
  }
});
