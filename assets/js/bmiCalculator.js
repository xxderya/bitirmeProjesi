function calculateBMI() {
  const bmiIndicator = document.getElementById("bmiIndicator");
  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value) / 100;

  let indicatorValue = "0";
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    bmiIndicator.style.left = indicatorValue;
    return;
  }

  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    indicatorValue = "15%";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    indicatorValue = "30%";
  } else if (bmi >= 25 && bmi < 29.9) {
    indicatorValue = "45%";
  } else {
    indicatorValue = "85%";
  }

  bmiIndicator.style.left = indicatorValue;
}
