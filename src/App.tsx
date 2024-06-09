import { create } from "zustand";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const store = useStore();
  return (
    <>
      <div className="text-center text-5xl">
        <button onClick={store.inc}>+</button>
        <Count />
        <button onClick={store.dec}>-</button>
      </div>
    </>
  );
}

function Count() {
  const store = useStore();
  return <p className="text-black text-center text-xl">{store.count}</p>;
}

export default App;
