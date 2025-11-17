import React, { use, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FiSearch } from "react-icons/fi";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  // console.log(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      // go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div>
      <h2 className="text-5xl my-5 text-center font-bold">
        We are available in 64 districts
      </h2>
      <form onSubmit={handleSearch} className="my-8">
        <div
          class="w-full max-w-xl mx-auto bg-gray-100 rounded-full flex items-center p-2 gap-2 
            sm:p-3 sm:gap-3"
        >
          <span className="px-3 text-gray-500">
            <FiSearch />
          </span>

          <input
            name="location"
            type="text"
            placeholder="Search here"
            class="flex-1 bg-transparent outline-none text-gray-700 text-sm sm:text-base"
          />

          <button
            type="submit"
            class="bg-primary hover:bg-lime-400 text-black font-medium px-3 py-1.5 rounded-full 
           text-sm sm:text-base sm:px-6 sm:py-2 transition-all"
          >
            Search
          </button>
        </div>
      </form>
      {/*  */}
      <h2 className="text-3xl font-extrabold my-4 ml-3">
        We deliver almost all over Bangladesh
      </h2>
      <div className="border rounded-xl w-full h-[800px]">
        <MapContainer
          className="h-[800px] rounded-xl "
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />
                <span className="font-semibold"> Service Area:</span>{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
