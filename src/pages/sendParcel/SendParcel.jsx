import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-10">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
        Send A Parcel
      </h1>

      <p className="text-3xl font-extrabold mb-4">Enter your parcel details</p>

      <div className="w-full h-px bg-gray-300 my-6"></div>

      {/* Document Selector */}
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <div className="flex items-center gap-6 mb-5 mt-8 ml-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              defaultChecked
            />
            <span className="font-semibold">Document</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              value="non-document"
              type="radio"
              {...register("parcelType")}
            />
            <span className="font-semibold">Non-Document</span>
          </label>
        </div>

        {/* Parcel Info name/weight*/}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block mb-1 font-medium">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                placeholder="Parcel Name"
                className="border rounded-lg p-3 w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWeight")}
                placeholder="Parcel Weight (KG)"
                className="border rounded-lg p-3 w-full"
              />
            </div>
          </div>

          <div className="w-full h-px bg-gray-300 my-6"></div>

          {/* Sender & Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sender */}
            <div>
              <h2 className="text-xl font-extrabold mb-4">Sender Details</h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block mb-1 font-medium">Sender Name</label>
                  <input
                    type="text"
                    {...register("senderName")}
                    placeholder="Sender Name"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    placeholder="Address"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Sender Phone No
                  </label>
                  <input
                    type="text"
                    {...register("senderPhone")}
                    placeholder="Sender Phone No"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Your District
                  </label>
                  <select
                    type="select"
                    {...register("senderDistrict")}
                    className="border rounded-lg p-3 w-full "
                  >
                    <option value="">Select your District</option>
                    <option>Dhaka</option>
                    <option>Faridpur</option>
                    <option>Gazipur</option>
                    <option>Gopalganj</option>
                    <option>Kishoreganj</option>
                    <option>Madaripur</option>
                    <option>Manikganj</option>
                    <option>Munshiganj</option>
                    <option>Narayanganj</option>
                    <option>Narsingdi</option>
                    <option>Rajbari</option>
                    <option>Shariatpur</option>
                    <option>Tangail</option>
                    <option>Bogra</option>
                    <option>Joypurhat</option>
                    <option>Naogaon</option>
                    <option>Natore</option>
                    <option>Chapai Nawabganj</option>
                    <option>Pabna</option>
                    <option>Rajshahi</option>
                    <option>Sirajganj</option>
                    <option>Dinajpur</option>
                    <option>Gaibandha</option>
                    <option>Kurigram</option>
                    <option>Lalmonirhat</option>
                    <option>Nilphamari</option>
                    <option>Panchagarh</option>
                    <option>Rangpur</option>
                    <option>Thakurgaon</option>
                    <option>Habiganj</option>
                    <option>Moulvibazar</option>
                    <option>Sunamganj</option>
                    <option>Sylhet</option>
                    <option>Barguna</option>
                    <option>Barisal</option>
                    <option>Bhola</option>
                    <option>Jhalokathi</option>
                    <option>Patuakhali</option>
                    <option>Pirojpur</option>
                    <option>Bandarban</option>
                    <option>Brahmanbaria</option>
                    <option>Chandpur</option>
                    <option>Chattogram</option>
                    <option>Cox's Bazar</option>
                    <option>Feni</option>
                    <option>Khagrachhari</option>
                    <option>Lakshmipur</option>
                    <option>Noakhali</option>
                    <option>Rangamati</option>
                    <option>Bagerhat</option>
                    <option>Chuadanga</option>
                    <option>Jashore</option>
                    <option>Jhenaidah</option>
                    <option>Khulna</option>
                    <option>Kushtia</option>
                    <option>Magura</option>
                    <option>Meherpur</option>
                    <option>Narail</option>
                    <option>Satkhira</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Pickup Instruction
                  </label>
                  <textarea
                    placeholder="Pickup Instruction"
                    {...register("senderPickupInstruction")}
                    className="border rounded-lg p-3 w-full h-24"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div>
              <h2 className="text-xl font-extrabold  mb-4">Receiver Details</h2>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Name
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverName")}
                    placeholder="Receiver Name"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverAddress")}
                    placeholder="Address"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Receiver Contact No
                  </label>
                  <input
                    type="text"
                    {...register("ReceiverContactNo")}
                    placeholder="Receiver Contact No"
                    className="border rounded-lg p-3 w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Receiver District
                  </label>
                  <select
                    type="select"
                    {...register("ReceiverDistrict")}
                    className="border rounded-lg p-3 w-full text-gray-600"
                  >
                    <option value="">Select your District</option>
                    <option>Dhaka</option>
                    <option>Faridpur</option>
                    <option>Gazipur</option>
                    <option>Gopalganj</option>
                    <option>Kishoreganj</option>
                    <option>Madaripur</option>
                    <option>Manikganj</option>
                    <option>Munshiganj</option>
                    <option>Narayanganj</option>
                    <option>Narsingdi</option>
                    <option>Rajbari</option>
                    <option>Shariatpur</option>
                    <option>Tangail</option>
                    <option>Bogra</option>
                    <option>Joypurhat</option>
                    <option>Naogaon</option>
                    <option>Natore</option>
                    <option>Chapai Nawabganj</option>
                    <option>Pabna</option>
                    <option>Rajshahi</option>
                    <option>Sirajganj</option>
                    <option>Dinajpur</option>
                    <option>Gaibandha</option>
                    <option>Kurigram</option>
                    <option>Lalmonirhat</option>
                    <option>Nilphamari</option>
                    <option>Panchagarh</option>
                    <option>Rangpur</option>
                    <option>Thakurgaon</option>
                    <option>Habiganj</option>
                    <option>Moulvibazar</option>
                    <option>Sunamganj</option>
                    <option>Sylhet</option>
                    <option>Barguna</option>
                    <option>Barisal</option>
                    <option>Bhola</option>
                    <option>Jhalokathi</option>
                    <option>Patuakhali</option>
                    <option>Pirojpur</option>
                    <option>Bandarban</option>
                    <option>Brahmanbaria</option>
                    <option>Chandpur</option>
                    <option>Chattogram</option>
                    <option>Cox's Bazar</option>
                    <option>Feni</option>
                    <option>Khagrachhari</option>
                    <option>Lakshmipur</option>
                    <option>Noakhali</option>
                    <option>Rangamati</option>
                    <option>Bagerhat</option>
                    <option>Chuadanga</option>
                    <option>Jashore</option>
                    <option>Jhenaidah</option>
                    <option>Khulna</option>
                    <option>Kushtia</option>
                    <option>Magura</option>
                    <option>Meherpur</option>
                    <option>Narail</option>
                    <option>Satkhira</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    Delivery Instruction
                  </label>
                  <textarea
                    {...register("DeliveryInstruction")}
                    placeholder="Delivery Instruction"
                    className="border rounded-lg p-3 w-full h-24"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            * PickUp Time 4pm-7pm Approx.
          </p>

          <input
            type="submit"
            value="Proceed to Confirm Booking"
            className="mt-6 bg-primary  px-8 py-3 rounded-lg hover:bg-green-700 transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
