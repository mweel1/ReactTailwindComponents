import { useEffect, useState } from "react";

export default function ValidationError({
  name,
  errors,
  minLength = null,
  checkEmail = null,
}) {
  const [myErrors, setMyErrors] = useState(errors);

  useEffect(() => {
    console.log(errors);
    setMyErrors(errors);
  }, [errors]);

  useEffect(() => {
    console.log(errors);
  }, []);

  return (
    <>
      {myErrors && myErrors[name]?.type === "required" && (
        <span className="error text-xs text-red-400">Required</span>
      )}
      {myErrors && minLength && myErrors[name]?.type === "minLength" && (
        <span className="error text-red-400 text-xs">
          Must be at least {minLength} characters
        </span>
      )}
      {myErrors && checkEmail && myErrors[name]?.type === "checkEmail" && (
        <span className="error text-red-400 text-xs">
          You must enter a valid e-mail address
        </span>
      )}
    </>
  );
}
