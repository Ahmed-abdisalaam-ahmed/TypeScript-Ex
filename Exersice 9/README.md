## 🏋️‍♂️ Student Exercises


### 1. ✉️ Email Form

![Email form](src/assets/EmailForm.png)

- Create a component `EmailForm`
- Props: `onSubmit(email: string): void`
- State: `email: string`
- Call the prop on submit

---

### 2. 🔢 Age Form

![Age form](src/assets/AgeForm.png)

- Create a component `AgeForm`
- Props: `onSubmit(age: number): void`
- State: `age: number` (parse from input string)
- Prevent submit if `age < 18`

![Age validation message](src/assets/AgeIncorrect.png)

---

### 3. 🧾 Contact Form

![Contact form](src/assets/ContactForm.png)

- Create a form with `name` and `email`
- State: `{ name: string; email: string }`
- Props: `onSubmit(data: { name: string; email: string }): void`

### App Implementation

![App implementation](src/assets/AppCode.png)