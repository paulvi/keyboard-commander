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
    include 'levels/level-01.html';
    include 'levels/level-02.html';
    include 'levels/level-03.html';
    include 'levels/level-04.html';
    include 'levels/level-05.html';
    include 'levels/level-06.html';
    include 'levels/level-07.html';
    include 'levels/level-08.html';
    include 'levels/level-09.html';
    include 'levels/level-10.html';
  ?>
  </div>

  <?php if (php_sapi_name() == 'cli') : ?>
  <script src="keyboard-commander.js"></script>
  <?php else : ?>
  <script src="gamifier/gamifier.js"></script>
  <script src="keyboard-commander.js"></script>
  <script src="levels/level-01.js"></script>
  <script src="levels/level-02.js"></script>
  <script src="levels/level-03.js"></script>
  <script src="levels/level-04.js"></script>
  <script src="levels/level-05.js"></script>
  <script src="levels/level-06.js"></script>
  <script src="levels/level-07.js"></script>
  <script src="levels/level-08.js"></script>
  <script src="levels/level-09.js"></script>
  <script src="levels/level-10.js"></script>
  <?php endif; ?>
</body>
</html>
