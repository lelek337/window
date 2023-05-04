import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#height');
  checkNumInputs('#width');

  function bindActionToElem (event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN' :
            console.log('span');
            break;
          case 'INPUT' :
            item.getAttribute('type') === 'checkbox' ? console.log('checkbox') : console.log('input');
            break;
          case 'SELECT' :
            console.log('select');
            break;
        }
      });
    });
  }

  bindActionToElem('click', windowForms, 'form');
  bindActionToElem('input', windowHeight, 'height');
  bindActionToElem('input', windowWidth, 'width');
  bindActionToElem('change', windowType, 'type');
  bindActionToElem('change', windowProfile, 'profile');
};
export default changeModalState;
