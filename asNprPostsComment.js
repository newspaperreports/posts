// Comment Section Area
// ✅ Firebase config বসান এখানে
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbFSCL1Fz-O4c2mhppptMKAAdjDhXz3b0",
    authDomain: "newspaper-reports-live-comment.firebaseapp.com",
    databaseURL: "https://newspaper-reports-live-comment-default-rtdb.firebaseio.com",
    projectId: "newspaper-reports-live-comment",
    storageBucket: "newspaper-reports-live-comment.appspot.com",
    messagingSenderId: "1098835117794",
    appId: "1:1098835117794:web:77a9bed9be4b8132df40bb",
    measurementId: "G-0P8LJ1Z2KT"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  function submitComment() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Fill in all the boxes!");
      return;
    }

    const now = new Date();
    const time = now.toLocaleString();

    db.ref("comments").push({
      name: name,
      email: email,
      message: message,
      time: time
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  db.ref("comments").limitToLast(5).on("value", snapshot => {
  const commentsContainer = document.getElementById("comments");
  commentsContainer.innerHTML = "";

  const data = snapshot.val();
  const commentArray = [];

  for (let id in data) {
    commentArray.push(data[id]);
  }

  commentArray.reverse(); // নতুন কমেন্ট আগে দেখানোর জন্য

  commentArray.forEach(c => {
    const el = document.createElement("div");
    el.className = "comment-item";
    el.innerHTML = `<strong>${c.name}</strong><br><small>${c.time}</small><p>${c.message}</p>`;
    commentsContainer.appendChild(el);
    });
  });