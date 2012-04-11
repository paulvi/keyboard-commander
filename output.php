<!DOCTYPE html>
<html lang="en-ca">
<head>
  <meta charset="utf-8">
  <title>Keyboard Commander</title>
  <link rel="stylesheet" href="keyboard-commander.css">
</head>
<body>

  <div id="active-screen"></div>

  <div id="inactive-screens" hidden>
    <?php
      include 'screens/start.html';
      include 'screens/success.html';
      include 'screens/failure.html';
      include 'screens/level-success.html';
      include 'screens/level-failure.html';
      include 'levels/level-1.html';
      include 'levels/level-2.html';
      include 'levels/level-3.html';
      include 'levels/level-4.html';
      include 'levels/level-5.html';
      include 'levels/level-6.html';
      include 'levels/level-7.html';
      include 'levels/level-8.html';
      include 'levels/level-9.html';
      include 'levels/level-10.html';
    ?>
  </div>

  <script src="keyboard-commander.js"></script>
</body>
</html>

