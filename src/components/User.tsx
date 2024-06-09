import { UserIcon } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";

export function User() {
  const { setAddress, address, fullName, userName, fetchUser } = useStore(
    useShallow((state) => ({
      fullName: state.fullName,
      userName: state.userName,
      address: state.address,
      setAddress: state.setAddress,
      fetchUser: state.fetchUser,
    }))
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }

    fetchData();
  }, [fetchUser]);

  return (
    <div>
      <div>
        <button>
          <UserIcon />
        </button>
      </div>
      <div className="overflow-y-scroll space-y-2 w-96">
        <div className="flex items-center gap-2">
          <p>{fullName}</p>
          <p className="text-sm">{userName}</p>
        </div>
        <label htmlFor="address">Your Address:</label>
        <input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
}
