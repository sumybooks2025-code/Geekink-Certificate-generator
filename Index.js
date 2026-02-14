function generateCertificate() {
  const name = document.getElementById("nameInput").value;
  const certDiv = document.getElementById("certificate");
  const certName = document.getElementById("certName");

  if (name.trim() === "") {
    alert("Please enter a valid name.");
    return;
  }

  // Insert the name into the certificate
  certName.textContent = name;

  // Show the certificate
  certDiv.classList.remove("hidden");
}
