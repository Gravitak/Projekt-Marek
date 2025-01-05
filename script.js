function calculateGPS() {
    // Get input values
    const lat1 = parseFloat(document.getElementById('lat1').value);
    const lon1 = parseFloat(document.getElementById('lon1').value);
    const lat2 = parseFloat(document.getElementById('lat2').value);
    const lon2 = parseFloat(document.getElementById('lon2').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const totalTime = parseFloat(document.getElementById('totalTime').value);
    const time = parseFloat(document.getElementById('time').value);

    // Calculate speed (v = d / t)
    const speed = distance / totalTime;

    // Calculate distance to the maintenance point (s_u = v * t_u)
    const su = speed * time;

    // Interpolate latitude and longitude
    const latU = lat1 + (su / distance) * (lat2 - lat1);
    const lonU = lon1 + (su / distance) * (lon2 - lon1);

    // Display results
    document.getElementById('resultLat').textContent = latU.toFixed(6);
    document.getElementById('resultLon').textContent = lonU.toFixed(6);
    document.getElementById('result').style.display = 'block';
}
