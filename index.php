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

  <?php if (php_sapi_name() == 'cli') : ?>
  <script src="keyboard-commander.js"></script>
  <?php else : ?>
  <script src="gamifier/gamifier.js"></script>
  <script src="keyboard-commander.js"></script>
  <script src="levels/level-1.js"></script>
  <script src="levels/level-2.js"></script>
  <script src="levels/level-3.js"></script>
  <script src="levels/level-4.js"></script>
  <script src="levels/level-5.js"></script>
  <script src="levels/level-6.js"></script>
  <script src="levels/level-7.js"></script>
  <script src="levels/level-8.js"></script>
  <script src="levels/level-9.js"></script>
  <script src="levels/level-10.js"></script>
  <?php endif; ?>
</body>
</html>
