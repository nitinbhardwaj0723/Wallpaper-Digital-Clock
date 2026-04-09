function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  // 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zero
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${day}, ${date} ${month} ${year}`;

  document.getElementById("time").textContent = timeString;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("date").textContent = dateString;
}

// Run clock immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Background Wallpaper Change

const wallpapers = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
];

let currentWallpaper = 0;

function changeWallpaper() {
  currentWallpaper++;
  
  if (currentWallpaper >= wallpapers.length) {
    currentWallpaper = 0;
  }

  document.body.style.backgroundImage = `url('${wallpapers[currentWallpaper]}')`;
}
//change wallpaper after every 10 seconds
setInterval(changeWallpaper, 10000);