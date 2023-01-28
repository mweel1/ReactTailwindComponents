import { useState, useEffect } from "react";

export default function HeaderDescription({
  header,
  description = "",
  className = "",
  headerStyle = {},
}) {
  const [myHeader, setMyHeader] = useState(header);
  const [myDescription, setMyDescription] = useState(header);

  useEffect(() => {
    setMyHeader(header);
    setMyDescription(description);
  }, [header, description]);

  return (
    <>
      {myHeader && myDescription && (
        <>
          <div className={className}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
              <div style={headerStyle}>{myHeader}</div>
            </h1>
            <p className="mt-1 max-w-2xl text-md text-gray-500">
              {myDescription}
            </p>
          </div>
        </>
      )}
    </>
  );
}
