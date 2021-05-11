function createAnalytics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => counter++;
  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },

    getCounter() {
      if (destroyed) {
        return "Counter destroyed"
      }
      return counter;
    }
  }
}

window.analitecs = createAnalytics();