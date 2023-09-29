const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); //Отмена стандартного действия по клику
    
    const tooltipActive = document.querySelectorAll('.tooltip_active')[0];

    //В один момент времени должна показываться только одна подсказка
    if (tooltipActive) {
      tooltipActive.classList.remove('tooltip_active');
      //console.log('tooltipActive', tooltipActive);
        if (tooltipActive.textContent == item.title) {
        return false;
        }
    }
  
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'tooltip_active');
  //console.log(tooltip);
  tooltip.textContent = item.getAttribute('title');

  const coordinates = item.getBoundingClientRect();
  tooltip.style.top = coordinates.bottom + 10 + 'px';
  tooltip.style.left = coordinates.left + 50 + 'px';
  document.body.append(tooltip); 
  })
})