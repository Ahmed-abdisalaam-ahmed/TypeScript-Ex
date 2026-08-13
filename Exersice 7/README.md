## 🏋️‍♂️ **Student Exercises**

### 1. Create a `Welcome` component

- It should accept:
    - `username: string`
    - `isPremium: boolean`
- Show a welcome message that says “Welcome back, premium user!” or “Welcome, guest”

---


![Welcome Component](./src/assets/propsTrue.png)
![Welcome Component](./src/assets/propsFalse.png)

### 2. Create a `ProductCard` component

- Props:
    - `name: string`
    - `price: number`
    - `description?: string`
- Display name and price; only show description if it exists

---
![ProductCard Component](./src/assets/ProductCard.png)

### 3. Use `type` instead of `interface`

- Rebuild either `Welcome` or `ProductCard` using `type` instead of `interface`


![Type Example](./src/assets/type.png)
![Type Error](./src/assets/ErrorChecking.png)
