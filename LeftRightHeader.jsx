export default function LeftRightHeader({ Left, Right }) {
  return (
    <div className="flex">
      <div className="w-2/3">{Left}</div>
      <div className="w-1/3">
        <div class="flex  justify-end">{Right}</div>
      </div>
    </div>
  );
}
