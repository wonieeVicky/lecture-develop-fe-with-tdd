var App = App || {};

App.ClickCounter = (_data) => {
  if (!_data) throw Error("_data");

  const data = _data; // 데이터 주입

  data.value = data.value || 0;

  return {
    getValue() {
      return data.value;
    },

    increase() {
      data.value++;
    },
  };
};
