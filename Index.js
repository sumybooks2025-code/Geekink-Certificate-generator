
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Certificate Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="form-container">
    <h2>Certificate Generator</h2>
    <input type="text" id="studentName" placeholder="Student Name">
    <input type="text" id="courseName" placeholder="Course Name">
    <input type="date" id="date">
    <button id="generateBtn">Generate Certificate</button>
  </div>

  <div class="certificate hidden" id="certificate">
    <h1>Certificate of Completion</h1>
    <p>This is to certify that</p>
    <h2 id="previewName">Student Name</h2>
    <p>has successfully completed</p>
    <h3 id="previewCourse">Course Name</h3>
    <p>on <span id="previewDate">Date</span></p>
  </div>

  <button id="downloadBtn" class="hidden">Download Certificate</button>

  <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
