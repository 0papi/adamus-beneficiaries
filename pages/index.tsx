import data from "../fake.json";

export default function Home() {
  const studentData = data?.data;

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold py-2">
          List of beneficiaries of the Adamus Scholarship
        </h2>

        <button className="bg-indigo-500 px-4 py-2 text-white rounded-md">
          Add Your Name
        </button>
      </div>
    </div>
  );
}
