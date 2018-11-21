export default {
  name: 'Pochtoy', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
  analyticsCategory: 'Pochtoy',
  sendPageView: false, // отключаем, если спецпроект не на отдельной странице
  listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};