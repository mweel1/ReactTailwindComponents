import { Link } from "react-router-dom";

export default function Table({ columns, rows }) {
  const OtherRowColumn = ({ item, index }) => {
    return (
      <td className={`${index == 0 ? "px-6" : ""} py-4 text-sm text-gray-500`}>
        {!item.link && <div>{item.label}</div>}
        {item.link && (
          <>
            <Link to={item.link}>{item.label}</Link>
          </>
        )}

        {item.subItem && (
          <div className="text-gray-400 text-xs">{item.subItem}</div>
        )}
      </td>
    );
  };

  const Column = ({ item, index }) => {
    return (
      <th
        scope="col"
        className={`py-3.5 pr-3 text-left text-sm ${
          index == 0 ? "pl-6" : ""
        } font-semibold text-gray-900 `}
      >
        {item}
      </th>
    );
  };

  const FirstRowColumn = ({ item, index }) => {
    return (
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
        {!item.link && <div>{item.label}</div>}
        {item.link && (
          <>
            <Link to={item.link}>{item.label}</Link>
          </>
        )}

        {item.subItem && (
          <div className="text-gray-400 text-xs">{item.subItem}</div>
        )}
        {/* {item.hasOwnProperty("extraOnSmall") && (
          <>
            {" "}
            <dl className="font-normal lg:hidden">
              <dt className="sr-only">Title</dt>
              <dd className="mt-1 truncate text-gray-700">{item}</dd>
              <dt className="sr-only sm:hidden">Email</dt>
              <dd className="mt-1 truncate text-gray-500 sm:hidden">
                {data.email}
              </dd>
            </dl>
          </>
        )} */}
      </td>
    );
  };

  const RowChooser = ({ item, index }) => {
    if (index == 0) return <FirstRowColumn item={item} index={index} />;
    if (index > 0) return <OtherRowColumn item={item} index={index} />;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="table-auto divide-y divide-gray-300 w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((item, index) => {
                return <Column item={item} index={index} />;
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
              <tr key={row.id}>
                {row.items.map((item, index) => {
                  return <RowChooser item={item} index={index} />;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
