const expenses = [];

function addExpense() {
  const sana = prompt("Sana (YYYY-MM-DD):");
  const kategoriya = prompt("Kategoriya:");
  const summa = parseFloat(prompt("Summa:"));
  if (isNaN(summa)) {
    console.log("Xato: summa son bo'lishi kerak!");
    return;
  }
  expenses.push({ sana, kategoriya, summa });
  console.log("Xarajat qo'shildi!");
}

function dailyTotal() {
  const sana = prompt("Sana (YYYY-MM-DD):");
  let jami = 0;
  for (const e of expenses) {
    if (e.sana === sana) {
      jami += e.summa;
    }
  }
  console.log(`${sana} kuni jami: ${jami}`);
}

function monthlyTotal() {
  const oy = prompt("Oy (YYYY-MM):");
  let jami = 0;
  for (const e of expenses) {
    if (e.sana.startsWith(oy)) {
      jami += e.summa;
    }
  }
  console.log(`${oy} oyi bo'yicha jami: ${jami}`);
}

function maxExpenseDay() {
  if (expenses.length === 0) {
    console.log("Hali xarajat yo'q.");
    return;
  }
  const kunlar = {};
  for (const e of expenses) {
    kunlar[e.sana] = (kunlar[e.sana] || 0) + e.summa;
  }
  let engKop = null;
  for (const sana in kunlar) {
    if (engKop === null || kunlar[sana] > kunlar[engKop]) {
      engKop = sana;
    }
  }
  console.log(`Eng ko'p xarajat kuni: ${engKop} (${kunlar[engKop]})`);
}

function showExpenses() {
  if (expenses.length === 0) {
    console.log("Hali xarajat yo'q.");
    return;
  }
  expenses.forEach((e, i) => {
    console.log(`${i + 1}. ${e.sana} | ${e.kategoriya} | ${e.summa}`);
  });
}

while (true) {
  console.log("1. Xarajat qo'shish");
  console.log("2. Kunlik jami");
  console.log("3. Oylik jami");
  console.log("4. Eng ko'p xarajat kuni");
  console.log("5. Barcha xarajatlar");
  console.log("0. Chiqish");
  const tanlov = prompt("Tanlang (0-5):");
  if (tanlov === "1") {
    addExpense();
  } else if (tanlov === "2") {
    dailyTotal();
  } else if (tanlov === "3") {
    monthlyTotal();
  } else if (tanlov === "4") {
    maxExpenseDay();
  } else if (tanlov === "5") {
    showExpenses();
  } else if (tanlov === "0" || tanlov === null) {
    console.log("Xayr!");
    break;
  } else {
    console.log("Noto'g'ri tanlov!");
  }
}
