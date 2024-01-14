
/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone:number;
}


const User: React.FC = () => {
  const [datas, setData] = useState<UserData[]>([]);
  const [mode, setMode] = useState<string>("online");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res?.json().then((result) => {
          console.warn("result", result);
          setData(result);
          localStorage.setItem("user", JSON?.stringify(result));
        });
      })
      .catch(() => {
        let collection = localStorage.getItem("user");
        if (collection !== null) {
          setData(JSON.parse(collection));
          setMode("offline");
        }
      });
  }, []);
  return (
    <div>
        <div>
            {
                mode === "offline" ? <h1 className="bg-yellow-200 p-2 text-center text-red-300">you are in offline mode</h1> : null
            }
        </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {datas?.map((data, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
