const API_KEY = ""; // замените на ваш API-ключ Яндекс.Карт

function loadYmaps(callback) {
  if (window.ymaps) {
    window.ymaps.ready(callback);
    return;
  }

  const script = document.createElement("script");
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
  script.onload = () => window.ymaps.ready(callback);
  document.head.appendChild(script);
}

function initMap() {
  const canvas = document.querySelector(".map-box__canvas");
  if (!canvas) return;

  const map = new window.ymaps.Map(canvas, {
    center: [55.81, 37.6],
    zoom: 9,
    controls: ["zoomControl"],
  });

  map.behaviors.disable("scrollZoom");

  const pinIcon = {
    iconLayout: "default#image",
    iconImageHref: "img/icons/map-pin.svg",
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -64],
  };

  const khimkiCoords = [55.895, 37.433];
  const moscowCoords = [55.725, 37.77];

  const placemarkKhimki = new window.ymaps.Placemark(
    khimkiCoords,
    {
      hintContent: "г. Химки, ул. Панфилова, д. 37",
      balloonContent:
        "<strong>Офис в Химках</strong><br>ул. Панфилова, д. 37, этаж 4, офис 14",
    },
    pinIcon,
  );

  const placemarkMoscow = new window.ymaps.Placemark(
    moscowCoords,
    {
      hintContent: "г. Москва, проспект Рязанский, д. 10, стр. 18",
      balloonContent:
        "<strong>Офис в Москве (ЮВАО)</strong><br>проспект Рязанский, д. 10, стр. 18, этаж 10, кабинет 6",
    },
    pinIcon,
  );

  map.geoObjects.add(placemarkKhimki);
  map.geoObjects.add(placemarkMoscow);
}

loadYmaps(initMap);
