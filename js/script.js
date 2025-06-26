console.log("Javascript is working!");

window.addEventListener("DOMContentLoaded", () => { 
  //Luas Segitiga
  const luassegitiga = document.getElementById("form-luas");
  const kelilingsegitiga = document.getElementById("form-keliling");
  
  if (luassegitiga) {
    luassegitiga.addEventListener("submit", (e) => {
      e.preventDefault();
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      
      if (!isNaN(alas) && !isNaN(tinggi)) {
        const hasil = (alas * tinggi)/2;
        document.getElementById("output-luas").innerText =
          `L = 1/2 x a x t
          L = 1/2 x ${alas} x ${tinggi}
          L = ${hasil}`;
      }
    });
  }
  function resetluas() {
      document.getElementById('form-luas').innerHTML = '';
      document.getElementById('alas').value = '';
      document.getElementById('tinggi').value = '';
      document.getElementById('outputluas').innerHTML = '';
      
}

//keliling segitiga
  if (kelilingsegitiga) {
    kelilingsegitiga.addEventListener("submit", (e) => {
      e.preventDefault();
      const a = parseFloat(document.getElementById("sisi1").value);
      const b = parseFloat(document.getElementById("sisi2").value);
      const c = parseFloat(document.getElementById("sisi3").value);
      if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        const hasil = a + b + c;
        document.getElementById("output-keliling").innerText =
          `K = a + b + c 
          K = ${a} + ${b} + ${c}
          K = ${hasil}`;
      }
    });
  }
});


  














// Hitung Luas
document.getElementById("triangle-area-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Harap masukkan angka valid untuk alas dan tinggi.");
    return;
  }

  const luas = 0.5 * alas * tinggi;

  const resultDiv = document.getElementById("luas-result");
  resultDiv.innerHTML = `
    L = 1/2 x a x t <br>
    L = 1/2 x ${alas} x ${tinggi} <br>
    L = ${luas.toFixed(2)} cm²
  `;
});

function resetLuas() {
      document.getElementById('luas-result').innerHTML = '';
}
function resetKeliling() {
  document.getElementById('keliling-result').innerHTML = '';
}


// Hitung Keliling
document.getElementById('triangle-perimeter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const a = parseFloat(document.getElementById('sisiA').value);
  const b = parseFloat(document.getElementById('sisiB').value);
  const c = parseFloat(document.getElementById('sisiC').value);
  const keliling = a + b + c;

  document.getElementById('keliling-result').innerHTML =
    `K = S1 + S2 + S3 <br>K = ${a} + ${b} + ${c} <br>K = ${keliling.toFixed(2)} cm`;
});







function hitungluas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;

    if (luasSegitiga) {
    luasSegitiga.addEventListener("submit", (e) => {
      e.preventDefault();
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      if (!isNaN(alas) && !isNaN(tinggi)) {
        const hasil = 0.5 * alas * tinggi;
        document.getElementById("output-luas").innerText =
          `L = 1/2 * ${alas} * ${tinggi}\nL = ${hasil}`;
      }
    });
  }

    var luas = (alas * tinggi) / 2;
    

}

