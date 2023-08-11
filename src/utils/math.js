const getLengthAfterDot = (arg) => {
  return arg.toString().split(".")[1].length;
};

// 浮點數相加
const floatAdd = (arg1, arg2) => {
  let r1, r2, m;
  try {
    r1 = getLengthAfterDot(arg1);
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = getLengthAfterDot(arg2);
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (floatMul(arg1, m) + floatMul(arg2, m)) / m;
};
// 浮點數相減
const floatSub = (arg1, arg2) => {
  let r1, r2, m, n;
  try {
    r1 = getLengthAfterDot(arg1);
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = getLengthAfterDot(arg2);
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
};
// 浮點數相乘
const floatMul = (arg1, arg2) => {
  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  if (s1.split(".")[1]?.length) {
    m += s1.split(".")[1].length;
  }
  if (s2.split(".")[1]?.length) {
    m += s2.split(".")[1].length;
  }
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
};
// 浮點數相除
const floatDiv = (arg1, arg2) => {
  let t1 = 0;
  let t2 = 0;
  let r1, r2;
  if (arg1.toString().split(".")[1]?.length) {
    t1 = getLengthAfterDot(arg1);
  }
  if (arg2.toString().split(".")[1]?.length) {
    t2 = getLengthAfterDot(arg2);
  }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
};

export { floatAdd, floatSub, floatMul, floatDiv };
