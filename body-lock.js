export class BodyLock {
  static lock() {
    const body = document.body;
    if (body.classList.contains('body-locked') === true) {
      return;
    }
    if (window.innerWidth > document.documentElement.clientWidth) {
      body.style.overflowY = 'scroll';
    }
    if (window.innerHeight > document.documentElement.clientHeight) {
      body.style.overflowX = 'scroll';
    }
    Object.assign(body.style, {
      position: 'fixed',
      top: `-${window.scrollY}px`,
      left: `-${window.scrollX}px`,
      right: '0',
    });
    body.classList.add('body-locked');
  }

  static unlock() {
    const body = document.body;
    if (body.classList.contains('body-locked') === false) {
      return;
    }

    const scrollX = parseInt(body.style.left.replace('px', '') || '0', 10) * -1;
    const scrollY = parseInt(body.style.top.replace('px', '') || '0', 10) * -1;

    Object.assign(body.style, {
      position: '',
      top: '',
      left: '',
      right: '',
      overflowY: '',
      overflowX: '',
    });

    window.scrollTo(scrollX, scrollY);
    body.classList.remove('body-locked');
  }

  static isLocked() {
    return document.body.classList.contains('body-locked');
  }
}
