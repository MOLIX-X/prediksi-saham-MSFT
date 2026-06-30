const model = {"features": ["Pembukaan", "Tertinggi", "Terendah", "Vol.", "Perubahan%", "day", "week", "month", "year"], "means": [174.01469950293716, 175.6431676457298, 172.25872571170356, 29.205892453682786, 0.08780840488025304, 15.79755987347492, 26.535924084952555, 6.5042928151830095, 2018.9945774966109], "scales": [123.29204091090809, 124.38345432693373, 122.06875066396343, 13.520274316971062, 1.638589938433942, 8.745156992266807, 14.929210791448796, 3.4215241460884793, 3.145940722910203], "coefficients": [-51.98351676640441, 87.31443083601243, 87.96754298820963, 0.01980866772633405, 0.6394722896990324, -0.01597108318879248, -0.051441139973960937, 0.027264723719965467, -0.023778444631631146], "intercept": 174.0236918210574};
const priceData = [{"label": "Jan 2014", "value": 36.35}, {"label": "Feb 2014", "value": 37.24}, {"label": "Mar 2014", "value": 38.99}, {"label": "Apr 2014", "value": 40.13}, {"label": "Mei 2014", "value": 39.92}, {"label": "Jun 2014", "value": 41.36}, {"label": "Jul 2014", "value": 43.21}, {"label": "Agu 2014", "value": 44.26}, {"label": "Sep 2014", "value": 46.41}, {"label": "Okt 2014", "value": 45.2}, {"label": "Nov 2014", "value": 48.41}, {"label": "Des 2014", "value": 47.49}, {"label": "Jan 2015", "value": 45.51}, {"label": "Feb 2015", "value": 43.08}, {"label": "Mar 2015", "value": 42.13}, {"label": "Apr 2015", "value": 43.47}, {"label": "Mei 2015", "value": 47.53}, {"label": "Jun 2015", "value": 45.96}, {"label": "Jul 2015", "value": 45.61}, {"label": "Agu 2015", "value": 45.51}, {"label": "Sep 2015", "value": 43.56}, {"label": "Okt 2015", "value": 48.7}, {"label": "Nov 2015", "value": 53.89}, {"label": "Des 2015", "value": 55.4}, {"label": "Jan 2016", "value": 52.4}, {"label": "Feb 2016", "value": 51.38}, {"label": "Mar 2016", "value": 53.38}, {"label": "Apr 2016", "value": 54.05}, {"label": "Mei 2016", "value": 50.97}, {"label": "Jun 2016", "value": 50.92}, {"label": "Jul 2016", "value": 54.1}, {"label": "Agu 2016", "value": 57.72}, {"label": "Sep 2016", "value": 57.29}, {"label": "Okt 2016", "value": 58.4}, {"label": "Nov 2016", "value": 59.93}, {"label": "Des 2016", "value": 62.12}, {"label": "Jan 2017", "value": 63.19}, {"label": "Feb 2017", "value": 64.11}, {"label": "Mar 2017", "value": 64.84}, {"label": "Apr 2017", "value": 66.17}, {"label": "Mei 2017", "value": 68.92}, {"label": "Jun 2017", "value": 70.52}, {"label": "Jul 2017", "value": 72.01}, {"label": "Agu 2017", "value": 72.82}, {"label": "Sep 2017", "value": 74.34}, {"label": "Okt 2017", "value": 77.94}, {"label": "Nov 2017", "value": 83.72}, {"label": "Des 2017", "value": 84.76}, {"label": "Jan 2018", "value": 90.08}, {"label": "Feb 2018", "value": 91.37}, {"label": "Mar 2018", "value": 92.9}, {"label": "Apr 2018", "value": 93.21}, {"label": "Mei 2018", "value": 96.98}, {"label": "Jun 2018", "value": 100.56}, {"label": "Jul 2018", "value": 104.64}, {"label": "Agu 2018", "value": 108.68}, {"label": "Sep 2018", "value": 112.24}, {"label": "Okt 2018", "value": 109.21}, {"label": "Nov 2018", "value": 107.3}, {"label": "Des 2018", "value": 104.39}, {"label": "Jan 2019", "value": 104.14}, {"label": "Feb 2019", "value": 107.93}, {"label": "Mar 2019", "value": 115.13}, {"label": "Apr 2019", "value": 122.79}, {"label": "Mei 2019", "value": 126.35}, {"label": "Jun 2019", "value": 131.99}, {"label": "Jul 2019", "value": 138.1}, {"label": "Agu 2019", "value": 136.38}, {"label": "Sep 2019", "value": 138.12}, {"label": "Okt 2019", "value": 139.23}, {"label": "Nov 2019", "value": 148.1}, {"label": "Des 2019", "value": 154.18}, {"label": "Jan 2020", "value": 164.0}, {"label": "Feb 2020", "value": 178.72}, {"label": "Mar 2020", "value": 152.55}, {"label": "Apr 2020", "value": 169.04}, {"label": "Mei 2020", "value": 182.34}, {"label": "Jun 2020", "value": 192.7}, {"label": "Jul 2020", "value": 207.08}, {"label": "Agu 2020", "value": 214.35}, {"label": "Sep 2020", "value": 208.81}, {"label": "Okt 2020", "value": 212.89}, {"label": "Nov 2020", "value": 214.14}, {"label": "Des 2020", "value": 217.96}, {"label": "Jan 2021", "value": 221.98}, {"label": "Feb 2021", "value": 240.07}, {"label": "Mar 2021", "value": 233.67}, {"label": "Apr 2021", "value": 255.58}, {"label": "Mei 2021", "value": 247.4}, {"label": "Jun 2021", "value": 259.02}, {"label": "Jul 2021", "value": 281.5}, {"label": "Agu 2021", "value": 294.31}, {"label": "Sep 2021", "value": 296.87}, {"label": "Okt 2021", "value": 303.54}, {"label": "Nov 2021", "value": 335.87}, {"label": "Des 2021", "value": 332.81}, {"label": "Jan 2022", "value": 308.74}, {"label": "Feb 2022", "value": 298.73}, {"label": "Mar 2022", "value": 295.75}, {"label": "Apr 2022", "value": 288.81}, {"label": "Mei 2022", "value": 266.73}, {"label": "Jun 2022", "value": 259.5}, {"label": "Jul 2022", "value": 262.21}, {"label": "Agu 2022", "value": 280.56}, {"label": "Sep 2022", "value": 247.71}, {"label": "Okt 2022", "value": 237.04}, {"label": "Nov 2022", "value": 237.28}, {"label": "Des 2022", "value": 245.64}, {"label": "Jan 2023", "value": 237.28}, {"label": "Feb 2023", "value": 259.7}, {"label": "Mar 2023", "value": 266.74}, {"label": "Apr 2023", "value": 288.64}, {"label": "Mei 2023", "value": 314.51}, {"label": "Jun 2023", "value": 334.66}, {"label": "Jul 2023", "value": 341.69}, {"label": "Agu 2023", "value": 324.49}, {"label": "Sep 2023", "value": 326.04}, {"label": "Okt 2023", "value": 328.94}, {"label": "Nov 2023", "value": 368.35}, {"label": "Des 2023", "value": 372.58}, {"label": "Jan 2024", "value": 389.45}, {"label": "Feb 2024", "value": 408.99}, {"label": "Mar 2024", "value": 416.79}, {"label": "Apr 2024", "value": 413.26}, {"label": "Mei 2024", "value": 417.54}, {"label": "Jun 2024", "value": 438.34}, {"label": "Jul 2024", "value": 445.34}, {"label": "Agu 2024", "value": 412.53}, {"label": "Sep 2024", "value": 424.23}, {"label": "Okt 2024", "value": 419.75}, {"label": "Nov 2024", "value": 418.94}, {"label": "Des 2024", "value": 441.12}];
const exampleData = {"tanggal": "2024-12-27", "pembukaan": 434.6, "tertinggi": 435.22, "terendah": 426.35, "volume": 18.12, "perubahan": -1.73, "terakhir": 430.53};
function weekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(),0,1));
  return Math.ceil((((target - yearStart) / 86400000) + 1)/7);
}
function predict(values) {
  let result = model.intercept;
  values.forEach((value, i) => {
    const z = (value - model.means[i]) / model.scales[i];
    result += model.coefficients[i] * z;
  });
  return result;
}
function drawChart() {
  const canvas = document.getElementById('priceChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height, pad = 50;
  ctx.clearRect(0, 0, w, h);
  const values = priceData.map(d => d.value);
  const min = Math.min(...values), max = Math.max(...values);
  ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
  for (let i=0;i<=4;i++) {
    const y = pad + i*(h-2*pad)/4;
    ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(w-pad,y); ctx.stroke();
    const label = (max - i*(max-min)/4).toFixed(0);
    ctx.fillStyle = '#64748b'; ctx.font = '12px Arial'; ctx.fillText(label, 8, y+4);
  }
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = pad + i*(w-2*pad)/(values.length-1);
    const y = h - pad - ((v-min)/(max-min))*(h-2*pad);
    if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#334155'; ctx.font = '12px Arial';
  ctx.fillText(priceData[0].label, pad, h-16);
  ctx.fillText(priceData[priceData.length-1].label, w-pad-70, h-16);
}
function setupPrediction() {
  const form = document.getElementById('predictionForm');
  const result = document.getElementById('predictionResult');
  const status = document.getElementById('predictionStatus');
  document.getElementById('fillExample').addEventListener('click', () => {
    document.getElementById('tanggal').value = exampleData.tanggal;
    document.getElementById('pembukaan').value = exampleData.pembukaan;
    document.getElementById('tertinggi').value = exampleData.tertinggi;
    document.getElementById('terendah').value = exampleData.terendah;
    document.getElementById('volume').value = exampleData.volume;
    document.getElementById('perubahan').value = exampleData.perubahan;
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = new Date(document.getElementById('tanggal').value);
    const values = [
      Number(document.getElementById('pembukaan').value),
      Number(document.getElementById('tertinggi').value),
      Number(document.getElementById('terendah').value),
      Number(document.getElementById('volume').value),
      Number(document.getElementById('perubahan').value),
      date.getDate(), weekNumber(date), date.getMonth()+1, date.getFullYear()
    ];
    const y = predict(values);
    result.textContent = '$' + y.toFixed(2);
    const open = values[0];
    status.className = 'status';
    if (y > open + 1) { status.textContent = 'Prediksi lebih tinggi dari harga pembukaan. Terdapat potensi kenaikan berdasarkan pola historis.'; status.classList.add('up'); }
    else if (y < open - 1) { status.textContent = 'Prediksi lebih rendah dari harga pembukaan. Terdapat potensi penurunan berdasarkan pola historis.'; status.classList.add('down'); }
    else { status.textContent = 'Prediksi relatif dekat dengan harga pembukaan. Pergerakan terlihat cukup stabil.'; status.classList.add('neutral'); }
  });
}
window.addEventListener('load', () => { drawChart(); setupPrediction(); });
