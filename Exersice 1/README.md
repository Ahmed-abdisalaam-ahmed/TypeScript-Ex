## 🏋️‍♂️ **Student Exercises**

### 1. 🟢 Declare Variables with Explicit Types

Declare the following variables:

- A `productName` of type `string`
- A `price` of type `number`
- A `discountAvailable` of type `boolean`

Then try assigning a wrong value to each and fix the error.

![Wrong type assignments causing errors](./Declare_varibales.png)

![Fixed variables with correct types](./Fix_Varibales.png)

---

### 2. 🔧 Fix this Broken JavaScript

Convert this JS function to TypeScript and add types:

```jsx
function getDiscount(price, discount) {
  return price - price * discount;
}

```

Make sure:

- Both parameters are `number`
- The return value is also a `number`

![Typed getDiscount function and output](./Discount_fix.png)

---

### 3. ⚠️ Dangerous `any`

Here’s a risky TypeScript function using `any`:

```jsx
function printLength(x: any) {
  console.log(x.length);
}

```

Call it with:

- `"Hello"` (should work)
- `123` (should crash)

![Using any — works with strings but unsafe](./Any_danger.png)

✅ Replace `any` with a safer approach and prevent the crash.

![Safer approach using unknown with a type guard](./unknown.png)
