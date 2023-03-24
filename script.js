const ghost = document.getElementById('ghost');
const faces = [
  '😀','😃','😄','😁','😆',
  '😅','😂','🤣','😊','🙂',
  '🙃','😉','😌','😍','😶',
  '😗','😙','😚','😦','🤨',
  '🤓','😎','🤩','😟','😑'
];

ghost.addEventListener('click', () => ghost.dataset.ghostFace = faces[Math.floor(Math.random() * faces.length)]);