## React app with zustand

```console
npm create vite@latest zustand
npm install zustand
```

## subcribeWithSelector

while subcribe takes one pareameter, subcriveWithSelector takes 3

```javascript
useEffect(() => {
  const unSub = useStore.subscribe(
    (state) => state.products,
    (products) => {
      setTotal(products.reduce((acc, item) => acc + item.price * item.qty, 0));
    },
    { equalityFn: shallow, fireImmediately: true }
  );
  return unSub;
}, [setTotal]);
```
