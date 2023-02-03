const createTooltip = (button, text) => { //button-до чого привязуємо тултип з text

  const tooltip = document.createElement('div')//створюємо елемент
  tooltip.classList.add('tooltip')// додаємо клас tooltip
  tooltip.innerText = text // якийс контент у тому тултипі
 //ми створили цей тултип, але його в HTML його ще немає тому апендимо

  // апендимо відразу після створення, 
  // щоб отримати ширину та висоту елемента, щоб вирахувати координати
  document.body.append(tooltip);
 
  // отримуємо координати елемена до якого кріпимо тултип
  const anchorElemCoords = button.getBoundingClientRect()

 
  // вираховуємо верхні (вертикальні) координати тултипу
  // по такій формулі. 
  // Відступ кнопки від верхнього кордону екрану - 10 
  // відступ від кнопки до тултипу - висота тултипу
  const tooltipTop = anchorElemCoords.top - 10 - tooltip.clientHeight;

  // вираховуємо ліві (горизонтальні) координати тултипу
  // по такій формулі. 
  // Відступ кнопки від лівого кордону екрану +  
  // половина ширини кнопки +
  // половина ширини тултипу
  const tooltipLeft = anchorElemCoords.left +
  anchorElemCoords.width / 2 -
  tooltip.clientWidth / 2;

  tooltip.style.top = `${tooltipTop}px`
  tooltip.style.left = `${tooltipLeft}px` 
}
createTooltip('button', 'example text bla bla bla');
