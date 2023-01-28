export default function AvatarImage({
  image = "https://loremflickr.com/320/240/dog",
}) {
  return (
    <div>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={image} alt="" />
      </div>
    </div>
  );
}
