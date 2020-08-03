describe('`const`에 대해서', function () {
  it('재할당이 금지된 const에 대해서 학습합니다.', function () {
    const constNum = 0;
    constNum = 0; // TODO : delete me
    expect(constNum).toBe(0);
    const constString = 'I am a const';
    constString = "which means I'm a constant variable, delete me."; // TODO
    expect(constString).toBe('I am a const');
  });
  it('const로 선언해도 배열의 요소에 접근할 수 있습니다.', function () {
    const arr = [];

    const toBePushed = FILL_ME_IN; // TODO
    const pushed = arr.push(toBePushed);

    expect(pushed).toBe(42);
    expect(arr).toEqual([42]);
  });
  it('const로 선언해도 객체의 속성을 추가 및 삭제할 수 있습니다.', function () {
    const obj = { x: 1 };

    delete obj.x;
    expect(obj).toEqual({});

    obj.toAchieve = FILL_ME_IN; // TODO

    expect(obj).toEqual({ toAchieve: 202050 });
    // https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
  });
});
