QUnit.module("trimFirstAndLastCharInCssString");
QUnit.test('trimFirstAndLastCharInCssString()', function (assert) {
    assert.deepEqual(trimFirstAndLastCharInCssString(["{f}"]), ["f"], 'Обрезание массива');
});
QUnit.module("getObjectsArrayFromCssArray");
QUnit.test('getObjectsArrayFromCssArray()', function (assert) {
    assert.deepEqual(getObjectsArrayFromCssArray(["f:17px;g:8 0 0"]), [{
        f: "17px",
        g: "8 0 0"
    }], 'Трансформация массива в обьект');
});
QUnit.module("getObjectWithIdentialKeyAndValue");
QUnit.test('getObjectWithIdentialKeyAndValue()', function (assert) {
    assert.deepEqual(getObjectWithIdentialKeyAndValue([{
        f: "17px",
        g: "8 0 0"
    }, {g: "8 0 0"}]), {g: "8 0 0"}, 'Вывод обьектов с совпадающим свойством');
});