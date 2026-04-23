export default function Calendar() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Follow-ups</h3>

      <div className="space-y-3 text-sm">
        <div className="p-3 border rounded-md">
          <p className="font-medium">John Doe</p>
          <p className="text-gray-500">Today - 3:00 PM</p>
        </div>

        <div className="p-3 border rounded-md">
          <p className="font-medium">Sarah Smith</p>
          <p className="text-gray-500">Tomorrow - 11:00 AM</p>
        </div>

        <div className="p-3 border rounded-md">
          <p className="font-medium">Mike Ross</p>
          <p className="text-gray-500">Friday - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
}
