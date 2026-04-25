(function () {
  if (!window.SHUDH_CONFIG || !window.SHUDH_CONFIG.firebase) return;
  if (typeof firebase === "undefined" || !firebase.initializeApp) return;
  if (!firebase.apps.length) firebase.initializeApp(window.SHUDH_CONFIG.firebase);

  var page = (window.location.pathname.split("/").pop() || "").toLowerCase();
  var isLogin = page === "login.html";

  firebase.auth().onAuthStateChanged(function (user) {
    if (isLogin) {
      if (user) window.location.replace("dashboard.html");
      return;
    }
    if (!user) window.location.replace("login.html");
  });
})();
