import { useEffect, useState } from "react";
import DataContext from "../../context";
import { useContext } from "react";

const Column = () => {
  const [isData, isSetData] = useState(null);
  const { allData } = useContext(DataContext);

  useEffect(() => {
    isSetData(allData);
  }, []);
  
  const formData = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}년 ${month}월 ${day}일`;
  };

  const columns = ['발명의 명칭', '출원인', '출원상태', '출원일'];
  return (
    <>
      <div className='completed-consultation__column-tab'></div>
      <section className='completed-consultation__column'>
        <table className="completed-consultation__table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          {isData ? (
            <tbody>
            {isData.map((row, index) => (
              <tr key={index}>
                <td>{row.InventionName}</td>
                <td>{row.Applicant}</td>
                <td>{row.RegistrationStatus}</td>
                <td>{formData(row.ApplicationDate)}</td>
              </tr>
            ))}
            </tbody>
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </section>
    </>
  );
};

export default Column;