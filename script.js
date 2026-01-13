function openResume() {
  document.getElementById("resumePopup").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumePopup").style.display = "none";
}
function openCert(file, title) {
  document.getElementById("certPopup").style.display = "flex";
  document.getElementById("certFrame").src = file;
  document.getElementById("certTitle").innerText = title;
  document.getElementById("certDownload").href = file;
}

function closeCert() {
  document.getElementById("certPopup").style.display = "none";
  document.getElementById("certFrame").src = "";
}

