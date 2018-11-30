"use strict";
(function(a, b) {
  function c() {
    g(), y();
  }
  function g() {
    Promise.all([o(), q(), p()]).then(function(P) {
      var Q = P[0];
      k(Q), i(P[2]), (a.tasks = Q), (a.reports = P[1]), h();
    });
  }
  function h() {
    if ("undefined" == typeof a.reports) return 0;
    var P = [E.getBounds().getEast(), E.getBounds().getWest()],
      Q = [E.getBounds().getNorth(), E.getBounds().getSouth()];
    k(a.tasks),
      a.reports
        .filter(function(R) {
          return R.lat < Q[0] && R.lat > Q[1] && R.lng < P[0] && R.lng > P[1];
        })
        .forEach(l),
      t(),
      r();
  }
  function i(P) {
    var Q = document.getElementById("tasks"),
      R =
        '<option value="\u8ACB\u9078\u64C7\u4EFB\u52D9">\u8ACB\u9078\u64C7\u4EFB\u52D9</option>' +
        P.map(function(S) {
          return '<option value="' + S + '">' + S + "</option>";
        }).join("");
    Q.innerHTML = R;
  }
  function j(P) {
    var Q = document.getElementById("pokestops_nearby"),
      R =
        '<option value="\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9">\u8ACB\u9078\u64C7\u88DC\u7D66\u7AD9</option>' +
        P.map(function(S) {
          return (
            '\n            <option value="' +
            S.poke_title +
            "\uFF20" +
            S.poke_lat +
            "\uFF20" +
            S.poke_lng +
            "\uFF20" +
            S.poke_image +
            '">\n                ' +
            S.poke_title +
            "\n            </option>"
          );
        }).join("");
    Q.innerHTML = R;
  }
  function k(P) {
    P.forEach(function(Q) {
      (F[Q] = b.icon({
        iconUrl: "./img/" + Q + "_.png",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -12]
      })),
        (G[Q] = []);
    });
  }
  function l(P) {
    var S = P.task.split("\uFF1A"),
      Q = w(P.lat + "," + P.lng, "25.046266,121.517406"),
      U =
        "https://5upergeo.github.io/PMGO-tasks-map/?lat=" +
        P.lat +
        "&lng=" +
        P.lng,
      V =
        new Date().toLocaleDateString() +
        "\n" +
        P.site_name +
        "\n" +
        P.task +
        "\n" +
        P.address +
        "\ngoogle map\uFF1A\nhttps://www.google.com.tw/maps/place/" +
        P.lat +
        "," +
        P.lng +
        "\n\u5730\u5716\u9023\u7D50\uFF1A\n" +
        U,
      W = "line://msg/text/" + encodeURIComponent(V),
      R =
        "\n            <div class='pokestops'>\n                <h3>" +
        P.site_name +
        "</h3>\n                <b>" +
        S[0] +
        "</b><br>\u2714\uFE0F\uFF1A" +
        P["T&F"].T +
        ", \u274C\uFF1A" +
        P["T&F"].F +
        '\n                <div class="crop">\n                    <!-- <img src="https://images.weserv.nl/?url=' +
        P.image.replace(/^https?\:\/\//g, "") +
        '&w=70&h=70&il&trim=10&t=squaredown">  -->\n                    <img src="' +
        P.image +
        '">\n                </div>\n                <a href=' +
        Q +
        ' target="_blank">\uD83D\uDE98google\u5C0E\u822A</a><br>\n                <a href=' +
        W +
        " target='_blank' class=\"line_share\"><img src=" +
        "https://media.line.me/img/web/zh_TW/lineit_select_line_icon_01.png" +
        '></a>\n                <a href="#" class="web_share" onclick="copy_text(this)" data-share_text = \'' +
        V +
        "'>\u8907\u88FD\u5206\u4EAB\u6587\u5B57</a>\n            </div>\n        ";
    a.copy_text = function(X) {
      var Y = document.createElement("textarea");
      (Y.textContent = X.dataset.share_text),
        document.body.appendChild(Y),
        Y.select(),
        document.execCommand("copy"),
        Y.remove();
    };
    try {
      G[S[1]].push(
        b
          .marker([P.lat, P.lng], {
            icon: b.divIcon({
              className:
                1 <= P["T&F"].F - P["T&F"].T
                  ? "map-marker-fake map-marker"
                  : "map-marker",
              iconSize: [36, 36],
              iconAnchor: [18, 18],
              popupAnchor: [0, -12],
              html: '<div><img src="./img/' + S[1] + '_.png"></div>'
            })
          })
          .bindPopup(R, { autoPan: !1 })
      );
    } catch (X) {
      console.log("\u53C8\u6709\u4EBA\u56DE\u5831\u820A\u4EFB\u52D9\u60F9QAQ");
    }
  }
  function m() {
    (I = !0),
      E.locate({ setView: !0, watch: !0, maxZoom: 20 }),
      (a.red = b
        .marker(C, {
          icon: b.icon({
            iconUrl: "./img/pikachu.gif",
            iconSize: [30, 48],
            iconAnchor: [15, 24]
          }),
          fixed: !0
        })
        .addTo(E)),
      (a.red._icon.style.display = "block");
  }
  function n() {
    (I = !1), E.stopLocate(), (a.red._icon.style.display = "none");
  }
  function o() {
    return fetch(z + "?method=get_tasks").then(function(P) {
      return P.json();
    });
  }
  function p() {
    return fetch(z + "?method=get_tasks_full").then(function(P) {
      return P.json();
    });
  }
  function q() {
    return fetch(z + "?method=get_existing_data").then(function(P) {
      return P.json();
    });
  }
  function r() {
    Array.from(document.querySelectorAll("input[type=checkbox]")).forEach(
      function(P) {
        P.addEventListener("click", function() {
          s();
        });
      }
    );
  }
  function s() {
    a.checkedData = Array.from(
      document.querySelectorAll("input[type=checkbox]")
    ).map(function(P) {
      return P.checked;
    });
  }
  function t() {
    E.eachLayer(function(Q) {
      Q.options.fixed || E.removeLayer(Q);
    });
    var P = Object.keys(G).reduce(function(Q, R) {
      var S = b.layerGroup(G[R], { fixed: !1 });
      return (
        E.addLayer(S),
        (Q['<img src="./img/' + R + '_.png" class="controlIcon">'] = S),
        Q
      );
    }, {});
    return (
      E.removeControl(H),
      (H = b.control.layers({}, P, { position: "bottomleft" }).addTo(E)),
      "undefined" == typeof a.checkedData || 0 === a.checkedData.length
        ? 0
        : void Array.from(
            document.querySelectorAll("input[type=checkbox]")
          ).forEach(function(Q, R) {
            a.checkedData[R] || Q.click();
          })
    );
  }
  function u() {
    var P = new URLSearchParams(location.search),
      Q = P.get("LineID") || "";
    return fetch(A + "?method=get_profile&LineID=" + Q).then(function(R) {
      return R.json();
    });
  }
  function w(P, Q) {
    return navigator.userAgent.match(/android/i)
      ? "google.navigation:q=" + P + "&mode=d"
      : "undefined,undefined" == Q
        ? "http://maps.google.com?q=" + P
        : navigator.userAgent.match(/(iphone|ipod|ipad);?/i)
          ? "comgooglemaps://?saddr=&daddr=" +
            P +
            "&directionsmode=Driving&zoom=15"
          : "https://www.google.com.tw/maps/dir/" +
            P +
            "/" +
            Q +
            "/@24,120.5,10z/data=!3m1!4b1!4m2!4m1!3e0";
  }
  function y() {
    if (E) {
      var R = E.getCenter(),
        _ref = [R.lat, R.lng],
        P = _ref[0],
        Q = _ref[1];
      localStorage.setItem("lat", P),
        localStorage.setItem("lng", Q),
        localStorage.setItem("zoom", E.getZoom());
    }
  }
  var z =
      "https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec",
    A =
      "https://script.google.com/macros/s/AKfycbzMvd730XVRRCoEL13052qsOC81kwPKeWRWZJV9B60e59nXCDLZ/exec",
    B = (function() {
      var P = new URLSearchParams(location.search),
        Q = P.get("lat") || localStorage.getItem("lat") || 25.046266,
        R = P.get("lng") || localStorage.getItem("lng") || 121.517406,
        S = P.get("zoom") || localStorage.getItem("zoom") || 15;
      return { latLng: [+Q, +R], zoom: +S };
    })(),
    C = B.latLng,
    D = B.zoom,
    E = b.map("map", { attributionControl: !1 }),
    F = {},
    G = {},
    H = b.control.layers({}, {}, { position: "bottomleft" }).addTo(E),
    I = !1,
    J = b.tileLayer("https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW", {
      subdomains: "012",
      maxZoom: 20,
      attribution: "Map data: &copy; Google",
      fixed: !0
    }),
    K = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var Q = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (Q.style.backgroundColor = "white"),
          (Q.style.backgroundImage = "url(img/location_64.png)"),
          (Q.style.backgroundSize = "30px 30px"),
          (Q.style.width = "30px"),
          (Q.style.height = "30px"),
          (Q.onclick = function() {
            this.classList.toggle("use"), I ? n() : m();
          }),
          Q
        );
      }
    }),
    M = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var Q = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (Q.style.backgroundColor = "white"),
          (Q.style.backgroundImage = "url(img/reload_64.png)"),
          (Q.style.backgroundSize = "30px 30px"),
          (Q.style.width = "30px"),
          (Q.style.height = "30px"),
          (Q.onclick = function() {
            c();
          }),
          Q
        );
      }
    }),
    N = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd(P) {
        var Q = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom return_task"
        );
        return (
          (Q.style.backgroundColor = "white"),
          (Q.style.backgroundImage = "url(img/add_64.png)"),
          (Q.style.backgroundSize = "30px 30px"),
          (Q.style.width = "30px"),
          (Q.style.height = "30px"),
          (Q.onclick = function() {
            var R = this;
            Promise.all([u()]).then(function(S) {
              var T = S[0];
              if ((localStorage.removeItem("LineID"), !T.success))
                alert(
                  "\u8ACB\u900F\u904E\u52A0\u5165Line\u6A5F\u5668\u4EBA[oh?]\uFF0C\u555F\u52D5\u56DE\u5831\u6B0A\u9650\u3002"
                );
              else {
                var U = document.getElementById("Line_displayName");
                (U.value = T.displayName), (U.dataset.LineID = T.userId);
                var V = P.getCenter(),
                  W = new Date().getDate();
                W = 15 < W ? 2 : 1;
                var X =
                  "https://pokestop-taiwan-" +
                  W +
                  ".herokuapp.com/get_bbox_sites/" +
                  V.lat +
                  "/" +
                  V.lng;
                fetch(X)
                  .then(function(Y) {
                    return Y.json();
                  })
                  .then(function(Y) {
                    return j(Y);
                  }),
                  R.classList.toggle("use"),
                  document
                    .getElementsByClassName("select_task")[0]
                    .classList.toggle("hide");
              }
            });
          }),
          Q
        );
      }
    }),
    O = b.Control.extend({
      options: { position: "topleft" },
      onAdd: function onAdd() {
        var Q = b.DomUtil.create(
          "div",
          "pointer leaflet-bar leaflet-control leaflet-control-custom"
        );
        return (
          (Q.style.backgroundColor = "white"),
          (Q.style.backgroundImage = "url(img/info_64.png)"),
          (Q.style.backgroundSize = "30px 30px"),
          (Q.style.width = "30px"),
          (Q.style.height = "30px"),
          (Q.onclick = function() {
            this.classList.toggle("use"),
              document
                .getElementsByClassName("info")[0]
                .classList.toggle("hide");
          }),
          Q
        );
      }
    });
  E.addLayer(J)
    .addControl(new K())
    .addControl(new M())
    .addControl(new N())
    .addControl(new O())
    .on("load", c)
    .on("moveend", y)
    .on("moveend", h)
    .on("zoomend", h)
    .on("locationfound", function(P) {
      a.red.setLatLng(P.latlng);
    })
    .setView(C, D),
    (document.getElementById("return_task").onclick = function() {
      var P = document.getElementById("Line_displayName").dataset.LineID,
        Q = document.getElementById("pokestops_nearby").value.split("\uFF20"),
        R = document.getElementById("tasks").value;
      fetch(A, {
        method: "POST",
        body:
          "LineID=" +
          P +
          "&pokestop=" +
          encodeURIComponent(Q[0]) +
          "&lat=" +
          encodeURIComponent(Q[1]) +
          "&lng=" +
          encodeURIComponent(Q[2]) +
          "&image=" +
          encodeURIComponent(Q[3]) +
          "&task=" +
          encodeURIComponent(R),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
        .then(function(S) {
          return S.json();
        })
        .then(function(S) {
          S.success
            ? (a.reports.push({
                "T&F": { T: 0, F: 0 },
                task: R,
                lat: Q[1],
                lng: Q[2],
                pokestop: Q[0],
                image: Q[3],
                address: ""
              }),
              h(),
              t())
            : alert(S.msg),
            document
              .getElementsByClassName("return_task")[0]
              .classList.toggle("use"),
            document
              .getElementsByClassName("select_task")[0]
              .classList.toggle("hide");
        });
    });
})(window, L);
