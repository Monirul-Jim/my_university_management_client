import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Hello, This is AcademicSemester component</h1>
    </div>
  );
};

export default AcademicSemester;
