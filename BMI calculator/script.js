function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100; // cm → m
  let result = document.getElementById("result");
  let statusDiv = document.getElementById("status");

  if (weight > 0 && height > 0) {
    let bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `Your BMI is <b>${bmi}</b>`;
    
    let status = "";
    let className = "";

    if (bmi < 18.5) {
      status = "Underweight";
      className = "underweight";
    } else if (bmi < 24.9) {
      status = "Normal weight";
      className = "normal";
    } else if (bmi < 29.9) {
      status = "Overweight";
      className = "overweight";
    } else {
      status = "Obese";
      className = "obese";
    }

    statusDiv.innerHTML = status;
    statusDiv.className = "status " + className;

  } else {
    result.innerHTML = "⚠ Please enter valid values!";
    statusDiv.innerHTML = "";
    statusDiv.className = "status";
  }
}