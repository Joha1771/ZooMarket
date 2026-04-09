import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_CodeWars() {
  return (
    <div className="flex flex-col gap-0">
      <H>Algoritmik fikrlash nima?</H>
      <P>
        Algoritmik fikrlash — muammoni kichik qismlarga bo'lib, har birini
        ketma-ket hal qilish ko'nikmasi. CodeWars, LeetCode kabi platformalar bu
        ko'nikmani rivojlantiradi.
      </P>

      <H>Masalani hal qilish bosqichlari</H>
      <Table
        headers={["Bosqich", "Nima qilish kerak"]}
        rows={[
          ["1. Tushunish", "Masalani 2-3 marta o'qi, input/output ni aniqla"],
          ["2. Misollar", "Qo'lda 2-3 misol yech, edge case larni o'yla"],
          ["3. Reja", "Algoritmni so'z bilan yoz (pseudocode)"],
          ["4. Kod yoz", "Rejani kodga aylantir"],
          ["5. Test qil", "Edge case lar: bo'sh massiv, 0, manfiy son, null"],
          ["6. Optimallashtir", "O'qilishi, tezligi, xotira sarfi"],
        ]}
      />

      <H>Eng ko'p ishlatiladigan pattern lar</H>
      <Pre>{`// 1. Two Pointers — saralangan massivda
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

// 2. Sliding Window — substring/subarray
function maxSum(arr, k) {
  let sum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}

// 3. Hash Map — tezkor qidirish
function twoSumHash(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}`}</Pre>

      <H>String masalalari — tez-tez uchrashi</H>
      <Pre>{`// Palindrom tekshirish
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// Anagram tekshirish
function isAnagram(a, b) {
  const sort = s => s.toLowerCase().split("").sort().join("");
  return sort(a) === sort(b);
}

// Eng ko'p takrorlangan belgi
function mostFrequent(str) {
  const freq = {};
  for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return Object.entries(freq).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}`}</Pre>

      <H>Rekursiya asoslari</H>
      <Pre>{`// Faktorial
function factorial(n) {
  if (n <= 1) return 1;           // base case
  return n * factorial(n - 1);   // recursive case
}

// Fibonacci
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoization bilan optimallashtirilgan fib
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

fibMemo(50); // tez ishlaydi (fib(50) esa juda sekin)`}</Pre>

      <H>Vaqt murakkabligi (Big O)</H>
      <Table
        headers={["Notation", "Nomi", "Misol"]}
        rows={[
          ["O(1)", "Constant", "arr[i], map.get()"],
          ["O(log n)", "Logarifmik", "Binary search"],
          ["O(n)", "Lineer", "for loop"],
          ["O(n log n)", "Linearifmik", "Sort"],
          ["O(n²)", "Kvadratik", "Nested loop"],
        ]}
      />
      <Note type="tip">
        CodeWars da <Code>kyu</Code> tizimi: 8kyu (oson) → 1kyu (eng qiyin).
        Boshlash uchun 8-6kyu masalalar tavsiya etiladi.
      </Note>
    </div>
  );
}
