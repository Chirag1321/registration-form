import logo from "./assets/Sharda.png";
import mylogo from "./assets/shardamain.webp";
import islogo from "./assets/shardapic.webp";
import newlogo from "./assets/shardaads.jpg";

function Submitted() {
  const data = JSON.parse(sessionStorage.getItem("submittedData"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
       <div className="flex items-center justify-center gap-20 mb-3">

  <img
    src={logo}
    alt="Sharda University Logo"
    className="w-48 h-32 object-contain"
  />

  <img
    src={newlogo}
    alt="New Logo"
    className="w-77 h-97 object-contain"
  />

  <img
    src={mylogo}
    alt="SGI Logo"
    className="w-44 h-auto object-contain"
  />

</div>

        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          Registration Submitted
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

  {/* Registration Details */}
  <div className="space-y-5 text-lg">
    <p>
      <strong>Name:</strong> {data?.name}
    </p>

    <p>
      <strong>Mobile:</strong> {data?.mobile}
    </p>

    <p>
      <strong>Email:</strong> {data?.email}
    </p>

    <p>
      <strong>Age:</strong> {data?.age}
    </p>

    <p>
      <strong>PIN Code:</strong> {data?.pin}
    </p>

    <p>
      <strong>City:</strong> {data?.city}
    </p>

    <p>
      <strong>Date of Birth:</strong> {data?.dob}
    </p>
  </div>

  {/* Sharda Image */}
  <div className="flex justify-center">
    <img
      src={islogo}
      alt="Sharda University"
      className="w-85 h-90 object-contain rounded-xl"
    />
  </div>

</div>

      </div>
    </div>
  );
}

export default Submitted;