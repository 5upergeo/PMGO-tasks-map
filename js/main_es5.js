"use strict";
(function(a, b) {
  function c() {
    g(), u();
  }
  function g() {
    Promise.all([n(), p(), o()]).then(function(J) {
      var K = J[0];
      j(K), h(J[2]);
      var M = J[1];
      M.forEach(k),
        z.eachLayer(function(O) {
          O.options.fixed || z.removeLayer(O);
        });
      var N = Object.keys(B).reduce(function(O, P) {
        var Q = b.layerGroup(B[P], { fixed: !1 });
        return (
          z.addLayer(Q),
          (O['<img src="./img/' + P + '_.png" class="controlIcon">'] = Q),
          O
        );
      }, {});
      z.removeControl(C),
        (C = b.control
          .layers({}, N, { position: "bottomleft", collapsed: !1 })
          .addTo(z));
    });
  }
  function h(J) {
    var K = document.getElementById("tasks"),
      M =
        '<option value="\u8ACB\u9078\u64C7\u4EFB\u52D9">\u8ACB\u9078\u64C7\u4EFB\u52D9</option>' +
        J.map(function(N) {
          return '<option value="' + N + '">' + N + "</option>";
        }).join("");
    K.innerHTML = M;
  }
  function i(J) {
    var K = document.getElementById("pokestops_nearby"),
      M =
        '<option value="\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9">\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9</option>' +
        J.map(function(N) {
          return (
            '\n            <option value="' +
            N.poke_title +
            "\uFF20" +
            N.poke_lat +
            "\uFF20" +
            N.poke_lng +
            "\uFF20" +
            N.poke_image +
            '">\n                ' +
            N.poke_title +
            "\n            </option>"
          );
        }).join("");
    K.innerHTML = M;
  }
  function j(J) {
    J.forEach(function(K) {
      (A[K] = b.icon({
        iconUrl: "./img/" + K + "_.png",
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -18]
      })),
        (B[K] = []);
    });
  }
  function k(J) {
    var N = J.task.split("\uFF1A"),
      K = s(J.lat + "," + J.lng, "25.046266,121.517406"),
      P =
        "https://5upergeo.github.io/PMGO-tasks-map/?lat=" +
        J.lat +
        "&lng=" +
        J.lng,
      Q =
        new Date().toLocaleDateString() +
        "\n" +
        J.site_name +
        "\n" +
        J.task +
        "\n" +
        J.address +
        "\ngoogle map\uFF1A\nhttps://www.google.com.tw/maps/place/" +
        J.lat +
        "," +
        J.lng +
        "\n\u5730\u5716\u9023\u7D50\uFF1A\n" +
        P,
      R = "http://line.naver.jp/R/msg/text/?" + encodeURIComponent(Q),
      M =
        "\n            <div class='pokestops'>\n                <h3>" +
        J.site_name +
        "</h3>\n                <hr>\n                <b>" +
        N[0] +
        "</b><br>\u2714\uFE0F\uFF1A" +
        J["T&F"].T +
        ", \u274C\uFF1A" +
        J["T&F"].F +
        '\n                <div class="crop">\n                    <img src="https://images.weserv.nl/?url=' +
        J.image.replace(/^https?\:\/\//g, "") +
        '&w=70&h=70&il&trim=10&t=squaredown">\n                </div>\n                <a href=' +
        K +
        ' target="_blank">\uD83D\uDE98google\u5C0E\u822A</a><br>\n                <a href=' +
        R +
        " target='_blank' class=\"line_share\"><img src=" +
        "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png" +
        '></a>\n                <a href="#" class="web_share" onclick="copy_text(this)" data-share_text = \'' +
        Q +
        "'>\u8907\u88FD\u5206\u4EAB\u6587\u5B57</a>\n            </div>\n        ";
    (a.copy_text = function(S) {
      var T = document.createElement("textarea");
      (T.textContent = S.dataset.share_text),
        document.body.appendChild(T),
        T.select(),
        document.execCommand("copy"),
        T.remove();
    }),
      B[N[1]].push(
        b
          .marker([J.lat, J.lng], {
            icon: b.divIcon({
              className:
                1 <= J["T&F"].F - J["T&F"].T
                  ? "map-marker-fake map-marker"
                  : "map-marker",
              iconSize: [48, 48],
              iconAnchor: [24, 24],
              popupAnchor: [0, -18],
              html: '<div><img src="./img/' + N[1] + '_.png"></div>'
            })
          })
          .bindPopup(M)
      );
  }
  function l() {
    (D = !0),
      z.locate({ setView: !0, watch: !0, maxZoom: 20 }),
      (a.red = b
        .marker(x, {
          icon: b.icon({
            iconUrl: "./img/pikachu.gif",
            iconSize: [30, 48],
            iconAnchor: [15, 24]
          }),
          fixed: !0
        })
        .addTo(z)),
      (a.red._icon.style.display = "block");
  }
  function m() {
    (D = !1), z.stopLocate(), (a.red._icon.style.display = "none");
  }
  function n() {
    return fetch(v + "?method=get_tasks").then(function(J) {
      return J.json();
    });
  }
  function o() {
    return fetch(v + "?method=get_tasks_full").then(function(J) {
      return J.json();
    });
  }
  function p() {
    return fetch(v + "?method=get_existing_data").then(function(J) {
      return J.json();
    });
  }
  function q() {
    var J = new URLSearchParams(location.search),
      K = J.get("LineID") || "";
    return fetch(v + "?method=get_profile&LineID=" + K).then(function(M) {
      return M.json();
    });
  }
  function s(J, K) {
    return navigator.userAgent.match(/android/i)
      ? "google.navigation:q=" + J + "&mode=d"
      : "undefined,undefined" == K
        ? "http://maps.google.com?q=" + J
        : navigator.userAgent.match(/(iphone|ipod|ipad);?/i)
          ? "comgooglemaps://?saddr=&daddr=" +
            J +
            "&directionsmode=Driving&zoom=15"
          : "https://www.google.com.tw/maps/dir/" +
            J +
            "/" +
            K +
            "/@24,120.5,10z/data=!3m1!4b1!4m2!4m1!3e0";
  }
  function u() {
    if (z) {
      var M = z.getCenter(),
        _ref = [M.lat, M.lng],
        J = _ref[0],
        K = _ref[1];
      localStorage.setItem("lat", J),
        localStorage.setItem("lng", K),
        localStorage.setItem("zoom", z.getZoom());
    }
  }
  var v =
      "https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec",
    w = (function() {
      var J = new URLSearchParams(location.search),
        K = J.get("lat") || localStorage.getItem("lat") || 25.046266,
        M = J.get("lng") || localStorage.getItem("lng") || 121.517406,
        N = J.get("zoom") || localStorage.getItem("zoom") || 15;
      return { latLng: [+K, +M], zoom: +N };
    })(),
    x = w.latLng,
    y = w.zoom,
    z = b.map("map", { attributionControl: !1 }),
    A = {},
    B = {},
    C = b.control
      .layers({}, {}, { position: "bottomleft", collapsed: !1 })
      .addTo(z),
    D = !1,
    E = b.tileLayer("https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW", {
      subdomains: "012",
      maxZoom: 20,
      attribution: "Map data: &copy; Google",
      fixed: !0
    }),
    F = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var K = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (K.style.backgroundColor = "white"),
          (K.style.backgroundImage = "url(img/location_64.png)"),
          (K.style.backgroundSize = "30px 30px"),
          (K.style.width = "30px"),
          (K.style.height = "30px"),
          (K.onclick = function() {
            this.classList.toggle("use"), D ? m() : l();
          }),
          K
        );
      }
    }),
    G = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var K = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (K.style.backgroundColor = "white"),
          (K.style.backgroundImage = "url(img/reload_64.png)"),
          (K.style.backgroundSize = "30px 30px"),
          (K.style.width = "30px"),
          (K.style.height = "30px"),
          (K.onclick = function() {
            c();
          }),
          K
        );
      }
    }),
    H = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd(J) {
        var K = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom return_task"
        );
        return (
          (K.style.backgroundColor = "white"),
          (K.style.backgroundImage = "url(img/add_64.png)"),
          (K.style.backgroundSize = "30px 30px"),
          (K.style.width = "30px"),
          (K.style.height = "30px"),
          (K.onclick = function() {
            var M = this;
            Promise.all([q()]).then(function(N) {
              var O = N[0];
              if (!O.success)
                alert(
                  "\u8ACB\u900F\u904E\u52A0\u5165Line\u6A5F\u5668\u4EBA[oh?]\uFF0C\u555F\u52D5\u56DE\u5831\u6B0A\u9650\u3002"
                );
              else {
                var P = document.getElementById("Line_displayName");
                (P.value = O.displayName), (P.dataset.LineID = O.userId);
                var Q = J.getCenter(),
                  R =
                    "https://pokestop-taiwan-1.herokuapp.com/get_bbox_sites/" +
                    Q.lat +
                    "/" +
                    Q.lng;
                fetch(R)
                  .then(function(S) {
                    return S.json();
                  })
                  .then(function(S) {
                    return i(S);
                  }),
                  M.classList.toggle("use"),
                  document
                    .getElementsByClassName("select_task")[0]
                    .classList.toggle("hide");
              }
            });
          }),
          K
        );
      }
    }),
    I = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var K = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (K.style.backgroundColor = "white"),
          (K.style.backgroundImage = "url(img/info_64.png)"),
          (K.style.backgroundSize = "30px 30px"),
          (K.style.width = "30px"),
          (K.style.height = "30px"),
          (K.onclick = function() {
            this.classList.toggle("use"),
              document
                .getElementsByClassName("info")[0]
                .classList.toggle("hide");
          }),
          K
        );
      }
    });
  z
    .addLayer(E)
    .addControl(new F())
    .addControl(new G())
    .addControl(new H())
    .addControl(new I())
    .on("load", c)
    .on("moveend", u)
    .on("locationfound", function(J) {
      a.red.setLatLng(J.latlng);
    })
    .setView(x, y),
    (document.getElementById("return_task").onclick = function() {
      var J = document.getElementById("Line_displayName").dataset.LineID,
        K = document.getElementById("pokestops_nearby").value.split("\uFF20"),
        M = document.getElementById("tasks").value;
      fetch(v, {
        method: "POST",
        body:
          "LineID=" +
          J +
          "&pokestop=" +
          encodeURIComponent(K[0]) +
          "&lat=" +
          encodeURIComponent(K[1]) +
          "&lng=" +
          encodeURIComponent(K[2]) +
          "&image=" +
          encodeURIComponent(K[3]) +
          "&task=" +
          encodeURIComponent(M),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(function(N) {
          return N.json();
        })
        .then(function(N) {
          N.success && c(),
            document
              .getElementsByClassName("return_task")[0]
              .classList.toggle("use"),
            document
              .getElementsByClassName("select_task")[0]
              .classList.toggle("hide");
        });
    });
})(window, L);