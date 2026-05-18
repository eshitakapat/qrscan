export default function DashboardMiniCards() {
  return (
    <div className="space-y-6">
      
      {/* Alerts */}
      <div className="rounded-3xl border border-[#4B4038] bg-[#111827]/60 p-6 shadow-md">
        <h3 className="text-lg font-semibold text-[#CAAA98]">
          Active Alerts
        </h3>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-[#202940] p-4">
            <p className="font-medium text-[#CAAA98]">
              Low Stock Warning
            </p>

            <p className="mt-1 text-sm text-[#9A8678]">
              5 products are below threshold.
            </p>
          </div>

          <div className="rounded-2xl bg-[#202940] p-4">
            <p className="font-medium text-[#CAAA98]">
              Expiry Alert
            </p>

            <p className="mt-1 text-sm text-[#9A8678]">
              2 products nearing expiry date.
            </p>
          </div>
        </div>
      </div>

      {/* Performance */}
      <div className="rounded-3xl border border-[#4B4038] bg-[#111827]/60 p-6 shadow-md">
        <h3 className="text-lg font-semibold text-[#CAAA98]">
          Performance
        </h3>

        <div className="mt-5 space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-[#9A8678]">
                Inventory Accuracy
              </span>

              <span className="text-[#CAAA98]">
                92%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#4B4038]">
              <div className="h-full w-[92%] rounded-full bg-[#CAAA98]" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-[#9A8678]">
                Task Completion
              </span>

              <span className="text-[#CAAA98]">
                76%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#4B4038]">
              <div className="h-full w-[76%] rounded-full bg-[#CAAA98]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}