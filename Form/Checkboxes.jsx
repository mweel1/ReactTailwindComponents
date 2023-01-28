export default function Checkboxes({
  name = "checkboxess",
  checks = [
    { title: "Example", description: "Testing 123" },
    { title: "Example2", description: "Testing 123" },
  ],
}) {
  return (
    <>
      <fieldset className="space-y-2">
        <legend className="sr-only">Notifications</legend>
        {checks.map((option) => (
          <div className="relative flex items-start" key={option.title}>
            <div className="flex h-5 items-center">
              <input
                id={option.title}
                aria-describedby="comments-description"
                name={name}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-secondary-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor={option.title}
                className="font-medium text-gray-700"
              >
                {option.title}
              </label>
              <p id={name + "_description"} className="text-gray-500">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </fieldset>
    </>
  );
}
