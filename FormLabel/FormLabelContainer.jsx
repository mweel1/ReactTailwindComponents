export default function FormLabelContainer({ left, right }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      {left}
      <div className="mt-1 sm:col-span-2 sm:mt-0 ">{right}</div>
    </div>
  );
}
