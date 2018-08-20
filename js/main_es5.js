"use strict";
(function(a, b) {
  function c() {
    g(), u();
  }
  function g() {
    Promise.all([n(), p(), o()]).then(function(K) {
      var M = K[0];
      j(M), h(K[2]);
      var N = K[1];
      N.forEach(k),
        A.eachLayer(function(P) {
          P.options.fixed || A.removeLayer(P);
        });
      var O = Object.keys(C).reduce(function(P, Q) {
        var R = b.layerGroup(C[Q], { fixed: !1 });
        return (
          A.addLayer(R),
          (P['<img src="./img/' + Q + '_.png" class="controlIcon">'] = R),
          P
        );
      }, {});
      A.removeControl(D),
        (D = b.control
          .layers({}, O, { position: "bottomleft", collapsed: !1 })
          .addTo(A));
    });
  }
  function h(K) {
    var M = document.getElementById("tasks"),
      N =
        '<option value="\u8ACB\u9078\u64C7\u4EFB\u52D9">\u8ACB\u9078\u64C7\u4EFB\u52D9</option>' +
        K.map(function(O) {
          return '<option value="' + O + '">' + O + "</option>";
        }).join("");
    M.innerHTML = N;
  }
  function i(K) {
    var M = document.getElementById("pokestops_nearby"),
      N =
        '<option value="\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9">\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9</option>' +
        K.map(function(O) {
          return (
            '\n            <option value="' +
            O.poke_title +
            "\uFF20" +
            O.poke_lat +
            "\uFF20" +
            O.poke_lng +
            "\uFF20" +
            O.poke_image +
            '">\n                ' +
            O.poke_title +
            "\n            </option>"
          );
        }).join("");
    M.innerHTML = N;
  }
  function j(K) {
    K.forEach(function(M) {
      (B[M] = b.icon({
        iconUrl: "./img/" + M + "_.png",
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -18]
      })),
        (C[M] = []);
    });
  }
  function k(K) {
    var O = K.task.split("\uFF1A"),
      M = s(K.lat + "," + K.lng, "25.046266,121.517406"),
      Q =
        "https://5upergeo.github.io/PMGO-tasks-map/?lat=" +
        K.lat +
        "&lng=" +
        K.lng,
      R =
        new Date().toLocaleDateString() +
        "\n" +
        K.site_name +
        "\n" +
        K.task +
        "\n" +
        K.address +
        "\ngoogle map\uFF1A\nhttps://www.google.com.tw/maps/place/" +
        K.lat +
        "," +
        K.lng +
        "\n\u5730\u5716\u9023\u7D50\uFF1A\n" +
        Q,
      S = "http://line.naver.jp/R/msg/text/?" + encodeURIComponent(R),
      N =
        "\n            <div class='pokestops'>\n                <h3>" +
        K.site_name +
        "</h3>\n                <hr>\n                <b>" +
        O[0] +
        "</b><br>\u2714\uFE0F\uFF1A" +
        K["T&F"].T +
        ", \u274C\uFF1A" +
        K["T&F"].F +
        '\n                <div class="crop">\n                    <!-- <img src="https://images.weserv.nl/?url=' +
        K.image.replace(/^https?\:\/\//g, "") +
        '&w=70&h=70&il&trim=10&t=squaredown">  -->\n                    <img src="' +
        K.image +
        '">\n                </div>\n                <a href=' +
        M +
        ' target="_blank">\uD83D\uDE98google\u5C0E\u822A</a><br>\n                <a href=' +
        S +
        " target='_blank' class=\"line_share\"><img src=" +
        "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png" +
        '></a>\n                <a href="#" class="web_share" onclick="copy_text(this)" data-share_text = \'' +
        R +
        "'>\u8907\u88FD\u5206\u4EAB\u6587\u5B57</a>\n            </div>\n        ";
    (a.copy_text = function(T) {
      var U = document.createElement("textarea");
      (U.textContent = T.dataset.share_text),
        document.body.appendChild(U),
        U.select(),
        document.execCommand("copy"),
        U.remove();
    }),
      C[O[1]].push(
        b
          .marker([K.lat, K.lng], {
            icon: b.divIcon({
              className:
                1 <= K["T&F"].F - K["T&F"].T
                  ? "map-marker-fake map-marker"
                  : "map-marker",
              iconSize: [48, 48],
              iconAnchor: [24, 24],
              popupAnchor: [0, -18],
              html: '<div><img src="./img/' + O[1] + '_.png"></div>'
            })
          })
          .bindPopup(N)
      );
  }
  function l() {
    (E = !0),
      A.locate({ setView: !0, watch: !0, maxZoom: 20 }),
      (a.red = b
        .marker(y, {
          icon: b.icon({
            iconUrl: "./img/pikachu.gif",
            iconSize: [30, 48],
            iconAnchor: [15, 24]
          }),
          fixed: !0
        })
        .addTo(A)),
      (a.red._icon.style.display = "block");
  }
  function m() {
    (E = !1), A.stopLocate(), (a.red._icon.style.display = "none");
  }
  function n() {
    return fetch(v + "?method=get_tasks").then(function(K) {
      return K.json();
    });
  }
  function o() {
    return fetch(v + "?method=get_tasks_full").then(function(K) {
      return K.json();
    });
  }
  function p() {
    return fetch(v + "?method=get_existing_data").then(function(K) {
      return K.json();
    });
  }
  function q() {
    var K = new URLSearchParams(location.search),
      M = K.get("LineID") || "";
    return fetch(w + "?method=get_profile&LineID=" + M).then(function(N) {
      return N.json();
    });
  }
  function s(K, M) {
    return navigator.userAgent.match(/android/i)
      ? "google.navigation:q=" + K + "&mode=d"
      : "undefined,undefined" == M
        ? "http://maps.google.com?q=" + K
        : navigator.userAgent.match(/(iphone|ipod|ipad);?/i)
          ? "comgooglemaps://?saddr=&daddr=" +
            K +
            "&directionsmode=Driving&zoom=15"
          : "https://www.google.com.tw/maps/dir/" +
            K +
            "/" +
            M +
            "/@24,120.5,10z/data=!3m1!4b1!4m2!4m1!3e0";
  }
  function u() {
    if (A) {
      var N = A.getCenter(),
        _ref = [N.lat, N.lng],
        K = _ref[0],
        M = _ref[1];
      localStorage.setItem("lat", K),
        localStorage.setItem("lng", M),
        localStorage.setItem("zoom", A.getZoom());
    }
  }
  var v =
      "https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec",
    w =
      "https://script.google.com/macros/s/AKfycbzMvd730XVRRCoEL13052qsOC81kwPKeWRWZJV9B60e59nXCDLZ/exec",
    x = (function() {
      var K = new URLSearchParams(location.search),
        M = K.get("lat") || localStorage.getItem("lat") || 25.046266,
        N = K.get("lng") || localStorage.getItem("lng") || 121.517406,
        O = K.get("zoom") || localStorage.getItem("zoom") || 15;
      return { latLng: [+M, +N], zoom: +O };
    })(),
    y = x.latLng,
    z = x.zoom,
    A = b.map("map", { attributionControl: !1 }),
    B = {},
    C = {},
    D = b.control
      .layers({}, {}, { position: "bottomleft", collapsed: !1 })
      .addTo(A),
    E = !1,
    F = b.tileLayer("https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW", {
      subdomains: "012",
      maxZoom: 20,
      attribution: "Map data: &copy; Google",
      fixed: !0
    }),
    G = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var M = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (M.style.backgroundColor = "white"),
          (M.style.backgroundImage = "url(img/location_64.png)"),
          (M.style.backgroundSize = "30px 30px"),
          (M.style.width = "30px"),
          (M.style.height = "30px"),
          (M.onclick = function() {
            this.classList.toggle("use"), E ? m() : l();
          }),
          M
        );
      }
    }),
    H = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var M = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (M.style.backgroundColor = "white"),
          (M.style.backgroundImage = "url(img/reload_64.png)"),
          (M.style.backgroundSize = "30px 30px"),
          (M.style.width = "30px"),
          (M.style.height = "30px"),
          (M.onclick = function() {
            c();
          }),
          M
        );
      }
    }),
    I = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd(K) {
        var M = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom return_task"
        );
        return (
          (M.style.backgroundColor = "white"),
          (M.style.backgroundImage = "url(img/add_64.png)"),
          (M.style.backgroundSize = "30px 30px"),
          (M.style.width = "30px"),
          (M.style.height = "30px"),
          (M.onclick = function() {
            var N = this;
            Promise.all([q()]).then(function(O) {
              var P = O[0];
              if ((localStorage.removeItem("LineID"), !P.success))
                alert(
                  "\u8ACB\u900F\u904E\u52A0\u5165Line\u6A5F\u5668\u4EBA[oh?]\uFF0C\u555F\u52D5\u56DE\u5831\u6B0A\u9650\u3002"
                );
              else {
                var Q = document.getElementById("Line_displayName");
                (Q.value = P.displayName), (Q.dataset.LineID = P.userId);
                var R = K.getCenter(),
                  S =
                    "https://pokestop-taiwan-1.herokuapp.com/get_bbox_sites/" +
                    R.lat +
                    "/" +
                    R.lng;
                fetch(S)
                  .then(function(T) {
                    return T.json();
                  })
                  .then(function(T) {
                    return i(T);
                  }),
                  N.classList.toggle("use"),
                  document
                    .getElementsByClassName("select_task")[0]
                    .classList.toggle("hide");
              }
            });
          }),
          M
        );
      }
    }),
    J = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var M = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (M.style.backgroundColor = "white"),
          (M.style.backgroundImage = "url(img/info_64.png)"),
          (M.style.backgroundSize = "30px 30px"),
          (M.style.width = "30px"),
          (M.style.height = "30px"),
          (M.onclick = function() {
            this.classList.toggle("use"),
              document
                .getElementsByClassName("info")[0]
                .classList.toggle("hide");
          }),
          M
        );
      }
    });
  A.addLayer(F)
    .addControl(new G())
    .addControl(new H())
    .addControl(new I())
    .addControl(new J())
    .on("load", c)
    .on("moveend", u)
    .on("locationfound", function(K) {
      a.red.setLatLng(K.latlng);
    })
    .setView(y, z),
    (document.getElementById("return_task").onclick = function() {
      var K = document.getElementById("Line_displayName").dataset.LineID,
        M = document.getElementById("pokestops_nearby").value.split("\uFF20"),
        N = document.getElementById("tasks").value;
      fetch(w, {
        method: "POST",
        body:
          "LineID=" +
          K +
          "&pokestop=" +
          encodeURIComponent(M[0]) +
          "&lat=" +
          encodeURIComponent(M[1]) +
          "&lng=" +
          encodeURIComponent(M[2]) +
          "&image=" +
          encodeURIComponent(M[3]) +
          "&task=" +
          encodeURIComponent(N),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(function(O) {
          return O.json();
        })
        .then(function(O) {
          O.success && c(),
            document
              .getElementsByClassName("return_task")[0]
              .classList.toggle("use"),
            document
              .getElementsByClassName("select_task")[0]
              .classList.toggle("hide");
        });
    });
})(window, L);
