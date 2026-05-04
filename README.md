# Gameover


## ✅ Design System Linting

Use this like a **PR checklist** or quick self-review before committing.

---

## 🔍 1. TOKEN USAGE

- [ ] Am I using `var(--spacing-*)` instead of raw Tailwind spacing?
- [ ] Did I avoid `p-*`, `m-*`, `gap-*`, `px-*`, `py-*` utilities?
- [ ] Am I NOT hardcoding pixel values (e.g. `16px`, `24px`)?

🚫 Fail examples:
```tsx
className="p-5 mt-6 gap-3"
style={{ padding: '20px' }}
```

---

## 🧩 2. PRIMITIVE USAGE

- [ ] Did I use `container` for page width/padding?
- [ ] Did I use `section` for vertical page spacing?
- [ ] Did I use `stack` for vertical gaps?
- [ ] Did I use `inline` or `cluster` for horizontal layout?
- [ ] Did I use `grid-auto` instead of manual grid spacing?

🚫 Fail examples:
```tsx
<div className="flex flex-col gap-6">
<div className="mt-10">
```

---

## ⚖️ 3. RESPONSIBILITY CHECK

### Ask:
> Is this layout or component spacing?

- [ ] Layout spacing → handled by primitives
- [ ] Component spacing → handled by tokens (inline style or internal CSS)

🚫 Fail examples:
```tsx
<Card className="mb-6" />   // component affecting layout
```

---

## 📦 4. COMPONENT RULES

- [ ] Does the component only control its **internal spacing**?
- [ ] Does it avoid margins (`mt`, `mb`, etc.)?
- [ ] Is spacing defined using tokens?

✅ Good:
```tsx
<div style={{ padding: 'var(--spacing-md)' }} />
```

🚫 Bad:
```tsx
<div className="mt-6 p-4" />
```

---

## 🧱 5. PRIMITIVE PURITY

- [ ] Am I avoiding mixing primitives with manual spacing?

🚫 Fail:
```tsx
<div className="stack gap-2 mt-4">
```

✅ Pass:
```tsx
<div className="stack">
```

---

## 📏 6. SPACING SCALE CONSISTENCY

- [ ] Am I mostly using `md` as default?
- [ ] Am I limiting spacing sizes to 2–3 variants on this page?
- [ ] Am I using `lg` only for sections?

🚫 Fail:
- Using `xs`, `sm`, `md`, `lg`, `xl` randomly in one view

---

## 🧭 7. LAYOUT STRUCTURE

- [ ] Does the page follow this structure?

```
Container
  → Stack
    → Section
      → Content
```

- [ ] Did I avoid skipping layers (e.g. content directly inside container with margins)?

---

## 🚫 8. ANTI-PATTERN SCAN

Check for ANY of these:

- [ ] `mt-*`, `mb-*`, `ml-*`, `mr-*`
- [ ] `p-*`, `px-*`, `py-*`
- [ ] `gap-*`
- [ ] inline pixel values (`16px`, `24px`)
- [ ] components pushing layout (`mb-6`, `mt-10`)

👉 If ANY exist → refactor

---

## 🧠 9. DECISION QUICK TEST

Before adding spacing:

> “Which primitive should handle this?”

- If you hesitate → use `stack` or `section`
- If it's inside a component → use tokens

---

## 🟢 FINAL PASS CRITERIA

You pass if:

- [ ] No raw Tailwind spacing utilities exist
- [ ] Layout is entirely controlled by primitives
- [ ] Components only manage internal spacing
- [ ] Spacing tokens are used everywhere
- [ ] Page structure is predictable

---

## 🔥 TL;DR CHECK (Fast Version)

- [ ] No `p-*`, `m-*`, `gap-*`
- [ ] Using `container`, `stack`, `section`
- [ ] Components don’t use margins
- [ ] Tokens everywhere
- [ ] Default spacing = `md`

---