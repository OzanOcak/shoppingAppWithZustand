import { useShallow } from "zustand/react/shallow";
import { useStore } from "./store/store";

function App() {
  //const store = useStore();

  //const age = useStore((state)=>state.age)  // good perfermonce
  //const fullName = useStore((state)=>state,fullName)
  //const address = useStore((state)=>state.address)

  //but using shallow tidier

  const { age, fullName, address } = useStore(
    useShallow((state) => ({
      age: state.age,
      fullName: state.fullName,
      address: state.address,
    }))
  );
  return (
    <>
      {/*<div className="text-center text-xl">{JSON.stringify(store)}</div>*/}
      <div>{address}</div>
    </>
  );
}

export default App;
