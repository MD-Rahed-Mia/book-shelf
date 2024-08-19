import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { updateUser } from "../firebase/DatabaseFirebase";
import { LineWave } from "react-loader-spinner";

export default function EditProfile({
  editProfileBox,
  setEditProfileBox,
  user,
  id,
}) {
  //form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  //loading
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    setLoading(true);
    // console.log('form data:', event.target)

    updateUser(id, formData).then((res) => {
      console.log("update successful.");
      setLoading(false);
    });
  }

  return (
    <div className="fixed w-full h-[100vh] top-0 left-0 z-50 bg-[#0000004f] flex items-center justify-center">
      <div className="w-[90%] md:w-1/3 h-auto bg-white rounded-md p-3 relative">
        <h1 className="text-2xl text-center text-blue-500">
          Update your profile
        </h1>

        <div
          className="absolute top-2 right-3 text-2xl cursor-pointer"
          onClick={() => setEditProfileBox(!editProfileBox)}
        >
          {/* cancel button */}
          <span>
            <RxCross1 />
          </span>
        </div>

        <div>
          <form action="" onSubmit={handleSubmitForm}>
            <div className="flex flex-col mt-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="update your name"
                className="w-full p-2 text-blue-500 border-2
                 rounded-md mt-1
                 "
                value={formData?.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">
                Email (
                <span className="text-[12px] text-red-500">
                  cannot modified email
                </span>
                )
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="update your email"
                className="w-full p-2 text-blue-500 border-2
                 rounded-md mt-1
                 "
                value={formData?.email}
                readOnly
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="update your phone"
                className="w-full p-2 text-blue-500 border-2
                 rounded-md mt-1
                 onChange={handleOnChange}
                 "
                value={formData?.phone}
                onChange={handleOnChange}
                max={11}
                min={11}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="update your address"
                className="w-full p-2 text-blue-500 border-2
                 rounded-md mt-1
                 "
                onChange={handleOnChange}
                value={formData?.address}
              />
            </div>

            <div className="w-[100px] mx-auto text-center">
              {loading && (
                <LineWave
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="line-wave-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  firstLineColor=""
                  middleLineColor=""
                  lastLineColor=""
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                className="text-blue-500 w-1/3 mx-auto p-1 rounded-full hover:bg-blue-500 text-sm transition-all block mt-8 hover:text-white border-2 border-blue-500"
              >
                Update your profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
